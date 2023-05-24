import { useEffect, useState } from "react";
import useHTTP from "../../Hooks/use-http";
import Translate from "../../helpers/Translate/Translate";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from '../../Components/Loader/Loader';
const SelectCategories = () => {
    const navigate = useNavigate();
    const { isLoading, sendRequest } = useHTTP();
    const [categories, setCategories] = useState([]);
    const token = useSelector(state => state.auth.token);
    const getCategories = () => {
        if (token) {
            sendRequest(
                {
                    url: 'get_categories',
                    method: 'GET'
                },
                data => {
                    setCategories(data.data);
                },
                err => {

                }
            )
        }
    }

    const toggleCategory = (categoryId) => {
        const newCategories = categories.map(category => {
            if (category.id === categoryId) {
                category.is_following = !category.is_following;
            }
            return category;
        })
        setCategories(newCategories)
    }

    const followCategories = () => {
        sendRequest(
            {
                url: 'client/multiple_follow_action',
                method: 'POST',
                body: {
                    follow_action: 'sync',
                    favorable_type: 'category',
                    favorable_ids: categories.filter(category => category.is_following).map(category2 => category2.id)
                }
            },
            data => {
                navigate('/auth/resources');
            },
            err => {

            }
        )
    }

    const onNext = (e) => {

    }

    useEffect(() => {
        getCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])
    return (
        isLoading ?
            <Loader />
            :
            <div className="select-categories">
                <header>
                    <h2 className="step-header"><Translate id="titles.categories" /></h2>
                </header>
                <div className="select-categories-list">
                    {
                        categories?.map(category => {
                            return (
                                <div key={category.id} className={`category ${category.is_following ? 'checked' : ''}`} onClick={() => toggleCategory(category.id)}>
                                    <input type="checkbox" checked={category.is_following} onChange={onNext} />
                                    <img src={category.image} alt="category flag" />
                                    <span>{category.name_ar}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row">
                    <div className="col-md-3 mt-5">
                        <button className="main-button w-100" onClick={followCategories}>التالي</button>
                    </div>
                </div>
            </div>
    )
}

export default SelectCategories;