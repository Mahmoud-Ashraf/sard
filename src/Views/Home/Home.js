import HappenedToDay from "../../Components/HappenedToDay/HappenedToDay";
import MainNews from "../../Components/MainNews/MainNews";
import UrgentNews from "../../Components/UrgentNews/UrgentNews";
import News from "../../UI/News/News";

const Home = () => {
    return (
        <div className="container">
            <HappenedToDay />
            <News/>
            <MainNews newsType="happendToday" />
        </div>
    )
}

export default Home;