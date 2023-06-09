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
import SportsSection from "../../Components/SportsSection/SportsSection";

const Home = () => {
    const categories = useSelector(state => state.news.categories);
    const { isLoading, sendRequest } = useHTTP();
    const dispatch = useDispatch();
    useEffect(() => {
        const categoriesWithoutSport = categories.filter(category => category.id !== 3);
        categoriesWithoutSport?.forEach(category => {
            sendRequest(
                {
                    url: `get_home_newss?categories_arr[0]=${category.id}&filter_type=all&paginate=5&page=1`,
                    method: 'GET'
                },
                data => {
                    // const categories = data.data.filter(category => category.id !== 3);
                    dispatch(NewsActions.customNews({ ['category' + category.code]: data.data }));
                },
                err => {

                }
            )
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <LatestNews />
                    </div>
                </div>
                <Advertising />

                <HomeSection title="titles.prayerTime">
                    <div className="row">
                        <div className="col-lg-7">
                            <PrayerTime />
                        </div>
                        <div className="col-lg-5 mt-3 mt-lg-0">
                            <Advertising />
                        </div>
                    </div>
                </HomeSection>

                <SportsSection />

                {
                    categories?.map(category => {
                        return (
                            <MainNews key={category.id} category={category} />
                        )
                    })
                }
                <DownloadApp />
            </div>
    )
}

export default Home;