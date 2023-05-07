import { useSelector } from "react-redux";
import HomeSection from "../../UI/HomeSection/HomeSection";
import NewsBlock from "../../UI/NewsBlock/NewsBlock";

const MainNews = (props) => {
    const news = useSelector(state => {
        return state.news['category' + props.category.code]
    });
    return (
        news?.length > 0 ?
            <HomeSection title={props.category.name_ar} showAll={`/news/${props.category.code}`}>
                <div className="row g-2">
                    <div className="col-lg-7">
                        <NewsBlock singleNews={news[0]} />
                    </div>
                    <div className="col-lg-5">
                        <div className="row g-2">
                            {news?.length > 1 ? <div className="col-md-6"><NewsBlock singleNews={news[1]} size="sm" /></div> : <div></div>}
                            {news?.length > 2 ? <div className="col-md-6"><NewsBlock singleNews={news[2]} size="sm" /></div> : <div></div>}
                            {news?.length > 3 ? <div className="col-md-6"><NewsBlock singleNews={news[3]} size="sm" /></div> : <div></div>}
                            {news?.length > 4 ? <div className="col-md-6"><NewsBlock singleNews={news[4]} size="sm" /></div> : <div></div>}
                        </div>

                    </div>
                </div>
            </HomeSection>
            :
            <div></div>
    )
}

export default MainNews;