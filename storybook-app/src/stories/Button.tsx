/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { BaseStyles } from "../themes";
import { Icon, IconProps } from './Icon';

type ThemeType = 'none' | 'default' | 'link' | 'warning' | 'delete' | 'disabled' | "submit" | "formSubmit";

interface ButtonProps {
  /**버튼 클릭 시 실행할 함수를 지정해주세요. */
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /**원하는 텍스트를 입력해주세요. */
  innerText: string;
  /**버튼의 너비를 지정해주세요. "100px", "50vw"와 같이 단위를 포함한 string으로 입력해야합니다. */
  width?: string;
  /**버튼의 높이를 지정해주세요. "100px", "50vw"와 같이 단위를 포함한 string으로 입력해야합니다.  */
  height?: string;
  /**버튼의 기본 테마를 지정해주세요. */
  theme?: ThemeType;
  /**버튼에 들어갈 아이콘의 타입을 지정해주세요. */
  iconType?: IconProps["type"];
  /**버튼의 배경색을 지정해주세요. */
  backgroundColor?: string;
  /**버튼의 텍스트 색을 지정해주세요. */
  color?: string;
  /**버튼에 커서를 가져다 대었을 때 변화할 배경색을 지정해주세요. */
  hoverColor?: string;
}
/**
 * 기본 타입을 선택해 사용하거나 직접 커스텀할 수 있습니다.
 */
const Button = ({ onClick, innerText, width, height, theme, iconType, backgroundColor, color, hoverColor }: ButtonProps) => {
  return (
    <button css={[style(width!, height!, backgroundColor!, color!, hoverColor!), themes[theme!]]} onClick={onClick}>
      {innerText}
      <div css={iconStyle(iconType!)} >
        <Icon type={iconType} />
      </div>
    </button>
  )
};

Button.defaultProps = {
  iconType: "none",
  backgroundColor: "#FFFFFF",
};

const iconStyle = (iconType: IconProps["type"]) => css`
  ${iconType === "none" ? null : "padding-left: 16px" };
`

const style = ( width: string, height: string, backgroundColor: string, color: string, hoverColor: string ) => css`
  box-shadow: ${BaseStyles.Shadow.BottomDefault};
  transition-duration: 0.5s;
  outline: none;
  border: none;
  box-sizing: border-box;
  background: ${backgroundColor || "#ffffff"};
  color: ${color || BaseStyles.Color.Black4};
  width: ${width};
  height: ${height};
  font-size: ${BaseStyles.Text.Heading4};
  font-family: ${BaseStyles.Font.FiraCode};
  font-weight: ${BaseStyles.Text.Border4};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  line-height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${hoverColor || BaseStyles.Color.Beige1};
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

export default Button;