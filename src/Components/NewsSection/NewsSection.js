import { useEffect, useState } from "react";
import { NewsActions } from "../../Store/News/News";
import Loader from "../Loader/Loader";
import NewsList from "../NewsList/NewsList";
import { useDispatch, useSelector } from "react-redux";
import useHTTP from "../../Hooks/use-http";
import { useParams } from "react-router-dom";

const NewsSection = () => {
    const { categoryId } = useParams();
    const newsStore = useSelector(state => state.news['category' + categoryId]);
    const { isLoading, sendRequest } = useHTTP();
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    const [news, setNews] = useState(newsStore);
    useEffect(() => {
        getNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, categoryId]);

    useEffect(() => {
        setNews(newsStore);
    }, [newsStore])

    const getNews = () => {
        if (token) {
            sendRequest(
                {
                    url: `get_home_newss?categories_arr[0]=${categoryId}&filter_type=all&page=1&paginate=10`
                },
                data => {
                    dispatch(NewsActions.customNews({ ['category' + categoryId]: data.data }));
                },
                err => {

                }
            )
        }
    }

    return (
        isLoading ?
            <Loader />
            :
            <NewsList news={news} />
    )
}
export default NewsSection;