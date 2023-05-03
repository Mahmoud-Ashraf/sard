import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NewsSlider from '../../Components/NewsSlider/NewsSlider';

const NewsBlock = (props) => {
    const share = require('../../assets/images/share.webp');
    const classes = `news-block${props.size ? ' news-block-sm' : ''}`
    const [cover, setCover] = useState('');
    const [selectedNews, setSelectedNews] = useState({});
    const getCover = () => {
        const attCovers = selectedNews?.attachments?.filter(attachment => attachment.type === 'photo');
        if (selectedNews?.images_url?.length > 0) {
            setCover(selectedNews?.images_url[0]?.url);
        } else if (attCovers && attCovers.length > 0) {
            setCover(attCovers[0].url);
        } else {
            setCover(require('../../assets/images/main-news.jpg'));
        }
    }
    useEffect(() => {
        if (props.singleNews) {
            setSelectedNews(props.singleNews);
        } else if (props.sliderNews) {
            setSelectedNews(props.sliderNews[0]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        getCover();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedNews])
    return (
        <div className={classes}>
            <img src={cover} alt="cover" />
            <div className="news-block-caption">
                <Link to={`/news/details/${selectedNews?.id}`}>{selectedNews?.title || selectedNews?.content?.split(' ', 10).join(' ')}</Link>
                <span>{selectedNews?.created_from}</span>
                {props.sliderNews && <NewsSlider news={props.sliderNews} onSliderChange={(e) => setSelectedNews(e)} />}
            </div>
            <div className="news-block-share">
                <Link><img src={share} alt="share icon" /></Link>
            </div>
            <div className="news-block-newspaper">
                <img src={selectedNews?.resource?.logo} alt="newspaper icon" />
            </div>
        </div>
    )
}

export default NewsBlock;