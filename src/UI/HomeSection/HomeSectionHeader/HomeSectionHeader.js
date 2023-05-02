import { Link } from "react-router-dom";
import Translate from "../../../helpers/Translate/Translate"

const HomeSectionHeder = (props) => {
    return (
        (props.title || props.showAll) &&
        <header className="home-section-header">
            {props.title && <h2 className="home-section-header-title fw-bold"><Translate id={props.title} /></h2>}
            {props.showAll && <Link className="home-section-header-showall" to={props.showAll}><Translate id="showAll" /></Link>}
        </header>
    )
}

export default HomeSectionHeder;