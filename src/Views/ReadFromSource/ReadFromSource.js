import { useParams } from "react-router-dom";
import useHTTP from "../../Hooks/use-http";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Loader from "../../Components/Loader/Loader";

const ReadFromSource = () => {
    const ref = useRef();
    const [height, setHeight] = useState("200px");
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
        // console.log(ref.current.style);
        // ref.current.style.height = ref.current.contentWindow.document.body.scrollHeight;
        setHeight(ref.current?.contentWindow?.document?.body?.scrollHeight);
    };

    useEffect(() => {
        getSingleNews();
    }, [token, newsId]);
    // useEffect(() => {
    //     onLoad();
    // }, [ref?.current?.contentWindow?.document?.body?.scrollHeight]);
    return (
        isLoading ?
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