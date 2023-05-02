import useHTTP from "../../Hooks/use-http";
import HomeSection from "../../UI/HomeSection/HomeSection";
import NewsBlock from "../../UI/NewsBlock/NewsBlock";
import { useDispatch, useSelector } from 'react-redux';
import { NewsActions } from '../../Store/News/News';
import Loader from '../Loader/Loader';
import { useEffect } from 'react';


const UrgentNews = (props) => {
    const { isLoading, sendRequest } = useHTTP();
    const dispatch = useDispatch();
    const token = useSelector((state) => {
        return state.auth.token;
    });
    const getUrgentNews = (filterType) => {
        if (token) {
            sendRequest(
                {
                    url: `get_home_newss?filter_type=${filterType}&paginate=10&page=1`,
                    method: 'GET'
                },
                data => {
                    dispatch(NewsActions.getUrgentNews(data.data));
                },
                err => {

                }
            )
        }
    }
    useEffect(() => {
        getUrgentNews();
    }, [token])
    return (
        isLoading ?
            <Loader />
            :
        <HomeSection title="titles.urgent" showAll="/">
            {/* <div className="urgent-news-main-header">
                <img alt="" src={mainNew} />
            </div> */}
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <NewsBlock />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </HomeSection>

    )
}
export default UrgentNews;