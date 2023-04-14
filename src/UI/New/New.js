import LatestNews from "../../Components/LatestNews/LatestNews";
import UrgentNews from "../../Components/UrgentNews/UrgentNews";

const News = () =>{
    return(
        <div className="row g-1 bg-white">
            <div className="col-lg-7">
                <UrgentNews/>
            </div>
            <div className="col-lg-5">
                <LatestNews/>
            </div>
        </div>
    )
}
export default News;