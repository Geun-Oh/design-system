import React from "react";

interface MarginBoxProps {
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    marginBottom?: string;
    margin?: string;
}

const MarginBox = ({ marginLeft, marginRight, marginTop, marginBottom, margin }: MarginBoxProps) => {
    return (
        <div style={{ margin: margin ?? 0, marginLeft, marginRight, marginTop, marginBottom }}></div>
    )
};

export default MarginBox;