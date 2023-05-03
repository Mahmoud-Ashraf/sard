import useHTTP from "../../Hooks/use-http";
import { Link } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Translate from "../../helpers/Translate/Translate";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useTranslate from "../../Hooks/use-translate";
import Loader from "../Loader/Loader";



const LatestNews = (props) => {
    const [key, setKey] = useState('newest');
    const { isLoading, sendRequest } = useHTTP();
    const token = useSelector(state => state.auth.token);
    const [News, setNews] = useState([]);

    const getNews = () => {
        if (token) {
            sendRequest(
                {
                    url: `get_home_newss?filter_type=${key}&paginate=7&page=1`,
                    method: 'GET'
                },
                data => {
                    setNews(data.data);
                },
                err => {

                }
            )
        }
    }
    useEffect(() => {
        getNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, key])

    return (

        <section className="tabs-section">
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3">
                <Tab eventKey="newest" title={useTranslate(`titles.newest`)}>
                    {News?.map(New => {
                        return (
                            isLoading ?
                                <Loader />
                                :
                                <div className="latest-news-main-card" >
                                    <div className="row">
                                        <div className="col-3">
                                            <img src={New.resource.logo} alt="..." />
                                        </div>
                                        <div className="col-9">
                                            <div className="latest-news-main-card-body">
                                                <Link className="card-text" to="/">
                                                    <h6>{New.title ? "" : New.content }</h6>
                                                </Link>
                                                <p className="mt-3"><small className="text-body-secondary">{New.created_from}</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )
                    })}
                </Tab>

                <Tab eventKey="most_readed" title={useTranslate(`titles.most_readed`)}>
                    {News?.map(New => {
                        return (
                            isLoading ?
                                <Loader />
                                :
                                <div className="latest-news-main-card" >
                                    <div className="row">
                                        <div className="col-3">
                                            <img src={New.resource.logo} alt="..." />
                                        </div>
                                        <div className="col-9">
                                            <div className="latest-news-main-card-body">
                                                <Link className="card-text" to="/">
                                                    <h6>{New.title ? "" : New.content}</h6>
                                                </Link>
                                                <p className="mt-3"><small className="text-body-secondary">{New.created_from}</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )
                    })}
                </Tab>

            </Tabs>
            <Link className="home-section-header-showall tabs-section-header-showall" to={`/news/${key}`}><Translate id="showAll" /></Link>
        </section>
    )
}
export default LatestNews;