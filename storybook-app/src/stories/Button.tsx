/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';

type ButtonProps = {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  size: "large" | "small";
  backgroundColor: string;
  theme?: 'primary' | 'secondary' | 'tertiary';
}

export const Button = ({ onClick, label, size, backgroundColor, theme }: ButtonProps) => {
  return (
    <button css={[style({ backgroundColor, size }), themes[theme!]]} onClick={onClick}>
      #{label}
    </button>
  )
};

Button.defaultProps = {
  theme: 'primary'
};

const style = ({ backgroundColor, size }: ButtonProps) => css`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: ${size === "small" ? "2rem" : "3rem"};
  font-size: ${size === "small" ? "0.875rem" : "1.25rem"};
  padding: 0.5rem 1rem;
  background: ${backgroundColor};
  color: white;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background: #38d9a9;
  }
  &:active {
    background: #12b886;
  }
`;

const themes = {
  primary: css`
    background: #20c997;
    color: white;
    &:hover {
      background: #38d9a9;
    }
    &:active {
      background: #12b886;
    }
  `,
  secondary: css`
    background: #e9ecef;
    color: #343a40;
    &:hover {
      background: #f1f3f5;
    }
    &:active {
      background: #dee2e6;
    }
  `,
  tertiary: css`
    background: none;
    color: #20c997;
    &:hover {
      background: #e6fcf5;
    }
    &:active {
      background: #c3fae8;
    }
  `
};