import DefaultBox from "./hooks/Box";
import BoxCanHover from "./hooks/BoxCanHover";

const Box = Object.assign(DefaultBox, {
    CanHover: BoxCanHover
});

export default Box;