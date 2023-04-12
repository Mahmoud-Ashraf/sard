import { useSelector } from "react-redux";
import HomeSection from "../../UI/HomeSection/HomeSection";
import NewsBlock from "../../UI/NewsBlock/NewsBlock";

const MainNews = (props) => {
    const mainNewsArr = useSelector(state => state.news[props.newsType]);
    return (
        <HomeSection title={'titles.' + props.newsType}>
            <div className="row g-2">
                <div className="col-lg-7">
                    <NewsBlock />
                </div>
                <div className="col-lg-5">
                    <div className="row g-2">
                        <div className="col-md-6"><NewsBlock size="sm" /></div>
                        <div className="col-md-6"><NewsBlock size="sm" /></div>
                        <div className="col-md-6"><NewsBlock size="sm" /></div>
                        <div className="col-md-6"><NewsBlock size="sm" /></div>
                    </div>
                    
                </div>
            </div>
        </HomeSection>
    )
}

export default MainNews;