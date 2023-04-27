import NewsList from "../../Components/NewsList/NewsList";
import LatestNews from "../../Components/LatestNews/LatestNews";
import PrayerTime from "../../Components/PrayerTime/PrayerTime";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";
import MainBox from "../../UI/MainBox/MainBox";
import HomeSectionHeder from "../../UI/HomeSection/HomeSectionHeader/HomeSectionHeader";




const NewsPage = () => {
    const height = document?.getElementById('col-height2')?.offsetHeight;
       
    console.log(height);


    return (
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <div id="col-height1" className="overflow-y-auto overflow-x-hidden" style={{maxHeight:`${height}px`}}>
                        <NewsList />
                        <NewsList />
                        <NewsList />
                        <NewsList />
                        <NewsList />
                        <NewsList />
                        <NewsList />
                        <NewsList />
                        <NewsList />
                        <NewsList />
                        <NewsList />
                        <NewsList />
                        <NewsList />
                        <NewsList />
                        <NewsList />

                    </div>
                </div>
                <div className="col-5">
                    <div id="col-height2">
                        <LatestNews maxHeight="60rem" />
                        <MainBox>
                            <HomeSectionHeder title="titles.prayerTime" />
                            <PrayerTime />
                            <DownloadApp />
                        </MainBox>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsPage;