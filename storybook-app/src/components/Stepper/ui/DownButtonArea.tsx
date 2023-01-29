/** @jsxImportSource @emotion/react */
import React from 'react';
import { stepperButtonStyle } from './style';
import Icon from "../../Icon";

const DownButton = ({ onClick }: { onClick: (e: any) => any }) => {
    return (
        <button data-testid='upSteper' css={stepperButtonStyle} onClick={onClick}>
            <Icon type="angleDown" />
        </button>
    );
};

export default DownButton;