import HomeSection from "../../UI/HomeSection/HomeSection";
const logo = require('../../assets/images/logo-red.webp');
const apps = require('../../assets/images/Apps.webp');


const DownloadApp = () => {
    return (
        <HomeSection title="">
            <div className='apps row'>
                <div className='col apps-logo d-flex align-items-center justify-content-center'>
                    <img className='header-middle-logo' src={logo} alt='' />
                </div>
                <div className="col text-center">
                    <h4>قم بتحميل تطبيق سرد الأخبارى الأن</h4>
                    <img className="apps-images" src={apps} alt='' />
                </div>

            </div>
        </HomeSection>
    )
}
export default DownloadApp;