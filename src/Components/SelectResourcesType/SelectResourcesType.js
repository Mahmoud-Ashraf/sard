import { useDispatch, useSelector } from "react-redux";
import Translate from "../../helpers/Translate/Translate";
import { Link } from "react-router-dom";
import { StepperActions } from "../../Store/Stepper/Stepper";

const SelectResourcesType = () => {
    const dispatch = useDispatch();
    const logo = require('../../assets/images/logo-red.webp');
    const anotherResources = require('../../assets/images/another-resources.png');
    const user = useSelector(state => state.auth.user);
    const onNext = (e) => {
        e.preventDefault();
        dispatch(StepperActions.nextStep());
    }
    return (
        <div className="select-resources">
            <header>
                <h2 className="step-header"><Translate id="titles.resourcesType" /></h2>
            </header>
            <p>تم تحديد موقعك {user?.country?.name_ar} <Link>لتغيير الدولة او إضافة دول اخرى</Link></p>
            <form className="resources-options">
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
            </form>
            <div className="row">
                <div className="col-md-3 mt-5">
                    <button className="main-button w-100" onClick={onNext}>التالي</button>
                </div>
            </div>
        </div>
    )
}

export default SelectResourcesType;