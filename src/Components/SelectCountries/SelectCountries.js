import { useEffect, useState } from "react";
import useHTTP from "../../Hooks/use-http";
import Translate from "../../helpers/Translate/Translate";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from '../../Components/Loader/Loader';
const SelectCountries = () => {
    const navigate = useNavigate();
    const { isLoading, sendRequest } = useHTTP();
    const [countries, setCountries] = useState([]);
    const token = useSelector(state => state.auth.token);
    const getCountries = () => {
        if (token) {
            sendRequest(
                {
                    url: 'get_all_countries',
                    method: 'GET'
                },
                data => {
                    setCountries(data.data);
                },
                err => {

                }
            )
        }
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

    const followCountries = () => {
        sendRequest(
            {
                url: 'client/multiple_follow_action',
                method: 'POST',
                body: {
                    follow_action: 'sync',
                    favorable_type: 'country',
                    favorable_ids: countries.filter(country => country.is_following).map(country2 => country2.id)
                }
            },
            data => {
                navigate('/auth/resources-type')
            },
            err => {

            }
        )
    }

    const onNext = (e) => {

    }

    useEffect(() => {
        getCountries();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])
    return (
        isLoading ?
            <Loader />
            :
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
                        <button className="main-button w-100" onClick={followCountries}>التالي</button>
                    </div>
                </div>
            </div>
    )
}

export default SelectCountries;