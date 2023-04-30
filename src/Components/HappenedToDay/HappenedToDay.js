import { Link } from "react-router-dom";
import HomeSection from "../../UI/HomeSection/HomeSection";
import { useDispatch, useSelector } from "react-redux";
import useHTTP from "../../Hooks/use-http";
import { NewsActions } from "../../Store/News/News";
import { useEffect } from "react";

const HappenedToDay = () => {
    const dispatch = useDispatch();
    const HappenedToDayArr = useSelector(state => state.news['happendToday']);

    const { sendRequest } = useHTTP();

    const getTrend = () => {
        sendRequest(
            {
                url: 'get_trends',
                method: 'GET'
            },
            data => {
                dispatch(NewsActions.happendToday(data.data));
            }
        )
    }

    useEffect(() => {
        getTrend();
    }, []);
    return (
        <HomeSection title="titles.happendToday" showAll="/">
            <div className="row">
                {
                    HappenedToDayArr.map((post, i) => {
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
    )
}

export default HappenedToDay;