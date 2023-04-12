import { Link } from "react-router-dom";
import HomeSection from "../../UI/HomeSection/HomeSection";
import { useSelector } from "react-redux";

const HappenedToDay = () => {
    const HappenedToDayArr = useSelector(state => state.news['happendToday'])
    return (
        <HomeSection title="titles.happendToday" showAll="/">
            <div className="row">
                {
                    HappenedToDayArr.map(post => {
                        return (
                            <div className="col">
                                <Link>
                                    <div className="happened-today-post">
                                        <img src={post?.attachments?.find(attachment => attachment?.type === 'image')?.url} alt="news cover" />
                                        <h3>{post?.title}</h3>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </HomeSection>
    )
}

export default HappenedToDay;