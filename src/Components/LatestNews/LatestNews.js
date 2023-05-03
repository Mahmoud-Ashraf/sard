import { Link } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from "react";
import useTranslate from "../../Hooks/use-translate";
import Translate from "../../helpers/Translate/Translate";

const ronaldo = require('../../assets/images/ronaldo.png');

const LatestNews = (props) => {
    const [key, setKey] = useState('newest');

    return (
        <section className="tabs-section">
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3">

                <Tab eventKey="newest" title={useTranslate(`titles.newest`)}>
                    <div className="latest-news-main-card" >
                        <div className="row">
                            <div className="col-3">
                                <img src={ronaldo} alt="..." />
                            </div>
                            <div className="col-9">
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
                            <div className="col-3">
                                <img src={ronaldo} alt="..." />
                            </div>
                            <div className="col-9">
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
                            <div className="col-3">
                                <img src={ronaldo} alt="..." />
                            </div>
                            <div className="col-9">
                                <div className="latest-news-main-card-body">
                                    <Link className="card-text" to="/">
                                        <h6>وليد الركراكي ضمن المرشحين لتدريب الأخضر.</h6>
                                    </Link>
                                    <p className="mt-3"><small className="text-body-secondary">منذ 1 ساعة</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>

                <Tab eventKey="most_readed" title={useTranslate(`titles.most_readed`)}>
                    <div className="latest-news-main-card" >
                        <div className="row">
                            <div className="col-3">
                                <img src={ronaldo} alt="..." />
                            </div>
                            <div className="col-9">
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
                            <div className="col-3">
                                <img src={ronaldo} alt="..." />
                            </div>
                            <div className="col-9">
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
                            <div className="col-3">
                                <img src={ronaldo} alt="..." />
                            </div>
                            <div className="col-9">
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
                            <div className="col-3">
                                <img src={ronaldo} alt="..." />
                            </div>
                            <div className="col-9">
                                <div className="latest-news-main-card-body">
                                    <Link className="card-text" to="/">
                                        <h6>وليد الركراكي ضمن المرشحين لتدريب الأخضر.</h6>
                                    </Link>
                                    <p className="mt-3"><small className="text-body-secondary">منذ 1 ساعة</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>

            </Tabs>
            <Link className="home-section-header-showall tabs-section-header-showall" to={`/news/${key}`}><Translate id="showAll" /></Link>
        </section>
    )
}
export default LatestNews;