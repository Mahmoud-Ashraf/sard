import { useEffect, useState } from "react";

const NewsSlider = (props) => {
    const [selectedNews, setSelectedNews] = useState({});

    const getCover = (newsToGet) => {
        const attCovers = newsToGet?.attachments?.filter(attachment => attachment.type === 'photo');
        if (newsToGet?.images_url?.length > 0) {
            return newsToGet?.images_url[0]?.url;
        } else if (attCovers && attCovers.length > 0) {
            return attCovers[0].url;
        } else {
            return require('../../assets/images/main-news.jpg');
        }
    }

    useEffect(() => {
        setSelectedNews(props.news[0]);
    }, [props.news])

    useEffect(() => {
        props.onSliderChange(selectedNews);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedNews])

    return (
        <div className="news-sliders">
            <div className="row g-1">
                {props.news?.map(singleNews => {
                    return (
                        <div className="col" key={singleNews?.id}>
                            <img className={(singleNews?.id === selectedNews?.id) ? 'active' : ''} onClick={() => setSelectedNews(singleNews)} src={getCover(singleNews)} alt="news cover" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default NewsSlider;