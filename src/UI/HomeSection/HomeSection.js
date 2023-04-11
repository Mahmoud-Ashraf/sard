import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomeSection = (props) => {
    const lang = useSelector(state => state.lang.globalLang);
    return (
        <section className="home-section">
            <header className="home-section-header">
                <h2 className="home-section-header-title">{props.title}</h2>
                {props.showAll && <Link className="home-section-header-showall" to={props.showAll}>رؤية الكل {(lang === 'ar') ? <>&#9668;</> : <>&#9658;</>}</Link>}
            </header>
            {props.children}
        </section>
    )
}

export default HomeSection;