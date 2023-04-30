import { useParams } from "react-router-dom";
import SingleNews from "../SingleNews/SingleNews";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import useHTTP from "../../Hooks/use-http";
import { NewsActions } from "../../Store/News/News";
import NoData from "../NoData/NoData";
import Loader from "../Loader/Loader";

const NewsList = () => {
    const { categoryId } = useParams();
    const news = useSelector(state => state.news['category' + categoryId]);
    const { isLoading, sendRequest } = useHTTP();
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    useEffect(() => {
        getNews();
    }, [token, categoryId]);

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
            <div className="news-list">
                {
                    news?.length > 0 ?
                        news?.map(singleNews => <SingleNews key={singleNews?.id} singleNews={singleNews} />)
                        :
                        <NoData />
                }
            </div>
    )
}

export default NewsList;