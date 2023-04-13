import LatestNews from "../../Components/LatestNews/LatestNews";
import UrgentNews from "../../Components/UrgentNews/UrgentNews";

const News = () =>{
    return(
        <div className="row">
            <div className="col">
                <UrgentNews/>
            </div>
            <div className="col">
                <LatestNews/>
            </div>
        </div>
    )
}
export default News;