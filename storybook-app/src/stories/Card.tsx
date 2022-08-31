/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles, Themes, ThemeType } from "../themes";
import { Icon, IconProps } from "./Icon";
import { Button } from "./Button";
import image1 from "../icons/image1.png";

interface CardProps {
    /**라이트모드와 다크모드를 선택해주세요. */
    themeType: ThemeType;
    /**카드의 헤드를 추가할 지 선택해주세요. */
    head?: string;
    /**버튼에 들어갈 아이콘의 타입을 지정해주세요. */
    icon?: IconProps["type"];
    /**카드의 제목을 입력헤주세요. */
    title: string;
    /**카드의 너비를 입력해주세요. 다른 컴포넌트와 다르게 100, 50과 같이 px을 단위로 하는 number를 입력해야 합니다. */
    width: number;
    /**카드를 통해 전달하고 싶은 말을 입력해주세요. */
    detail: string;
    /**카드에 버튼 필요 여부를 선택해주세요. */
    confirmButton: boolean;
    /**카드에 이미지 추가 여부를 선택해주세요. */
    image: boolean;
    /**이미지의 주소를 입력해주세요. */
    imgUrl: string | null;
}
/**
 * 다양한 옵션을 잘 선택해서 사용해주세요!
 */
export const Card = ({ themeType, head, icon, title, width, detail, confirmButton, image, imgUrl }: CardProps) => {
    const theme = themeType === "lightMode" ? Themes.LightMode : Themes.DarkMode;

    return (
        <div>
            <div css={style({ width, image, theme })} className='cardwrapper'>
                {head === undefined ? null : <div className='headwrapper' style={{ backgroundColor: theme.BackgroundColor, color: theme.Color }}>{head}</div>}
                {icon === undefined ? null : <div className='iconwrapper'>
                    <Icon type={icon} scale={2.5} fill={theme.Color} />
                </div>}
                <p>{title}</p>
                <span>{detail}</span>
                {image === false && confirmButton === true ? <Button onClick={() => console.log("Submit!")} innerText="Submit" theme="submit" /> : null}
            </div>
            {image === false ? null : <div css={imgStyle({ width, imgUrl })}>
                {confirmButton === false ? null : <Button onClick={() => console.log("Submit!")} innerText="Submit" theme="submit" />}
            </div>}
        </div>
    )
}

Card.defaultProps = {
    themeType: "lightMode",
    title: "Card Example",
    width: 300,
    detail: "Example of a card's description. Stick to one or twe sentences.",
    confirmButton: false,
    imgUrl: image1,
}

const style = ({ width, image, theme }) => css`
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    transition-duration: 0.5s;
    border: none;
    width: ${width}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 1rem;
    border-radius: ${image === false ? "1.5rem" : "1.5rem 1.5rem 0 0"};
    background: ${theme.BackgroundColor};
    color: ${theme.Color};
    .headwrapper {
        font-weight: ${BaseStyles.Text.Border0};
        height: 24px;
        width: ${width * 0.3}px;
        border: 1px solid ${BaseStyles.Color.Black0};
        border-radius: 12px;
        background: white;
        text-align: center;
        transform: translateY(-28px);
    }
    p {
        font-size: ${BaseStyles.Text.Heading3};
        font-weight: ${BaseStyles.Text.Border1};
    }
    span {
        width: ${width}px;
        text-align: center;
        margin-bottom: 2rem;
        font-size: ${BaseStyles.Text.Heading4};
        font-weight: ${BaseStyles.Text.Border4};
    }
    Button {
        width: ${width}px;
        background: ${BaseStyles.Color.Beige1};
    }
`

const imgStyle = ({ width, imgUrl }) => css`
    width: ${width}px;
    height: ${width * 0.8}px;
    padding: 1rem 1rem;
    background: url(${imgUrl});
    background-size: cover;
    background-position: center center;
    border-radius: 0 0 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    Button {
        width: ${width}px;
        background: ${BaseStyles.Color.Beige1};
    }
`