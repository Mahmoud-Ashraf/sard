import HappenedToDay from "../../Components/HappenedToDay/HappenedToDay";
import UrgentNews from "../../Components/UrgentNews/UrgentNews";
import News from "../../UI/News/News";

const Home = () => {
    return (
        <div className="container">
            <HappenedToDay />
            <News/>
        </div>
    )
}

export default Home;