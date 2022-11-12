/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { BaseStyles } from "../themes";
import Icon from "./Icon";

interface StatusbarProps {
    /**원하는 텍스트를 입력해주세요. */
    innerText: string;
    /**아코디언의 너비를 지정해주세요. "100px", "50vw"와 같이 단위를 포함한 string으로 입력해야합니다. */
    width: string;
    /**추가적인 하이퍼링크나 액션이 필요할 때 사용합니다. 원하는 텍스트를 입력해주세요. */
    extraAction?: string;
    /**액션의 트리거가 될 링크를 입력해주세요. */
    src: string;
    /**로딩중인지 여부를 나타내기 위해 사용합니다. */
    loading: boolean;
}
/**
 * 특정 상태에 대한 로딩 여부를 판단하거나 다른 페이지로 리디렉션 할 수 있습니다.
 */
const Statusbar = ({ innerText, width, extraAction, src, loading }: StatusbarProps) => {

    return (
        <div css={style(width)}>
            <p>{innerText}</p>
            {src && extraAction ? <a href={src} style={{ textDecoration: "none" }} ><p style={{ color: `${BaseStyles.Color.Orange3}` }}>{extraAction}</p></a> : null}
                {loading === true ? <Icon type="loading" scale={1.5} /> : null}
        </div>
    )
}

Statusbar.defaultProps = {
    innerText: "Statusbar InnerText",
    width: "300px",
    loading: false,
};

const style = (width: string) => css`
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    transition-duration: 0.5s;
    outline: none;
    border: none;
    width: ${width};
    height: 48px;
    box-sizing: border-box;
    background: white;
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    font-size: ${BaseStyles.Text.Heading4};
    font-family: "Fira Code";
    font-weight: ${BaseStyles.Text.Border4};
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    line-height: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    button {
        outline: none;
        border: none;
        background: none;
        transform: translate(10px, -2px);
    }
`

export default Statusbar;