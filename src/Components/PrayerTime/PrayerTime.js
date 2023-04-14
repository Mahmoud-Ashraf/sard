import Advertising from "../Advertising/Advertising";

const PrayerTime = () => {
    return (
        <div className="prayer">
            <h3 className="prayer-header">مواقيت الصلاة</h3>
            <div className="row">
                <div className="col">
                    <div className="prayer-content">
                        <div className="row justify-content-between prayer-content-header">
                            <div className="col ">السعودية,
                                الرياض</div>
                            <div className="col">8 فبراير
                                2023 ميلادي</div>
                        </div>
                        <div className="row text-center prayer-content-times">
                            <div className="col">
                                <i className="fa-solid fa-moon"></i>
                                <h5>الفجْر</h5>
                                <p>٥:١٢ ص</p>
                            </div>
                            <div className="col">
                                <i className="fa-solid fa-sun sun"></i>
                                <h5>الشروق</h5>
                                <p>٥:١٢ ص</p>
                            </div>
                            <div className="col">
                                <i className="fa-solid fa-sun sun"></i>
                                <h5>الظُّهْر</h5>
                                <p>٥:١٢ ص</p>
                            </div>
                            <div className="col">
                                <i className="fa-solid fa-sun sun"></i>
                                <h5>العَصر</h5>
                                <p>٥:١٢ ص</p>

                            </div>
                            <div className="col">
                                <i className="fa-solid fa-cloud-sun sun"></i>
                                <h5>المَغرب</h5>
                                <p>٥:١٢ ص</p>
                            </div>
                            <div className="col">
                                <i className="fa-solid fa-moon"></i>
                                <h5>العِشاء</h5>
                                <p>٥:١٢ ص</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <Advertising />
                </div>


            </div>
        </div>
    )
}
export default PrayerTime;