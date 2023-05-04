import useHTTP from "../../Hooks/use-http";
import { Link } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Translate from "../../helpers/Translate/Translate";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useTranslate from "../../Hooks/use-translate";
import Loader from "../Loader/Loader";
import NewsList from "../NewsList/NewsList";



const LatestNews = (props) => {
    const { isLoading, sendRequest } = useHTTP();
    const token = useSelector(state => state.auth.token);
    const [news, setNews] = useState([]);
    const [tabs] = useState([
        { name: 'newest', title: useTranslate('titles.newest') },
        { name: 'most_readed', title: useTranslate('titles.most_readed') }
    ]);
    const [key, setKey] = useState(tabs[0].name);
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
                {
                    tabs.map((tab, i) => {
                        return (
                            <Tab key={i} eventKey={tab.name} title={tab.title}>
                                {isLoading ?
                                    <Loader />
                                    :
                                    <NewsList news={news} hideBlockData={true} />
                                }
                            </Tab>
                        )
                    })
                }
            </Tabs>
            <Link className="home-section-header-showall tabs-section-header-showall" to={`/news/${key}`}><Translate id="showAll" /></Link>
        </section>
    )
}
export default LatestNews;