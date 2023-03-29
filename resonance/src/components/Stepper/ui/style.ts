/** @jsxImportSource @emotion/react */
import { BaseStyles, Themes } from "@src/styles/themes";
import { css } from "@emotion/react";
type Theme = typeof Themes.LightMode;

export const style = (width: string, callTheme: Theme) => css`
  width: ${width || "auto"};
  background-color: ${callTheme.BackgroundColor};
  color: ${callTheme.Color};
  box-shadow: ${BaseStyles.Shadow.BottomDefault};
  transition-duration: 0.5s;
  border: 0.3px solid ${BaseStyles.Color.Black0};
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  &:hover {
    border: 1px solid ${BaseStyles.Color.Beige2};
  }
  input::placeholder {
    color: ${callTheme.Color};
  }
`;

export const textInputStyle = (callTheme: Theme) => css`
  width: 100%;
  background-color: ${callTheme.BackgroundColor};
  color: ${callTheme.Color};
  font-family: ${BaseStyles.Font.FiraCode};
  font-size: 1rem;
  border: none;
  outline: none;
  text-decoration: none;
`;

export const steperWrapperStyle = (theme: Theme) => css`
  box-shadow: ${BaseStyles.Shadow.BottomDefault};
  background-color: ${theme.BackgroundColor};
  color: ${theme.Color};
  width: 20px;
  height: 32.5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  button {
    outline: none;
    background: none;
    border: none;
    transition-duration: 0.5s;
    &:hover {
      background: ${BaseStyles.Color.Beige0};
    }
  }
`;

export const stepperButtonStyle = css`
  outline: none;
  background: none;
  border: none;
  transition-duration: 0.5s;
  &:hover {
    background: ${BaseStyles.Color.Beige0};
  }
`;
