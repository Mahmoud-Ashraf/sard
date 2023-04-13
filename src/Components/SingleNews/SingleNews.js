import NewsBlock from "../../UI/NewsBlock/NewsBlock";

const SingleNews = () => {
    return (
        <div className="single-news">
            <div className="row">
                <div className="col-4">
                    <div className="single-news-cover">
                        <NewsBlock size="sm" />
                    </div>
                </div>
                <div className="col-8">
                    <div className="single-news-details">
                        <h3>مرشح ثالث لإنقاذ لبنان</h3>
                        <p>يأتي رمضان وتأتي معه ذكريات أيام خوالي، عاشتها الأحياء والأهالي والمنازل والطرق والدور نهارًا تحت ضوء الشمس أو ليلًا تحت نور القمر.</p>
                        <span>٠١:٢٨:٠٧ ص، السبت، ١٠ رمضان ١٤٤٤ هجريا، ٠١ أبريل ٢٠٢٣</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleNews;