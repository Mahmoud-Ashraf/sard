import { useParams } from "react-router-dom";
import useHTTP from "../../Hooks/use-http";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import Loader from "../Loader/Loader";
import NewsBlock from "../../UI/NewsBlock/NewsBlock";

const NewsDetails = () => {
    const { newsId } = useParams();
    // const newsStore = useSelector(state => state.news['category' + categoryId]);
    const { isLoading, sendRequest } = useHTTP();
    // const dispatch = useDispatch();
    // const date = new Date('2023-04-27T09:32:26.000000Z');
    // console.log(date)
    const token = useSelector(state => state.auth.token);
    const [selectedNews, setSelectedNews] = useState({});
    const [newsDate, setNewsDate] = useState(null);
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };

    // useEffect(() => {
    //     setNews(newsStore);
    // }, [newsStore])
    // console.log(new Intl.DateTimeFormat('ar-EG', { dateStyle: 'full', timeStyle: 'long' }).format(date));

    const getNews = () => {
        if (token) {
            sendRequest(
                {
                    url: `get_news_by_id/${newsId}`
                },
                data => {
                    setSelectedNews(data.data);
                    setNewsDate(new Date(data.data.created_at));
                    // dispatch(NewsActions.customNews({ ['category' + categoryId]: data.data }));
                },
                err => {

                }
            )
        }
    }

    useEffect(() => {
        getNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, newsId]);
    return (
        isLoading ?
            <Loader />
            :
            <div className="news-details">
                <NewsBlock singleNews={selectedNews} />
                <p className="mt-2">{newsDate?.toLocaleTimeString('ar-EG') + '. ' + newsDate?.toLocaleDateString('ar-SA', { weekday: 'long', ...options }) + '. ' + newsDate?.toLocaleDateString('ar-EG', options)}</p>
                <p className="news-details-content mt-3">
                    {selectedNews.content}
                </p>
            </div>
    )
}

export default NewsDetails;