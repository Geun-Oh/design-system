import { SelectWrapper } from "./forms/SelectWrapper";
import { SelectOption } from "./forms/SelectOption";

const Select = Object.assign(SelectWrapper, {
    Option: SelectOption,
});

export default Select;