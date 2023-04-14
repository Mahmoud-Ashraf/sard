import HomeSection from "../../UI/HomeSection/HomeSection";
import NewsBlock from "../../UI/NewsBlock/NewsBlock";
// const mainNew = require('../../assets/images/main-news.jpg');

const UrgentNews = (props) => {
    return (
        <HomeSection title="titles.urgent" showAll="/">
            {/* <div className="urgent-news-main-header">
                <img alt="" src={mainNew} />
            </div> */}
            <NewsBlock/>
        </HomeSection>

    )
}
export default UrgentNews;