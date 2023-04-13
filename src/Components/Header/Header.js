import { NavLink } from 'react-router-dom';

const Header = () => {
    const logo = require('../../assets/images/logo-red.webp');
    const live = require('../../assets/images/live.webp');
    const search = require('../../assets/images/search.webp');
    const date = new Date().toDateString();

    return (
        <header className="header">
            <div className="header-top text-white">
                <div className="container header-top-content">
                    <div>
                        <i className="fa-regular fa-user border rounded-circle border-white p-1 text-white justify-content-center align-items-center"></i>
                        <button className="btn me-3">تسجيل دخول</button>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <span>{date}</span>
                        <div className="row border rounded p-1 justify-content-between align-items-center me-2 gx-2">
                            <i className="col-auto fa-solid fa-sun text-warning"></i>
                            <span className="col-auto"> الرياض</span>
                            <span className="col-auto">22° </span>

                        </div>
                    </div>

                </div>
            </div>
            <div className="header-middle">
                <div className='container d-flex justify-content-between'>
                    <img className='header-middle-logo' src={logo} alt='sard logo' />
                    <div className='row gx-4 align-items-center'>
                        <img className='col-auto header-middle-icons' src={live} alt='live' />
                        <img className='col-auto header-middle-icons' src={search} alt='serach' />

                    </div>
                </div>
            </div>
            <div className="header-bottom p-2">
                <div className='container'>
                    <div className='row gx-4 align-items-center'>
                        <NavLink to='/home' activeClassName='active-link' className='col-auto'>الصفحة الرئيسية</NavLink>
                        <NavLink to='/' activeClassName='active-link' className='col-auto'>أحدث الأخبار</NavLink>
                        <NavLink to='/' activeClassName='active-link' className='col-auto'>محليات</NavLink>
                        <NavLink to='/' activeClassName='active-link' className='col-auto'>تقارير وحوارات</NavLink>
                        <NavLink to='/' activeClassName='active-link' className='col-auto'>اقتصادية</NavLink>
                        <NavLink to='/' activeClassName='active-link' className='col-auto'>تقنية</NavLink>
                        <NavLink to='/' activeClassName='active-link' className='col-auto'>دولي</NavLink>
                        <NavLink to='/' activeClassName='active-link' className='col-auto'>مقالات</NavLink>
                        <NavLink to='/' activeClassName='active-link' className='col-auto'>صحة</NavLink>
                        <NavLink to='/' activeClassName='active-link' className='col-auto'>الفيديو</NavLink>
                        <NavLink to='/' activeClassName='active-link' className='col-auto'>تويتر</NavLink>
                        <NavLink to='/' activeClassName='active-link' className='col-auto'>اخر</NavLink>
                    </div>
                </div>
            </div>


        </header>
    )
}

export default Header;