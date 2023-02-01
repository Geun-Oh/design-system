/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BaseStyles } from "../../themes";

export const ColorTheme = {
  Standard: `${BaseStyles.Color.Beige2}`,
  Access: `${BaseStyles.Color.Lime1}`,
  Warning: `${BaseStyles.Color.Orange2}`,
  Error: `${BaseStyles.Color.Red1}`,
  New: `${BaseStyles.Color.Purple1}`,
  Wait: `${BaseStyles.Color.Black1}`,
};

export type ColorType =
  | "Standard"
  | "Access"
  | "Warning"
  | "Error"
  | "New"
  | "Wait";

export const indicateStyle = ({
  color
}: {
  color: ColorType;
}) => css`
  position: relative;
  float: right;
  transition-duration: 0.5s;
  background: ${ColorTheme[color]};
  border-radius: 1px soild black;
  height: 12px;
  padding: 0 6px 0 6px;
  border-radius: 6px;
  color: white;
  transform: translate(-12px, -6px);
  font-size: ${BaseStyles.Text.Heading5};
  font-family: ${BaseStyles.Font.FiraCode};
  font-weight: ${BaseStyles.Text.Border0};
`;

export const innerStyle = ({
  color
}: {
  color: ColorType;
}) => css`
  position: relative;
  float: right;
  transition-duration: 0.5s;
  transform: translate(16px, -24px);
  background: ${ColorTheme[color]};
  border-radius: 1px soild black;
  height: 24px;
  padding: 0 12px 0 12px;
  border-radius: 12px;
  color: white;
  font-size: ${BaseStyles.Text.Heading4};
  font-family: ${BaseStyles.Font.FiraCode};
  font-weight: ${BaseStyles.Text.Border0};
`;
