

const PrayerTime = () => {
    return (


        <div className="prayer-time">
            <div className="row justify-content-between prayer-time-header">
                <div className="col-auto fw-bold">السعودية,
                    الرياض</div>
                <div className="col-auto date">8 فبراير
                    2023 ميلادي</div>
            </div>
            <div className="row text-center prayer-time-times">
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



    )
}
export default PrayerTime;