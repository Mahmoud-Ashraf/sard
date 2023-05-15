import { createSlice } from '@reduxjs/toolkit';

const initialStepperState = { activeStep: 0, steps: [] }

const stepperSlice = createSlice({
    name: 'stepper',
    initialState: initialStepperState,
    reducers: {
        initStep(state) {
            state.activeStep = 0;
        },
        nextStep(state) {
            state.activeStep = (state.activeStep >= (state.steps.length - 1)) ? state.activeStep : state.activeStep + 1;
        },
        prevStep(state) {
            state.activeStep = (state.activeStep <= 0) ? state.activeStep : state.activeStep - 1;
        },
        setSteps(state, action) {
            console.log(action.payload);
            state.steps = action.payload;
        }
    }
})



export const StepperActions = stepperSlice.actions;

export default stepperSlice.reducer;