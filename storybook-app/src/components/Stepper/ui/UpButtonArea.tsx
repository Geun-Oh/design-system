/** @jsxImportSource @emotion/react */
import React from 'react';
import { stepperButtonStyle } from './style';
import Icon from "../../Icon";

const UpButton = ({ onClick }: {onClick: (e: any) => any }) => {
    return (
        <button data-testid='Stepper-Default-UpButton' css={stepperButtonStyle} onClick={onClick}>
            <Icon type="angleUp" />
        </button>
    );
};

export default UpButton;