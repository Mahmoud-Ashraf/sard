import { useSelector } from "react-redux";
import useHTTP from "../../Hooks/use-http";
import { useEffect, useState } from "react";
import NewsBlock from "../../UI/NewsBlock/NewsBlock";
import HomeSectionHeder from "../../UI/HomeSection/HomeSectionHeader/HomeSectionHeader";
import Translate from "../../helpers/Translate/Translate";

const RelatedNews = (props) => {
    const { sendRequest } = useHTTP();
    const token = useSelector(state => state.auth.token);
    const [relatedNews, setRelatedNews] = useState([]);
    const getRelatedNews = () => {
        if (token) {
            sendRequest(
                {
                    url: `get_related_news/${props.news?.id}`,
                    method: 'GET'
                },
                data => {
                    console.log(data);
                    setRelatedNews(data.data);
                }
            )
        }
    }
    useEffect(() => {
        getRelatedNews();
    }, [token]);
    return (
        <div className="related-news">
            <header className="home-section-header">
                <h2 className="home-section-header-title fw-bold"><Translate id='titles.relatedNews' /></h2>
                <button className="btn btn-danger">قراءة المقال من المصدر</button>
            </header>
            <div className="row">
                {
                    relatedNews.map(singleNews =>
                        <div className="col-6" key={singleNews.id}>
                            <NewsBlock singleNews={singleNews} size="sm" />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default RelatedNews;