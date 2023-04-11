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
                    <div className="col-auto me-5">
                        <h5>الاقسام</h5>
                        <p>الرئيسية</p>
                        <p>أحدث الأخبار</p>
                        <p>تقارير وحوارات</p>
                        <p>محليات</p>
                        <p>اقتصادية</p>
                    </div>
                    <div className="col-auto me-5">
                        <h5>  </h5>
                        <p>قنية</p>
                        <p>دولي</p>
                        <p>الطفل</p>
                        <p>منوعات</p>
                        <p>صحة</p>
                    </div>
                    <div className="col-auto me-5">
                        <h5>  </h5>
                        <p>مقالات</p>
                        <p>الفيديو</p>
                        <p>وصـول</p>
                    </div>
                    <div className="col-auto me-5">
                        <h5>معلومات</h5>
                        <p>أعلن معنا</p>
                        <p>اتصل بنا</p>
                        <p>سياسة الخصوصية</p>
                        <p>فريق العمل</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;