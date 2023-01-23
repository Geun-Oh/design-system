import { SelectMain } from "./hooks/SelectMain";
import { Selected } from "./hooks/Selected";
import { SelectOption } from "./hooks/SelectOption";

const Select = Object.assign(SelectMain, {
    Option: SelectOption,
    SelectedArea: Selected
});

export default Select;