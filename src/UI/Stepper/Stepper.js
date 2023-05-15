import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StepperActions } from "../../Store/Stepper/Stepper";

const Stepper = (props) => {
    const activeStep = useSelector(state => state.stepper.activeStep);
    const steps = useSelector(state => state.stepper.steps);
    const logo = require('../../assets/images/logo-red.webp');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(StepperActions.initStep());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const prevStepHandler = () => {
        dispatch(StepperActions.prevStep());
    }
    return (
        <div className="stepper">
            <header className="stepper-header">
                <img className='stepper-header-logo' src={logo} alt='sard logo' />
                {
                    activeStep > 0 &&
                    <div className="stepper-header-back" onClick={prevStepHandler}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </div>
                }
            </header>
            {
                steps[activeStep]
            }
        </div>
    )
}

export default Stepper;