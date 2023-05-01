import { Link } from "react-router-dom";
import NewsBlock from "../../UI/NewsBlock/NewsBlock";

const SingleNews = (props) => {
    var date = new Date(props.singleNews.created_at);
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };
    return (
        <div className="single-news">
            <div className="row">
                <div className="col-4">
                    <div className="single-news-cover">
                        <NewsBlock singleNews={props.singleNews} size="sm" />
                    </div>
                </div>
                <div className="col-8">
                    <div className="single-news-details">
                        <Link to={`/news/details/${props.singleNews?.id}`}>
                            <h3>{props.singleNews.title}</h3>
                            <p>{props.singleNews.content.substring(0, 100)} ...</p>
                        </Link>
                        <span>{date.toLocaleDateString('ar-SA', { weekday: 'long', ...options }) + ' هجريا,' + date.toLocaleDateString('ar-EG', options)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleNews;