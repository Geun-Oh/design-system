import { SelectEx } from "./hooks/SelectEx";
import { SelectMain } from "./hooks/SelectMain";
import { SelectOption } from "./hooks/SelectOption";

const Select = Object.assign(SelectMain, {
    Select: SelectEx,
    Option: SelectOption,
});

export default Select;