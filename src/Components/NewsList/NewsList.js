import SingleNews from "../SingleNews/SingleNews";
import NoData from "../NoData/NoData";

const NewsList = (props) => {
    return (
        <div className="news-list">
            {
                props.news?.length > 0 ?
                    props.news?.map(singleNews => <SingleNews key={singleNews?.id} singleNews={singleNews} hideBlockData={props.hideBlockData} />)
                    :
                    <NoData />
            }
        </div>
    )
}

export default NewsList;