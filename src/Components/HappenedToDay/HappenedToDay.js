import { Link } from "react-router-dom";
import HomeSection from "../../UI/HomeSection/HomeSection";
import { useDispatch, useSelector } from "react-redux";
import useHTTP from "../../Hooks/use-http";
import { NewsActions } from "../../Store/News/News";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
// import NoData from "../NoData/NoData";

const HappenedToDay = () => {
    const dispatch = useDispatch();
    const HappenedToDayArr = useSelector(state => state.news['happendToday']);
    const token = useSelector(state => state.auth.token);
    const { isLoading, sendRequest } = useHTTP();

    const getTrend = () => {
        if (token) {
            sendRequest(
                {
                    url: 'get_trends',
                    method: 'GET'
                },
                data => {
                    dispatch(NewsActions.customNews({ happendToday: data.data }));
                },
                err => {

                }
            )
        }
    }

    useEffect(() => {
        getTrend();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);
    return (
        isLoading ?
            <Loader />
            :
            HappenedToDayArr.length > 0 ?
                <HomeSection title="titles.happendToday" showAll="/">
                    <div className="row">
                        {
                            HappenedToDayArr?.map((post, i) => {
                                return (
                                    <div key={i} className="col">
                                        <Link>
                                            <div className="happened-today-post">
                                                <img src={post?.image} alt="news cover" />
                                                <h3>{post?.title_ar}</h3>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </HomeSection>
                :
                <div />

    )
}

export default HappenedToDay;