import HomeSection from "../../UI/HomeSection/HomeSection";
const ronaldo = require('../../assets/images/ronaldo.png');

const LatestNews = () => {
    return (
        <>
            <HomeSection title="titles.lastNews" showAll="/">
                <div className="latest-news-main-header">
                   <div className="row">
                        <div className="col-5">
                            <img alt="" src={ronaldo} />
                        </div>
                        <div className="col-7">hello</div>
                   </div>
                </div>
            </HomeSection>
        </>
    )
}
export default LatestNews;