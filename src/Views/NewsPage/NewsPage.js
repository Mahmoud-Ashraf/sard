import LatestNews from "../../Components/LatestNews/LatestNews";
import PrayerTime from "../../Components/PrayerTime/PrayerTime";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";
import MainBox from "../../UI/MainBox/MainBox";
import HomeSectionHeder from "../../UI/HomeSection/HomeSectionHeader/HomeSectionHeader";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const NewsPage = () => {
    const [height, setHeight] = useState(null);
    useEffect(() => {
        setHeight(document?.getElementById('col-height2')?.offsetHeight);
    }, []);


    return (
        <div className="container">
            <div className="row">
                <div className="col-7 g-5">
                    <div id="col-height1" className="overflow-y-auto overflow-x-hidden" style={{ maxHeight: `${height}px` }}>
                        <Outlet></Outlet>
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