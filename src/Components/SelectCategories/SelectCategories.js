import { useEffect, useState } from "react";
import useHTTP from "../../Hooks/use-http";
import Translate from "../../helpers/Translate/Translate";
import { useDispatch } from "react-redux";
import { StepperActions } from "../../Store/Stepper/Stepper";

const SelectCategories = () => {
    const dispatch = useDispatch();
    const { sendRequest } = useHTTP();
    const [categories, setCategories] = useState([]);
    const getCategories = () => {
        sendRequest(
            {
                url: 'get_categories',
                method: 'GET'
            },
            data => {
                setCategories(data.data);
            }
        )
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

    const onNext = (e) => {
        e.preventDefault();
        dispatch(StepperActions.nextStep());
    }

    useEffect(() => {
        getCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
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
                    <button className="main-button w-100" onClick={onNext}>التالي</button>
                </div>
            </div>
        </div>
    )
}

export default SelectCategories;