/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles } from "../themes";

type StateType = "Access" | "Warning" | "Error" | "New" | "Wait";
type TypeVars = "default" | "textInner" | "textOver";

interface BadgeProps {
    /**원하는 텍스트를 입력해주세요. */
    innerText: string;
    /**뱃지의 기본 상태를 선택할 수 있습니다. */
    state: StateType;
    /**뱃지의 너비를 지정해주세요. "100px", "50vw"와 같이 단위를 포함한 string으로 입력해야합니다. */
    width: string;
    /**뱃지의 상태표시자가 어떤 스타일로 위치할 지 선택해주세요. */
    type: TypeVars;
}
/**
 * 상황에 맞게 타입을 설정하여 사용하세요!
 */
export const Badge = ({ innerText, state, width, type }: BadgeProps) => {

    const style = () => css`
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    transition-duration: 0.5s;
    outline: none;
    border: none;
    width: ${width};
    box-sizing: border-box;
    background: white;
    padding: 12px 16px;
    border-radius: 16px;
    height: 48px;
    font-size: ${BaseStyles.Text.Heading4};
    font-family: ${BaseStyles.Font.FiraCode};
    font-weight: ${BaseStyles.Text.Border0};
    div {
        ${type === "default" ? `
        position: relative;
        float: right;
        transition-duration: 0.5s;
        transform: translate(16px, -24px);
        background: ${badgeTheme[state]};
        border-radius: 1px soild black;
        width: 24px;
        height: 24px;
        border-radius: 12px;
        ` :
            type === "textInner" ? `
        position: relative;
        float: right;
        transition-duration: 0.5s;
        transform: translate(16px, -24px);
        background: ${badgeTheme[state]};
        border-radius: 1px soild black;
        height: 24px;
        padding: 0 12px 0 12px;
        border-radius: 12px;
        color: white;
        font-size: ${BaseStyles.Text.Heading4};
        font-family: ${BaseStyles.Font.FiraCode};
        font-weight: ${BaseStyles.Text.Border0};
        ` : `
        position: relative;
        float: right;
        transition-duration: 0.5s;
        background: ${badgeTheme[state]};
        border-radius: 1px soild black;
        height: 24px;
        padding: 0 12px 0 12px;
        border-radius: 12px;
        color: white;
        font-size: ${BaseStyles.Text.Heading4};
        font-family: ${BaseStyles.Font.FiraCode};
        font-weight: ${BaseStyles.Text.Border0};
        `
        }
    }
    `

    const badgeTheme = {
        Access: `${BaseStyles.Color.Lime1}`,
        Warning: `${BaseStyles.Color.Orange2}`,
        Error: `${BaseStyles.Color.Red1}`,
        New: `${BaseStyles.Color.Purple1}`,
        Wait: `${BaseStyles.Color.Black1}`,
    }

    const badgeInnerText = () => {
        switch (state) {
            case "Access":
                return "success"
            case "Error":
                return "error"
            case "New":
                return "new"
            case "Wait":
                return "wait"
            case "Warning":
                return "warn"
            default:
                return null;
        }
    }

    if (type === "textInner") {
        return (
            <div css={style()}>
                {innerText}
                <div css={badgeTheme}>{badgeInnerText()}</div>
            </div>
        )
    }

    if (type === "textOver") {
        return (
            <div css={style()}>
                {innerText}
                <div css={badgeTheme}>{badgeInnerText()}</div>
            </div>
        )
    }

    return (
        <div css={style()}>
            {innerText}
            <div css={badgeTheme}></div>
        </div>
    )
}

Badge.defaultProps = {
    innerText: "Badge InnerText",
    state: "Access",
    width: "300px",
    type: "default",
}