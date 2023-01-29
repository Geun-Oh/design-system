import DownButton from "./hooks/DownButton";
import StepperEx from "./hooks/StepperEx";
import UpButton from "./hooks/UpButton";
import Value from "./hooks/Value";

const Stepper = Object.assign(StepperEx, {
    DownButton,
    UpButton,
    Value,
});

export default Stepper;