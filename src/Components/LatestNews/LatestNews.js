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
                                <img src={ronaldo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-9 p-0">
                                <div className="latest-news-main-card-body">
                                    <h6 className="card-text">وليد الركراكي ضمن المرشحين لتدريب الأخضر.</h6>
                                    <p className="mt-2"><small className="text-body-secondary">منذ 1 ساعة</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="latest-news-main-card" >
                        <div className="row">
                            <div className="col-md-3">
                                <img src={ronaldo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-9 p-0">
                                <div className="latest-news-main-card-body">
                                    <h6 className="card-text">وليد الركراكي ضمن المرشحين لتدريب الأخضر.</h6>
                                    <p className="mt-2"><small className="text-body-secondary">منذ 1 ساعة</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="latest-news-main-card" >
                        <div className="row">
                            <div className="col-md-3">
                                <img src={ronaldo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-9 p-0">
                                <div className="latest-news-main-card-body">
                                    <h6 className="card-text">وليد الركراكي ضمن المرشحين لتدريب الأخضر.</h6>
                                    <p className="mt-2"><small className="text-body-secondary">منذ 1 ساعة</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="latest-news-main-card" >
                        <div className="row">
                            <div className="col-md-3">
                                <img src={ronaldo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-9 p-0">
                                <div className="latest-news-main-card-body">
                                    <h6 className="card-text">وليد الركراكي ضمن المرشحين لتدريب الأخضر.</h6>
                                    <p className="mt-2"><small className="text-body-secondary">منذ 1 ساعة</small></p>
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