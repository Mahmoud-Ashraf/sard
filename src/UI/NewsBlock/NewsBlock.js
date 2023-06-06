import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NewsSlider from '../../Components/NewsSlider/NewsSlider';
import ShareButtons from '../../Components/ShareButtons/ShareButtons';
import Dropdown from 'react-bootstrap/Dropdown';

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
            {
                props.hideBlockData ||
                <Fragment>
                    <div className="news-block-caption">
                        <Link to={`/news/details/${selectedNews?.id}`}>{selectedNews?.title || selectedNews?.content?.split(' ', props.size ? 5 : 10).join(' ')} ...</Link>
                        <span>{selectedNews?.created_from}</span>
                        {props.sliderNews && <NewsSlider news={props.sliderNews} onSliderChange={(e) => setSelectedNews(e)} />}
                    </div>
                    <div className="news-block-share">
                        <Dropdown>
                            <Dropdown.Toggle className='text-white' variant="transperent" id="share-dropdown">
                                <img src={share} alt="share icon" />
                            </Dropdown.Toggle>
                            <ShareButtons url={`/news/details/${selectedNews?.id}`} title={selectedNews?.title || selectedNews?.content?.split(' ', 10).join(' ')} />
                        </Dropdown>
                    </div>
                    <div className="news-block-newspaper">
                        <img src={selectedNews?.resource?.logo} alt="newspaper icon" />
                    </div>
                </Fragment>
            }
        </div>
    )
}

export default NewsBlock;