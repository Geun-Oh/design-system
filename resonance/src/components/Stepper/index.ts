import DownButton from "./forms/DownButton";
import StepperEx from "./forms/StepperEx";
import UpButton from "./forms/UpButton";
import Value from "./forms/Value";

/**
 * Stepper의 부모가 되는 컴포넌트입니다.
 * @param children - 하위 자식 요소를 받습니다.
 * @param defaultValue - Stepper의 초깃값을 설정합니다.
 * @param next - 내부 값의 변화가 발생하였을 때 값을 통해 실행할 함수를 정의합니다.
 * @param width - 컴포넌트의 너비를 지정합니다.
 */
const Stepper = Object.assign(StepperEx, {
    DownButton,
    UpButton,
    Value,
});

export default Stepper;