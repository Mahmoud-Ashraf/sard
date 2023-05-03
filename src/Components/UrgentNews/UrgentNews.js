import useHTTP from "../../Hooks/use-http";
import HomeSection from "../../UI/HomeSection/HomeSection";
import NewsBlock from "../../UI/NewsBlock/NewsBlock";
import { useSelector } from 'react-redux';
// import { NewsActions } from '../../Store/News/News';
import Loader from '../Loader/Loader';
import { useEffect, useState } from 'react';
// import NewsSlider from "../NewsSlider/NewsSlider";


const UrgentNews = (props) => {
    const { isLoading, sendRequest } = useHTTP();
    const token = useSelector(state => state.auth.token);
    const [urgentNews, seturgentNews] = useState([]);
    const getUrgentNews = () => {
        if (token) {
            sendRequest(
                {
                    url: `get_home_newss?filter_type=urgent&paginate=7&page=1`,
                    method: 'GET'
                },
                data => {
                    seturgentNews(data.data);
                },
                err => {

                }
            )
        }
    }

    useEffect(() => {
        getUrgentNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    return (
        isLoading ?
            <Loader />
            :
            <HomeSection title="titles.urgent" showAll="/">
                <NewsBlock sliderNews={urgentNews} />
            </HomeSection>

    )
}
export default UrgentNews;