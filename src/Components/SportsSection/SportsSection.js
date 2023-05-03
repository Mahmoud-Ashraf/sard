import { useEffect, useState } from "react";
import HomeSection from "../../UI/HomeSection/HomeSection";
import NewsBlock from "../../UI/NewsBlock/NewsBlock";
import useHTTP from "../../Hooks/use-http";
import { useSelector } from "react-redux";
import HomeMatches from "../HomeMatches/HomeMatches";
const SportsSection = () => {
    const [sportNews, setSportNews] = useState([]);
    const { sendRequest } = useHTTP();
    const token = useSelector(state => state.auth.token);
    const getSportNews = () => {
        if (token) {
            sendRequest(
                {
                    url: 'get_sport_news?page=1&paginate=7',
                    method: 'GET'
                },
                data => {
                    setSportNews(data.data);
                },
                err => {

                }
            )
        }
    }

    useEffect(() => {
        getSportNews();
    }, [token]);

    useEffect(() => {
    }, [sportNews])
    return (
        <HomeSection title="titles.sport" showAll="/">
            <div className="row">
                <div className="col-lg-7">
                    <NewsBlock sliderNews={sportNews} />
                </div>
                <div className="col-lg-5">
                    <HomeMatches />
                </div>
            </div>
        </HomeSection>
    )
}

export default SportsSection;