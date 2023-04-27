import NewsList from "../../Components/NewsList/NewsList";
import LatestNews from "../../Components/LatestNews/LatestNews";
import PrayerTime from "../../Components/PrayerTime/PrayerTime";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";
import MainBox from "../../UI/MainBox/MainBox";
import HomeSectionHeder from "../../UI/HomeSection/HomeSectionHeader/HomeSectionHeader";




const NewsPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <NewsList />
                </div>
                <div className="col-5">
                    <LatestNews />
                    <MainBox>
                        <HomeSectionHeder title="titles.prayerTime" />
                        <PrayerTime />
                        <DownloadApp />
                    </MainBox>
                </div>
            </div>
        </div>
    )
}

export default NewsPage;