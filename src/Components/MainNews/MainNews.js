import { useSelector } from "react-redux";
import HomeSection from "../../UI/HomeSection/HomeSection";
import { useState } from "react";
import NewsBlock from "../../UI/NewsBlock/NewsBlock";

const MainNews = () => {
    const [newsType, setNewsType] = useState('happendToday');
    const mainNewsArr = useSelector(state => state.news[newsType]);
    return (
        <HomeSection title={'titles.' + newsType}>
            <div className="row gx-2">
                <div className="col-7">
                    <NewsBlock />
                </div>
                <div className="col-5">
                    <div className="row g-2">
                        <div className="col-6"><NewsBlock size="sm" /></div>
                        <div className="col-6"><NewsBlock size="sm" /></div>
                        <div className="col-6"><NewsBlock size="sm" /></div>
                        <div className="col-6"><NewsBlock size="sm" /></div>
                    </div>
                    
                </div>
            </div>
        </HomeSection>
    )
}

export default MainNews;