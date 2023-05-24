import { useSelector } from "react-redux";
import Translate from "../../helpers/Translate/Translate";
import { Link, useNavigate } from "react-router-dom";

const SelectResourcesType = () => {
    const logo = require('../../assets/images/logo-red.webp');
    const anotherResources = require('../../assets/images/another-resources.png');
    const user = useSelector(state => state.auth.user);
    const navigate = useNavigate()
    const selectResourcesType = (e) => {
        e.preventDefault();
        if (e.target.elements.resources.value === "1") {
            navigate('/auth/categories');
        } else {
            navigate('/home');
        }
    }
    return (
        <div className="select-resources">
            <header>
                <h2 className="step-header"><Translate id="titles.resourcesType" /></h2>
            </header>
            <p>تم تحديد موقعك {user?.country?.name_ar} <Link to="/auth/countries">لتغيير الدولة او إضافة دول اخرى</Link></p>
            <form onSubmit={selectResourcesType}>
                <div className="resources-options">

                    <div className="resources-option">
                        <img src={logo} alt="sard logo" />
                        <div className="resources-option-input">
                            <input type="radio" value={0} name="resources" /> مصادر سرد فقط
                        </div>
                    </div>
                    <div className="resources-option">
                        <img src={anotherResources} alt="sard logo" />
                        <div className="resources-option-input">
                            <input type="radio" value={1} name="resources" /> إضافة مصادر اخرى
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 mt-5">
                        <button className="main-button w-100" type="submit">التالي</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SelectResourcesType;