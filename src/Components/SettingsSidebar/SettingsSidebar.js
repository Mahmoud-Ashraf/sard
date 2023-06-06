import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../../Store/Auth/Auth";

const SettingsSidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        dispatch(authActions.logout());
        navigate('/home');
    }
    return (
        <div className="sidebar">
            <div className="list">
                <h4 className="list-title">الإعدادات</h4>
                <ul className="list-content">
                    <Link to="countries" className="list-item"><i className="fa-solid fa-grip-vertical"></i> <li>تعديل المصادر</li></Link>
                </ul>
            </div>
            <div className="list">
                <h4 className="list-title">تطبيق سرد</h4>
                <ul className="list-content">
                    <Link className="list-item"><i className="fa-solid fa-arrow-up-from-bracket"></i> <li>انشر التطبيق</li></Link>
                    <Link className="list-item"><i className="fa-solid fa-phone"></i> <li>اتصل بنا</li></Link>
                    <Link className="list-item"><i className="fa-solid fa-scale-balanced"></i> <li>شروط الاستخدام والخصوصية</li></Link>
                </ul>
            </div>
            <div className="list">
                <h4 className="list-title">تسجيل الخروج</h4>
                <ul className="list-content">
                    <div onClick={logout} className="list-item"><i className="fa-solid fa-arrow-right"></i> <li>تسجيل الخروج</li></div>
                </ul>
            </div>
        </div>
    )
}

export default SettingsSidebar;