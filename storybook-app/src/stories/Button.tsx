/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles } from "../themes";
import { Icon, IconProps } from './Icon';

type ThemeType = 'none' | 'default' | 'link' | 'warning' | 'delete' | 'disabled' | "submit" | "formSubmit";

interface ButtonProps {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  width?: string;
  height?: string;
  theme?: ThemeType;
  iconType?: IconProps["type"];
  backgroundColor?: string;
  color?: string;
  hoverColor?: string;
}

export const Button = ({ onClick, label, width, height, theme, iconType, backgroundColor, color, hoverColor }: ButtonProps) => {
  return (
    <button css={[style({ width, height, backgroundColor, color, hoverColor }), themes[theme!]]} onClick={onClick}>
      {label}
      <div css={iconStyle(iconType)} >
        <Icon type={iconType} />
      </div>
    </button>
  )
};

Button.defaultProps = {
  iconType: "none",
  backgroundColor: "#FFFFFF",
};

const iconStyle = (iconType) => css`
  ${iconType === "none" ? null : "padding-left: 16px" };
`

const style = ({ width, height, backgroundColor, color, hoverColor }: ButtonProps) => css`
  box-shadow: ${BaseStyles.Shadow.BottomDefault};
  transition-duration: 0.5s;
  outline: none;
  border: none;
  box-sizing: border-box;
  background: ${backgroundColor};
  color: ${color};
  width: ${width};
  height: ${height};
  font-size: ${BaseStyles.Text.Heading4};
  font-family: ${BaseStyles.Font.FiraCode};
  font-weight: ${BaseStyles.Text.Border4};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  line-height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover {
    color: ${hoverColor};
  }
`;

const themes = {
  none: css`
  `
  ,
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
  `,
  submit: css`
  background: ${BaseStyles.Color.Beige2};
  color: black;
  &:hover {
    background: ${BaseStyles.Color.Beige3};
    color: white;
  }
  `,
  formSubmit: css`
  background: ${BaseStyles.Color.Orange2};
  color: black;
  &:hover {
    background: ${BaseStyles.Color.Orange3};
    color: white;
  }
  `
};