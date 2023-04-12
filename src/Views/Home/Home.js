import HappenedToDay from "../../Components/HappenedToDay/HappenedToDay";
import MainNews from "../../Components/MainNews/MainNews";
import UrgentNews from "../../Components/UrgentNews/UrgentNews";

const Home = () => {
    return (
        <div className="container">
            <HappenedToDay />
            <UrgentNews />
            <MainNews newsType="happendToday" />
        </div>
    )
}

export default Home;