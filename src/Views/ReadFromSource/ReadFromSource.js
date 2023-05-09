import { useParams } from "react-router-dom";
import useHTTP from "../../Hooks/use-http";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Loader from "../../Components/Loader/Loader";

const ReadFromSource = () => {
    const ref = useRef();
    const [height, setHeight] = useState(200);
    const { newsId } = useParams();
    const { isLoading, sendRequest } = useHTTP();
    const token = useSelector(state => state.auth.token);
    const [url, setUrl] = useState('');
    const getSingleNews = () => {
        if (token && newsId) {
            sendRequest(
                {
                    url: `get_news_by_id/${newsId}`,
                    method: 'GET'
                },
                data => {
                    setUrl(data.data?.link_url)
                }
            )
        }
    }

    const onLoad = () => {
        console.log('frame loaded');
        setHeight(window.screen.height - document.getElementById('header').offsetHeight - 15);
    };

    useEffect(() => {
        getSingleNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, newsId]);
    // useEffect(() => {
    //     onLoad();
    // }, [ref?.current?.contentWindow?.document?.body?.scrollHeight]);
    return (
        (isLoading) ?
            <Loader />
            :
            <div className="container">
                <div className="read-from-source">
                    <iframe
                        ref={ref}
                        id="myFrame"
                        onLoad={onLoad}
                        src={url}
                        width="100%"
                        // height={height}
                        title="read news from it's source"
                        style={{
                            height: height,
                        }}
                    ></iframe>
                    {/* <iframe id="myFrame" src={url} title="read news from it's source" onload={resizeIframe}> </iframe> */}
                </div>
            </div>
    )
}

export default ReadFromSource;