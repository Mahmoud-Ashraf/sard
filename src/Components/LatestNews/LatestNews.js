import HomeSection from "../../UI/HomeSection/HomeSection";
const ronaldo = require('../../assets/images/ronaldo.png');

const LatestNews = () => {
    return (
        <>
            <HomeSection title="titles.lastNews" showAll="/">
                <div className="latest-news-main-header">
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-3">
                                <img src={ronaldo} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                    <p className="card-text">وليد الركراكي ضمن المرشحين لتدريب الأخضر.</p>
                                    <p className="card-text"><small className="text-body-secondary">منذ 1 ساعة</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-3">
                                <img src={ronaldo} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                    <p className="card-text">وليد الركراكي ضمن المرشحين لتدريب الأخضر.</p>
                                    <p className="card-text"><small className="text-body-secondary">منذ 1 ساعة</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-3">
                                <img src={ronaldo} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                    <p className="card-text">وليد الركراكي ضمن المرشحين لتدريب الأخضر.</p>
                                    <p className="card-text"><small className="text-body-secondary">منذ 1 ساعة</small></p>
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