import { Link } from 'react-router-dom';

const NewsBlock = (props) => {
    const share = require('../../assets/images/share.webp');
    const logo = require('../../assets/images/logo-red.webp');
    const cover = require('../../assets/images/main-news.jpg');
    const classes = `news-block${props.size ? ' news-block-sm' : ''}`
    console.log(props.singleNews);
    return (
        <div className={classes}>
            <img src={cover} alt="cover" />
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