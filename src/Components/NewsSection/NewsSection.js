import { Fragment, useEffect, useState } from "react";
import { NewsActions } from "../../Store/News/News";
import Loader from "../Loader/Loader";
import NewsList from "../NewsList/NewsList";
import { useDispatch, useSelector } from "react-redux";
import useHTTP from "../../Hooks/use-http";
import { useParams } from "react-router-dom";
import Translate from "../../helpers/Translate/Translate";

const NewsSection = () => {
    const { categoryCode } = useParams();
    const newsStore = useSelector(state => state.news['category' + categoryCode]);
    const categoriesArr = useSelector(state => state.news.categories);
    const { isLoading, sendRequest } = useHTTP();
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [nextPage, setNextPage] = useState(1);
    const [showLoader, setShowLoader] = useState(false);
    const [categoryId, setCategoryId] = useState(() => {
        return categoriesArr.find(category => category.code === categoryCode)?.id;
    });
    useEffect(() => {
        if (token && categoryId) {
            setShowLoader(true);
            setPage(1);
            dispatch(NewsActions.customNews({ ['category' + categoryCode]: [] }));
            getNews(1);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, categoryId]);
    useEffect(() => {
        // console.log(page);
        if (page > 1) {
            getNews(page);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        setNews(newsStore);
    }, [newsStore])

    useEffect(() => {
        setCategoryId(() => {
            return categoriesArr.find(category => category.code === categoryCode)?.id;
        });
    }, [categoriesArr, categoryCode])

    const getNews = (currentPage) => {
        if (token) {
            sendRequest(
                {
                    url: `get_home_newss?categories_arr[0]=${categoryId}&filter_type=all&page=${currentPage}&paginate=10`
                },
                data => {
                    const newData = data.data;
                    // setNews([...news, ...newData]);
                    setNextPage(data.pagination.next_page);
                    if (data.pagination.current_page === 1) {
                        dispatch(NewsActions.customNews({ ['category' + categoryCode]: [...newData] }));
                    } else {
                        dispatch(NewsActions.customNews({ ['category' + categoryCode]: [...news, ...newData] }));
                    }
                    setShowLoader(false);
                },
                err => {

                }
            )
        }
    }

    return (
        showLoader ?
            <Loader />
            :
            <Fragment>
                <NewsList news={news} />
                {news?.length > 0 && <div className="show-more text-center mt-4">
                    <button className="btn btn-danger" disabled={!nextPage || isLoading} onClick={() => setPage(nextPage)}><Translate id="buttons.showMore" /> {isLoading && <i className="fa-solid fa-spinner fa-spin"></i>}</button>
                </div>}
            </Fragment>
    )
}
export default NewsSection;