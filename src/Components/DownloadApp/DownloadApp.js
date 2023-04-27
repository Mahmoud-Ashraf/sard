import HomeSection from "../../UI/HomeSection/HomeSection";
const logo = require('../../assets/images/logo-red.webp');
const apps = require('../../assets/images/Apps.webp');


const DownloadApp = () => {
    return (
        <HomeSection title="">


            <div className='d-flex justify-content-between p-3'>

                <div className='d-flex align-items-center'>
                    <img className='header-middle-logo' src={logo} alt='' />
                </div>
                <div>
                    <h4 className='text-center'>قم بتحميل تطبيق سرد الأخبارى الأن</h4>
                    <img src={apps} alt='' />
                </div>

            </div>
        </HomeSection>
    )
}
export default DownloadApp;