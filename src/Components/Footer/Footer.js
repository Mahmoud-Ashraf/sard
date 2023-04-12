import { NavLink } from 'react-router-dom';
const logo = require('../../assets/images/logo-red.webp');


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-auto footer-logo">
                        <img className='header-middle-logo' src={logo} alt='sard logo' />
                        <p>جميع الحقوق محفوظة, سرد ٢٠٢٣</p>
                    </div>
                    <div className="col-auto ms-5 d-flex flex-column">
                        <h5>الاقسام</h5>
                        <NavLink to='/home'>الرئيسية</NavLink>
                        <NavLink to='/'>أحدث الأخبار</NavLink>
                        <NavLink to='/'>تقارير وحوارات</NavLink>
                        <NavLink to='/'>محليات</NavLink>
                        <NavLink to='/'>اقتصادية</NavLink>
                    </div>
                    <div className="col-auto ms-5 d-flex flex-column">
                        <h5>  </h5>
                        <NavLink to='/'>قنية</NavLink>
                        <NavLink to='/'>دولي</NavLink>
                        <NavLink to='/'>الطفل</NavLink>
                        <NavLink to='/'>منوعات</NavLink>
                        <NavLink to='/'>صحة</NavLink>
                    </div>
                    <div className="col-auto ms-5 d-flex flex-column">
                        <h5>  </h5>
                        <NavLink to='/'>مقالات</NavLink>
                        <NavLink to='/'>الفيديو</NavLink>
                        <NavLink to='/'>وصـول</NavLink>
                    </div>
                    <div className="col-auto ms-5 d-flex flex-column">
                        <h5>معلومات</h5>
                        <NavLink to='/'>أعلن معنا</NavLink>
                        <NavLink to='/'>اتصل بنا</NavLink>
                        <NavLink to='/'>سياسة الخصوصية</NavLink>
                        <NavLink to='/'>فريق العمل</NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;