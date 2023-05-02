import { useParams } from "react-router-dom";
import NewsList from "../NewsList/NewsList";
import useHTTP from "../../Hooks/use-http";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

const SearhResult = () => {
    const { searchText } = useParams();
    const { isLoading, sendRequest } = useHTTP();
    const token = useSelector(state => state.auth.token);
    const [news, setNews] = useState([]);
    useEffect(() => {
        getNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, searchText]);

    const getNews = () => {
        sendRequest(
            {
                url: `search_news?words=${searchText}`,
                method: 'GET'
            },
            data => {
                setNews(data.data);
            }
        )

    }
    return (
        isLoading ?
            <Loader />
            :
            <NewsList news={news} />
    )
}

export default SearhResult;