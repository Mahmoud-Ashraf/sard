import { useSelector } from "react-redux";
import HomeSection from "../../UI/HomeSection/HomeSection";
import NewsBlock from "../../UI/NewsBlock/NewsBlock";

const MainNews = (props) => {
    const news = useSelector(state => state.news[props.category.name]);
    return (
        news?.length > 0 ?
            <HomeSection title={props.category.name_ar}>
                <div className="row g-2">
                    <div className="col-lg-7">
                        <NewsBlock title={news[0].title} from={news[0].created_from} resource={news[0].resource} cover="/assets/images/main-news.jpg" />
                    </div>
                    <div className="col-lg-5">
                        <div className="row g-2">
                            {news?.length > 1 ? <div className="col-md-6"><NewsBlock title={news[1].title} from={news[1].created_from} resource={news[0].resource} cover="/assets/images/main-news.jpg" size="sm" /></div> : <div></div>}
                            {news?.length > 2 ? <div className="col-md-6"><NewsBlock title={news[2].title} from={news[2].created_from} resource={news[0].resource} cover="/assets/images/main-news.jpg" size="sm" /></div> : <div></div>}
                            {news?.length > 3 ? <div className="col-md-6"><NewsBlock title={news[3].title} from={news[3].created_from} resource={news[0].resource} cover="/assets/images/main-news.jpg" size="sm" /></div> : <div></div>}
                            {news?.length > 4 ? <div className="col-md-6"><NewsBlock title={news[4].title} from={news[4].created_from} resource={news[0].resource} cover="/assets/images/main-news.jpg" size="sm" /></div> : <div></div>}
                        </div>

                    </div>
                </div>
            </HomeSection>
            :
            <div></div>
    )
}

export default MainNews;