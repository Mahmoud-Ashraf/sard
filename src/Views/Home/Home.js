import HappenedToDay from "../../Components/HappenedToDay/HappenedToDay";
import MainNews from "../../Components/MainNews/MainNews";
import New from "../../UI/New/New";

const Home = () => {
    return (
        <div className="container">
            <HappenedToDay />
            <New/>
            <MainNews newsType="happendToday" />
        </div>
    )
}

export default Home;