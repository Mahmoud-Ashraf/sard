import HomeSection from "../../UI/HomeSection/HomeSection";
const mainNew = require('../../assets/images/main-news.jpg');

const UrgentNews = (props) => {
    return (
        <HomeSection title="titles.urgent" showAll="/">
            <div className="urgent-news-main-header">
                <img alt="" src={mainNew} />
            </div>
        </HomeSection>

    )
}
export default UrgentNews;