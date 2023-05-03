import useHTTP from "../../Hooks/use-http";
import HomeSection from "../../UI/HomeSection/HomeSection";
import NewsBlock from "../../UI/NewsBlock/NewsBlock";
import { useSelector } from 'react-redux';
import { NewsActions } from '../../Store/News/News';
import Loader from '../Loader/Loader';
import { useEffect, useState } from 'react';


const UrgentNews = (props) => {
    const { isLoading, sendRequest } = useHTTP();
    const token = useSelector(state => state.auth.token);
    const [urgentNews, seturgentNews] = useState([]);
    const [selectedNews, setSelectedNews] = useState({});
    const getUrgentNews = () => {
        if (token) {
            sendRequest(
                {
                    url: `get_home_newss?filter_type=urgent&paginate=7&page=1`,
                    method: 'GET'
                },
                data => {
                    seturgentNews(data.data);
                    if (data.data?.length > 0) {
                        setSelectedNews(data?.data[0]);
                    }
                },
                err => {

                }
            )
        }
    }

    useEffect(() => {
        getUrgentNews();
    }, [token])

    const getCover = (newsToGet) => {
        console.log(newsToGet);
        const attCovers = newsToGet?.attachments?.filter(attachment => attachment.type === 'photo');
        if (newsToGet?.images_url?.length > 0) {
            return newsToGet?.images_url[0]?.url;
        } else if (attCovers && attCovers.length > 0) {
            return attCovers[0].url;
        } else {
            return require('../../assets/images/main-news.jpg');
        }
    }

    return (
        isLoading ?
            <Loader />
            :
            <HomeSection title="titles.urgent" showAll="/">
                <NewsBlock singleNews={selectedNews} />
                <div className="urgent-news-sliders">
                    <div className="row g-1">
                        {urgentNews?.map(singleNews => {
                            return (
                                <div className="col">
                                    <img className={(singleNews.id === selectedNews.id) ? 'active' : ''} onClick={() => setSelectedNews(singleNews)} src={getCover(singleNews)} alt="news cover" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </HomeSection>

    )
}
export default UrgentNews;