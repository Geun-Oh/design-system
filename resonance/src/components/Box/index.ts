import DefaultBox from "./forms/Box";
import BoxCanHover from "./forms/BoxCanHover";
import InlineBox from "./forms/InlineBox";

const Box = Object.assign(DefaultBox, {
    CanHover: BoxCanHover,
    Inline: InlineBox,
});

export default Box;