import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NewsBlock = (props) => {
    const share = require('../../assets/images/share.webp');
    const classes = `news-block${props.size ? ' news-block-sm' : ''}`
    const [cover, setCover] = useState('');
    const getCover = () => {
        const attCovers = props.singleNews?.attachments?.filter(attachment => attachment.type === 'photo');
        if (props.singleNews?.images_url?.length > 0) {
            setCover(props.singleNews?.images_url[0]?.url);
        } else if (attCovers && attCovers.length > 0) {
            setCover(attCovers[0].url);
        } else {
            setCover(require('../../assets/images/main-news.jpg'));
        }
    }

    useEffect(() => {
        getCover();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className={classes}>
            <img src={cover} alt="cover" />
            <div className="news-block-caption">
                <Link to={`/news/details/${props?.singleNews?.id}`}>{props?.singleNews?.title || props?.singleNews?.content?.split(' ', 10).join(' ')}</Link>
                <span>{props.singleNews?.created_from}</span>
            </div>
            <div className="news-block-share">
                <Link><img src={share} alt="share icon" /></Link>
            </div>
            <div className="news-block-newspaper">
                <img src={props.singleNews?.resource?.logo} alt="newspaper icon" />
            </div>
        </div>
    )
}

export default NewsBlock;