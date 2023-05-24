import { useEffect, useMemo, useState } from "react";
import useHTTP from "../../Hooks/use-http";
import Translate from "../../helpers/Translate/Translate";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from '../../Components/Loader/Loader';

const SelectResources = () => {
    const navigate = useNavigate();
    const { isLoading, sendRequest } = useHTTP();
    const [resources, setResources] = useState([]);
    const [categoriesArr, setCategoriesArr] = useState([]);
    const [countriesArr, setCountriesArr] = useState([]);
    const token = useSelector(state => state.auth.token);

    const getFavCategories = () => {
        sendRequest(
            {
                url: 'client/get_favorites?type=category',
                method: 'GET'
            },
            data => {
                setCategoriesArr(data.data);
            },
            err => { }
        )
    }
    const getFavCountries = () => {
        sendRequest(
            {
                url: 'client/get_favorites?type=country',
                method: 'GET'
            },
            data => {
                setCountriesArr(data.data);
            },
            err => { }
        )
    }

    const getResources = useMemo(() => {
        if (categoriesArr.length > 0 && countriesArr.length > 0) {
            sendRequest(
                {
                    url: `get_all_resources?paginate=1000&${categoriesArr.map((category, i) => `categories_arr[${i}]=${category.id}`).join('&')}&${countriesArr.map((country, i) => `countries_arr[${i}]=${country.id}`).join('&')}`,
                    method: 'GET'
                },
                data => {
                    setResources(data.data);
                }
            )
        }
    }, [categoriesArr, countriesArr]);

    const toggleResource = (resourceId) => {
        const newResources = resources.map(resource => {
            if (resource.id === resourceId) {
                resource.is_following = !resource.is_following;
            }
            return resource;
        })
        setResources(newResources)
    }

    const followResources = () => {
        sendRequest(
            {
                url: 'client/multiple_follow_action',
                method: 'POST',
                body: {
                    follow_action: 'sync',
                    favorable_type: 'resource',
                    favorable_ids: resources.filter(resource => resource.is_following).map(resource2 => resource2.id)
                }
            },
            data => {
                navigate('/home');
            },
            err => {

            }
        )
    }

    const onNext = (e) => { }

    useEffect(() => {
        if (token) {
            getFavCategories();
            getFavCountries();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])
    return (
        isLoading ?
            <Loader />
            :
            <div className="select-resources">
                <header>
                    <h2 className="step-header"><Translate id="titles.resources" /></h2>
                </header>
                <div className="select-resources-list">
                    {
                        resources?.map(resource => {
                            return (
                                <div key={resource.id} className={`resource ${resource.is_following ? 'checked' : ''}`} onClick={() => toggleResource(resource.id)}>
                                    <input type="checkbox" checked={resource.is_following} onChange={onNext} />
                                    <img src={resource.logo} alt="resource flag" />
                                    <span>{resource.name_ar}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row">
                    <div className="col-md-3 mt-5">
                        <button className="main-button w-100" onClick={followResources}>التالي</button>
                    </div>
                </div>
            </div>
    )
}

export default SelectResources;