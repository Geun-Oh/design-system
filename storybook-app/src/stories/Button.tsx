/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles } from "../themes";
import { Icon } from './Icon';

type ButtonProps = {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  size: "large" | "small";
  theme?: 'default' | 'link' | 'warning' | 'delete' | 'disabled';
}

export const Button = ({ onClick, label, size, theme }: ButtonProps) => {
  return (
    <button css={[style({ size }), themes[theme!]]} onClick={onClick}>
      {label}
      <Icon type="angleDown" />
    </button>
  )
};

export const ButtonWithIcon = ({ onClick, label, size, theme }: ButtonProps) => {
  return (
    <button css={[style({ size }), themes[theme!]]} onClick={onClick}>
      {label}
    </button>
  )
};

Button.defaultProps = {
  theme: 'primary'
};

const style = ({ size }: ButtonProps) => css`
  box-shadow: ${BaseStyles.Shadow.BottomDefault};
  transition-duration: 0.5s;
  outline: none;
  border: none;
  box-sizing: border-box;
  background: white;
  height: ${size === "small" ? "2rem" : "3rem"};
  font-size: ${BaseStyles.Text.Heading4};
  font-family: "Fira Code";
  font-weight: ${BaseStyles.Text.Border4};
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  line-height: 1;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;

const themes = {
  default: css`
    color: ${BaseStyles.Color.Black4};
    &:hover {
      background: ${BaseStyles.Color.Beige1};
    }
    &:active {
      background: ${BaseStyles.Color.Beige3};
    }
  `,
  link: css`
    color: ${BaseStyles.Color.Orange2};
    font-weight: ${BaseStyles.Text.Border3};
    &:hover {
      background: ${BaseStyles.Color.Orange2};
      color: white;
    }
    &:active {
      background: ${BaseStyles.Color.Orange3};
      color: white;
    }
  `,
  warning: css`
  background: ${BaseStyles.Color.Red2};
  color: white;
  &:hover {
    background: ${BaseStyles.Color.Red0};
    color: ${BaseStyles.Color.Red2};
  }
  &:active {
    background: ${BaseStyles.Color.Red1};
    color: ${BaseStyles.Color.Red2};
  }
  `,
  delete: css`
  background: ${BaseStyles.Color.Red1};
  color: white;
  &:hover {
    background: ${BaseStyles.Color.Red2};
    color: black;
  }
  `,
  disabled: css`
  background: ${BaseStyles.Color.Black1};
  color: black;
  &:hover {
    background: ${BaseStyles.Color.Black3};
    color: white;
  }
  `
};