import NewsBlock from "../../UI/NewsBlock/NewsBlock";

const SingleNews = (props) => {
    var date = new Date(props.singleNews.created_at);
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };
    var dateString = date.toLocaleDateString('ar-SA', options);
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
                        <h3>{props.singleNews.title}</h3>
                        <p>{props.singleNews.content}</p>
                        <span>{dateString}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleNews;