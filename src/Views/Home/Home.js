import { useDispatch, useSelector } from "react-redux";
import Advertising from "../../Components/Advertising/Advertising";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";
import HappenedToDay from "../../Components/HappenedToDay/HappenedToDay";
import LatestNews from "../../Components/LatestNews/LatestNews";
import MainNews from "../../Components/MainNews/MainNews";
import PrayerTime from "../../Components/PrayerTime/PrayerTime";
import UrgentNews from "../../Components/UrgentNews/UrgentNews";
import HomeSection from "../../UI/HomeSection/HomeSection";
import { useEffect } from "react";
import useHTTP from "../../Hooks/use-http";
import { NewsActions } from "../../Store/News/News";
import Loader from "../../Components/Loader/Loader";

const Home = () => {
    const categories = useSelector(state => state.news.categories);
    const { isLoading, sendRequest } = useHTTP();
    const dispatch = useDispatch();
    useEffect(() => {
        categories.forEach(category => {
            sendRequest(
                {
                    url: `get_home_newss?categories_arr[0]=${category.id}&filter_type=all&paginate=5&page=1`,
                    method: 'GET'
                },
                data => {
                    dispatch(NewsActions.customNews({ ['category' + category.id]: data.data }));
                }
            )
        });
    }, [categories])
    return (
        isLoading ?
            <Loader />
            :
            <div className="container">
                <HappenedToDay />
                <div className="row">
                    <div className="col-lg-7">
                        <UrgentNews />
                    </div>
                    <div className="col-lg-5">
                        <LatestNews />
                    </div>
                </div>
                {
                    categories?.map(category => {
                        return (
                            <MainNews key={category.id} category={category} />
                        )
                    })
                }
                <Advertising />
                <HomeSection title="titles.prayerTime">
                    <div className="row">
                        <div className="col-7">
                            <PrayerTime />
                        </div>
                        <div className="col-5">
                            <Advertising />
                        </div>
                    </div>
                </HomeSection>
                <DownloadApp />
            </div>
    )
}

export default Home;