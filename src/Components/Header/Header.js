import { Link, NavLink } from 'react-router-dom';
import useHTTP from '../../Hooks/use-http';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const Header = () => {
    const logo = require('../../assets/images/logo-red.webp');
    const live = require('../../assets/images/live.webp');
    const search = require('../../assets/images/search.webp');
    const date = new Date().toDateString();
    const { sendRequest } = useHTTP();
    const [categories, setCategories] = useState([]);
    const token = useSelector((state) => {
        return state.auth.token;
    })
    const getCategories = () => {
        if (token) {
            sendRequest(
                {
                    url: 'get_categories',
                    method: 'GET'
                },
                data => {
                    setCategories(data.data);
                },
                err => {

                }
            )
        }
    }

    useEffect(() => {
        getCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])
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
                        <div className='col-auto'>
                            <Link to="/">
                                <img className='header-middle-icons' src={live} alt='live' />
                            </Link>
                        </div>
                        <div className='col-auto'>
                            <img className='header-middle-icons' src={search} alt='serach' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom p-2">
                <div className='container'>
                    <div className='row gx-4 align-items-center'>
                        <NavLink to='/home' activeclassname='active-link' className='col-auto'>الصفحة الرئيسية</NavLink>
                        <NavLink to='/' activeclassname='active-link' className='col-auto'>أحدث الأخبار</NavLink>
                        {
                            categories.map(category => {
                                return (
                                    <NavLink key={category.id} to='/' activeclassname='active-link' className='col-auto'>{category.name_ar}</NavLink>
                                )
                            })
                        }
                        {/* <NavLink to='/' activeclassname='active-link' className='col-auto'>محليات</NavLink>
                        <NavLink to='/' activeclassname='active-link' className='col-auto'>تقارير وحوارات</NavLink>
                        <NavLink to='/' activeclassname='active-link' className='col-auto'>اقتصادية</NavLink>
                        <NavLink to='/' activeclassname='active-link' className='col-auto'>تقنية</NavLink>
                        <NavLink to='/' activeclassname='active-link' className='col-auto'>دولي</NavLink>
                        <NavLink to='/' activeclassname='active-link' className='col-auto'>مقالات</NavLink>
                        <NavLink to='/' activeclassname='active-link' className='col-auto'>صحة</NavLink>
                        <NavLink to='/' activeclassname='active-link' className='col-auto'>الفيديو</NavLink>
                        <NavLink to='/' activeclassname='active-link' className='col-auto'>تويتر</NavLink>
                        <NavLink to='/' activeclassname='active-link' className='col-auto'>اخر</NavLink> */}
                    </div>
                </div>
            </div>


        </header>
    )
}

export default Header;