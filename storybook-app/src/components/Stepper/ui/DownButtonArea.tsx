/** @jsxImportSource @emotion/react */
import React from 'react';
import { stepperButtonStyle } from './style';
import Icon from "../../Icon";

const DownButton = ({ onClick }: { onClick: (e: any) => any }) => {
    return (
        <button data-testid='Stepper-Default-DownButton' css={stepperButtonStyle} onClick={onClick}>
            <Icon type="angleDown" />
        </button>
    );
};

export default DownButton;