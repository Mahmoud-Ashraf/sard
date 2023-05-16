import { useEffect, useState } from "react";
import useHTTP from "../../Hooks/use-http";
import Translate from "../../helpers/Translate/Translate";
import { useDispatch } from "react-redux";
import { StepperActions } from "../../Store/Stepper/Stepper";

const SelectCountries = () => {
    const dispatch = useDispatch();
    const { sendRequest } = useHTTP();
    const [countries, setCountries] = useState([]);
    const getCountries = () => {
        sendRequest(
            {
                url: 'get_all_countries',
                method: 'GET'
            },
            data => {
                setCountries(data.data);
            }
        )
    }

    const toggleCountry = (countryId) => {
        const newCountries = countries.map(country => {
            if (country.id === countryId) {
                country.is_following = !country.is_following;
            }
            return country;
        })
        setCountries(newCountries)
    }

    const onNext = (e) => {
        e.preventDefault();
        dispatch(StepperActions.nextStep());
    }

    useEffect(() => {
        getCountries();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="select-countries">
            <header>
                <h2 className="step-header"><Translate id="titles.countries" /></h2>
            </header>
            <div className="select-countries-list">
                {
                    countries?.map(country => {
                        return (
                            <div key={country.id} className={`country ${country.is_following ? 'checked' : ''}`} onClick={() => toggleCountry(country.id)}>
                                <input type="checkbox" checked={country.is_following} onChange={onNext} />
                                <img src={country.image} alt="country flag" />
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

export default SelectCountries;