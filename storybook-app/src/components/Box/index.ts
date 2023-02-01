import DefaultBox from "./hooks/Box";
import BoxCanHover from "./hooks/BoxCanHover";
import InlineBox from "./hooks/InlineBox";

const Box = Object.assign(DefaultBox, {
    CanHover: BoxCanHover,
    Inline: InlineBox,
});

export default Box;