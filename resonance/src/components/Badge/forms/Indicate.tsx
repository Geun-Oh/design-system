import React from 'react';
import { ColorType } from "../style";
import IndicateArea from "../ui/IndicateArea";

const Indicate = ({ innerText, color }: { innerText?: string, color: ColorType }) => {
    return (
        <IndicateArea innerText={innerText} color={color} />
    );
};

export default Indicate;