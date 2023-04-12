import { Link } from 'react-router-dom';
const logo = require('../../assets/images/logo-red.webp');


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-5 footer-logo">
                        <img className='header-middle-logo' src={logo} alt='sard logo' />
                        <p>جميع الحقوق محفوظة, سرد ٢٠٢٣</p>
                    </div>
                    <div className="col-4">
                        <h5>الاقسام</h5>
                        <div className='row'>
                            <div className='col d-flex flex-column'>
                                <Link to='/home'>الرئيسية</Link>
                                <Link to='/'>أحدث الأخبار</Link>
                                <Link to='/'>تقارير وحوارات</Link>
                                <Link to='/'>محليات</Link>
                                <Link to='/'>اقتصادية</Link>
                            </div>
                            <div className='col d-flex flex-column'>
                                <Link to='/'>قنية</Link>
                                <Link to='/'>دولي</Link>
                                <Link to='/'>الطفل</Link>
                                <Link to='/'>منوعات</Link>
                                <Link to='/'>صحة</Link>
                            </div>
                            <div className='col d-flex flex-column'>
                                <Link to='/'>مقالات</Link>
                                <Link to='/'>الفيديو</Link>
                                <Link to='/'>وصـول</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 d-flex flex-column">
                        <h5>معلومات</h5>
                        <Link to='/'>أعلن معنا</Link>
                        <Link to='/'>اتصل بنا</Link>
                        <Link to='/'>سياسة الخصوصية</Link>
                        <Link to='/'>فريق العمل</Link>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;