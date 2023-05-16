import { useEffect, useState } from "react";
import useHTTP from "../../Hooks/use-http";
import Translate from "../../helpers/Translate/Translate";
import { useDispatch } from "react-redux";
import { StepperActions } from "../../Store/Stepper/Stepper";

const SelectResources = () => {
    const dispatch = useDispatch();
    const { sendRequest } = useHTTP();
    const [resources, setResources] = useState([]);
    let arr1 = [1, 2, 3];
    let arr2 = [2, 4, 1];



    const getResources = () => {
        sendRequest(
            {
                url: `get_all_resources?paginate=1000&${arr1.map((category, i) => `categories_arr[${i}]=${category}`).join('&')}&${arr2.map((country, i) => `countries_arr[${i}]=${country}`).join('&')}`,
                method: 'GET'
            },
            data => {
                setResources(data.data);
            }
        )
    }

    const toggleResource = (resourceId) => {
        const newResources = resources.map(resource => {
            if (resource.id === resourceId) {
                resource.is_following = !resource.is_following;
            }
            return resource;
        })
        setResources(newResources)
    }

    const onNext = (e) => {
        e.preventDefault();
        dispatch(StepperActions.nextStep());
    }

    useEffect(() => {
        getResources();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
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
                    <button className="main-button w-100" onClick={onNext}>التالي</button>
                </div>
            </div>
        </div>
    )
}

export default SelectResources;