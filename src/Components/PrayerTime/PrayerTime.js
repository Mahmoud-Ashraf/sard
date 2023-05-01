import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const PrayerTime = () => {
    const long = useSelector(state => state.auth.long);
    const lat = useSelector(state => state.auth.lat);
    const todayDate = new Date();
    const [prayerTimes, setPryerTimes] = useState({});
    // const formattedTodayDate = todayDate.getDate() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getFullYear();
    const getPrayerTimes = () => {
        if (lat && long && todayDate) {
            fetch(`https://api.aladhan.com/v1/timings/${todayDate}?latitude=${lat}&longitude=${long}&method=2`, { mehtod: 'GET', })
                .then(res => res.json())
                .then(data => {
                    setPryerTimes(data.data.timings);
                });
        }
    }

    const ConvertToArabicNumbers = (num) => {
        const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
        return new String(num).replace(/[0123456789]/g, (d) => { return arabicNumbers[d] });
    }

    useEffect(() => {
        getPrayerTimes();
    }, [long, lat])
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
                    <p>{prayerTimes?.Fajr}</p>
                </div>
                <div className="col">
                    <i className="fa-solid fa-sun sun"></i>
                    <h5>الشروق</h5>
                    <p>{prayerTimes?.Sunrise}</p>
                </div>
                <div className="col">
                    <i className="fa-solid fa-sun sun"></i>
                    <h5>الظُّهْر</h5>
                    <p>{prayerTimes?.Dhuhr}</p>
                </div>
                <div className="col">
                    <i className="fa-solid fa-sun sun"></i>
                    <h5>العَصر</h5>
                    <p>{prayerTimes?.Asr}</p>

                </div>
                <div className="col">
                    <i className="fa-solid fa-cloud-sun sun"></i>
                    <h5>المَغرب</h5>
                    <p>{prayerTimes?.Maghrib}</p>
                </div>
                <div className="col">
                    <i className="fa-solid fa-moon"></i>
                    <h5>العِشاء</h5>
                    <p>{prayerTimes?.Isha}</p>
                </div>
            </div>
        </div>



    )
}
export default PrayerTime;