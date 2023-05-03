import LatestNews from "../../Components/LatestNews/LatestNews";
import PrayerTime from "../../Components/PrayerTime/PrayerTime";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";
import MainBox from "../../UI/MainBox/MainBox";
import HomeSectionHeder from "../../UI/HomeSection/HomeSectionHeader/HomeSectionHeader";
// import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const NewsPage = () => {
    // const [height, setHeight] = useState(null);
    // useEffect(() => {
    //     setHeight(document?.getElementById('col-height2')?.offsetHeight);
    // }, []);


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <Outlet></Outlet>
                </div>
                <div className="col-lg-5 my-5 my-lg-0">
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