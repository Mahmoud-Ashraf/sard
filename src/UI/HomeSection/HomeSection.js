import HomeSectionHeder from "./HomeSectionHeader/HomeSectionHeader";


const HomeSection = (props) => {
    return (
        <section className="home-section">
            <HomeSectionHeder title={props.title} showAll={props.showAll} />
            {props.children}
        </section>
    )
}

export default HomeSection;