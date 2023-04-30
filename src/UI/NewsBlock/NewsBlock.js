import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NewsBlock = (props) => {
    const share = require('../../assets/images/share.webp');
    // const cover = require('../../assets/images/main-news.jpg');
    const classes = `news-block${props.size ? ' news-block-sm' : ''}`
    const [cover, setCover] = useState('');
    console.log(props.singleNews);
    const getCover = () => {
        const attCovers = props.singleNews?.attachments?.filter(attachment => attachment.type === 'photo');
        console.log(attCovers);
        if (props.singleNews?.images_url?.length > 0) {
            setCover(props.singleNews?.images_url[0]);
        } else if (attCovers && attCovers.length > 0) {
            setCover(attCovers[0].url);
        } else {
            setCover(require('../../assets/images/main-news.jpg'));
        }
    }

    useEffect(() => {
        getCover();
    }, [])
    return (
        <div className={classes}>
            <img src={cover} alt="cover" />
            {/* {
                props.singleNews?.images_url?.length > 0 ?
                    :

                    <img src={props.singleNews?.images_url[0]} alt="cover" />
            } */}
            <div className="news-block-caption">
                <Link>{props.singleNews?.title || 'لا يوجد عنوان'}</Link>
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