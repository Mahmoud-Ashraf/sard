import MainBox from "../MainBox/MainBox";
import HomeSectionHeder from "./HomeSectionHeader/HomeSectionHeader";


const HomeSection = (props) => {
    return (
        <section className="home-section">
            <HomeSectionHeder title={props.title} showAll={props.showAll} />
            <MainBox>
                {props.children}
            </MainBox>
        </section>
    )
}

export default HomeSection;