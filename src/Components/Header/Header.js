import { Link, NavLink } from 'react-router-dom';
import useHTTP from '../../Hooks/use-http';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';
import SearchBar from "../searchBar/searchBar";
import { NewsActions } from '../../Store/News/News';
// import { authActions} from '../../Store/Auth/Auth'
import Loader from '../Loader/Loader';




const Header = () => {
    const user = useSelector((state) => {
        return state.auth.user;
    });
    const logo = require('../../assets/images/logo-red.webp');
    const live = require('../../assets/images/live.webp');
    const search = require('../../assets/images/search.webp');
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };
    const egDate = new Date().toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
    const ksaData = new Date().toLocaleDateString('ar-SA', options);

    const { isLoading, sendRequest } = useHTTP();
    // const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    const token = useSelector((state) => {
        return state.auth.token;
    });


    const categories = useSelector(state => state.news.categories);
    const getCategories = () => {
        if (token) {
            sendRequest(
                {
                    url: 'get_categories',
                    method: 'GET'
                },
                data => {
                    let newData = data.data.filter(category => category.is_following);
                    newData = newData.map(category => { return { ...category, code: category.name.toLowerCase().split(' ').join('_') } });
                    dispatch(NewsActions.setCategories(newData));
                    // setCategories(data.data);
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
    const [isFocus, setIsFocus] = useState(false);
    const showSearchBar = () => {
        setIsFocus(current => !current);
    }

    return (
        isLoading ?
            <Loader />
            :
            <header className="header">
                <div className="header-top text-white">
                    <div className="container header-top-content">
                        <Dropdown>
                            <Dropdown.Toggle className='text-white' variant="transperent" id="dropdown-basic">
                                <i className="fa-regular fa-user border rounded-circle border-white p-1 text-white justify-content-center align-items-center"></i>
                                <span className="btn me-3 text-white">{user.name_ar} مرحباً </span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" className='actions d-flex justify-content-between m-1'>
                                    <span>
                                        حسابي
                                    </span>
                                    <i class="fa-solid fa-chevron-left"></i>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2" className='actions d-flex justify-content-between m-1'>
                                    <span>
                                        الاعدادات
                                    </span>
                                    <i class="fa-solid fa-chevron-left"></i>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3" className='actions d-flex justify-content-between m-1'>
                                    <span>
                                        التنبيهات
                                    </span>
                                    <i class="fa-solid fa-chevron-left"></i>
                                </Dropdown.Item>
                                <br />
                                <hr />
                                <Dropdown.Item href="#/action-4" className='actions d-flex justify-content-between mt-2'>
                                    <span>
                                        تسجيل الخروج
                                    </span>
                                    <i class="fa-solid fa-circle-chevron-right icon-danger"></i>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <div className="d-flex justify-content-center align-items-center">
                            <span>{ksaData} هجريا , الموافق {egDate} ميلادي</span>

                            <div className="row border rounded p-1 justify-content-between align-items-center me-2 gx-2">
                                <i className="col-auto fa-solid fa-sun text-warning"></i>
                                <span className="col-auto"> {user?.country?.name_ar}</span>
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
                                <img className='header-middle-icons search-img' src={search} alt='serach' onClick={showSearchBar} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={isFocus ? '' : 'd-none searchBar'}>
                    <SearchBar showSearchBar={showSearchBar} onSearch={() => setIsFocus(false)} />
                </div>
                <div className="header-bottom p-2">
                    <div className='container'>
                        <div className='row gx-4 align-items-center'>
                            <NavLink to='/home' activeclassname='active-link' className='col-auto'>الصفحة الرئيسية</NavLink>
                            <NavLink to='/latest' activeclassname='active-link' className='col-auto'>أحدث الأخبار</NavLink>
                            {
                                categories.map(category => {
                                    return (
                                        <NavLink key={category.id} to={'/news/' + category.code} activeclassname='active-link' className='col-auto'>{category.name_ar}</NavLink>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>


            </header>
    )
}

export default Header;