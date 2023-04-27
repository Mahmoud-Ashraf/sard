import Advertising from "../../Components/Advertising/Advertising";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";
import HappenedToDay from "../../Components/HappenedToDay/HappenedToDay";
import MainNews from "../../Components/MainNews/MainNews";
import PrayerTime from "../../Components/PrayerTime/PrayerTime";
import HomeSection from "../../UI/HomeSection/HomeSection";
import New from "../../UI/New/New";

const Home = () => {
   
    return (
        <div className="container">
            <HappenedToDay />
            <New />
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