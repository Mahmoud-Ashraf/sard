import { useSelector } from "react-redux";
import useHTTP from "../../Hooks/use-http";
import { useEffect, useState } from "react";
import NewsBlock from "../../UI/NewsBlock/NewsBlock";
import Translate from "../../helpers/Translate/Translate";
import { Link } from "react-router-dom";

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
                    setRelatedNews(data.data);
                }
            )
        }
    }
    useEffect(() => {
        getRelatedNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, props.news]);
    return (
        <div className="related-news mt-5">
            <header className="home-section-header">
                <h2 className="home-section-header-title fw-bold"><Translate id='titles.relatedNews' /></h2>
                {
                    props.news?.link_url &&
                    <Link className="btn btn-danger btn-sm d-flex align-items-center" to={`/source/${props.news?.id}`}>
                        <span className="ms-2">قراءة المقال من المصدر</span>
                        <i className="fa-solid fa-chevron-left fa-xs"></i>
                        <i className="fa-solid fa-bars-staggered fa-flip-horizontal"></i>
                    </Link>
                }
            </header>
            <div className="row g-2">
                {
                    relatedNews?.slice(0, 4).map(singleNews =>
                        <div className="col-6" key={singleNews.id}>
                            <NewsBlock singleNews={singleNews} size="sm" />
                        </div>
                    )
                }
            </div>
        </div >
    )
}

export default RelatedNews;