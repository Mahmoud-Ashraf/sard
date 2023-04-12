import { Link } from "react-router-dom";
import Translate from "../../helpers/Translate/Translate"
const mainNew = require('../../assets/images/main-news.jpg');
const ronaldo = require('../../assets/images/ronaldo.jpg');


const UrgentNews = (props) => {
    return (
        <div className="urgent-news row">
            <div className="col-auto urgent-news-main">
                <header className="home-section-header">
                    <h2 className="home-section-header-title">عاجل</h2>
                    <Link className="home-section-header-showall" to={props.showAll}><Translate id="showAll" /></Link>
                </header>
                <div className="urgent-news-main-header">
                    <img alt="" src={mainNew} />
                </div>
            </div>
            <div className="col-auto urgent-news-related">
                <header className="home-section-header">
                    <h2 className="home-section-header-title">اخر الاخبار</h2>
                    <Link className="home-section-header-showall" to={props.showAll}><Translate id="showAll" /></Link>
                </header>
                <div className="row">
                    <div className="col">
                    {/* <img alt="" src={ronaldo} /> */}

                    </div>
                </div>
            </div>

        </div>
    )
}
export default UrgentNews;