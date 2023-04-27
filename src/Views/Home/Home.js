import Advertising from "../../Components/Advertising/Advertising";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";
import HappenedToDay from "../../Components/HappenedToDay/HappenedToDay";
import LatestNews from "../../Components/LatestNews/LatestNews";
import MainNews from "../../Components/MainNews/MainNews";
import PrayerTime from "../../Components/PrayerTime/PrayerTime";
import UrgentNews from "../../Components/UrgentNews/UrgentNews";
import HomeSection from "../../UI/HomeSection/HomeSection";
import New from "../../UI/New/New";

const Home = () => {

    return (
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
            <MainNews newsType="happendToday" />
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