import { Link } from "react-router-dom";
import HomeSection from "../../UI/HomeSection/HomeSection";
const ronaldo = require('../../assets/images/ronaldo.png');

const LatestNews = () => {
    return (
        <>
            <HomeSection title="titles.lastNews" showAll="/">
                <div className="latest-news-main">
                    <div className="latest-news-main-card" >
                        <div className="row">
                            <div className="col-md-3">
                                <img src={ronaldo} alt="..." />
                            </div>
                            <div className="col-md-9 p-0">
                                <div className="latest-news-main-card-body">
                                    <Link className="card-text" to="/">
                                        <h6>وليد الركراكي ضمن المرشحين لتدريب الأخضر.</h6>
                                    </Link>
                                    <p className="mt-3"><small className="text-body-secondary">منذ 1 ساعة</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="latest-news-main-card" >
                        <div className="row">
                            <div className="col-md-3">
                                <img src={ronaldo} alt="..." />
                            </div>
                            <div className="col-md-9 p-0">
                                <div className="latest-news-main-card-body">
                                    <Link className="card-text" to="/">
                                        <h6 >وليد الركراكي ضمن المرشحين لتدريب الأخضر.</h6>
                                    </Link>
                                    <p className="mt-3"><small className="text-body-secondary">منذ 1 ساعة</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="latest-news-main-card" >
                        <div className="row">
                            <div className="col-md-3">
                                <img src={ronaldo} alt="..." />
                            </div>
                            <div className="col-md-9 p-0">
                                <div className="latest-news-main-card-body">
                                    <Link className="card-text" to="/">
                                        <h6>وليد الركراكي ضمن المرشحين لتدريب الأخضر.</h6>
                                    </Link>
                                    <p className="mt-3"><small className="text-body-secondary">منذ 1 ساعة</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="latest-news-main-card" >
                        <div className="row">
                            <div className="col-md-3">
                                <img src={ronaldo} alt="..." />
                            </div>
                            <div className="col-md-9 p-0">
                                <div className="latest-news-main-card-body">
                                    <Link className="card-text" to="/">
                                        <h6>وليد الركراكي ضمن المرشحين لتدريب الأخضر.</h6>
                                    </Link>
                                    <p className="mt-3"><small className="text-body-secondary">منذ 1 ساعة</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </HomeSection>
        </>
    )
}
export default LatestNews;