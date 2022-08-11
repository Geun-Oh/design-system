/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles } from "../themes";
import { Icon } from "./Icon";

interface DropdownProps {
    options: string[];
    width: string;
    disabled: boolean;
}

export const Dropdown = ({ options, width, disabled }: DropdownProps) => {
    const [ selected, setSelected ] = React.useState("");
    const [ toggled, setToggled ] = React.useState(false);

    const onClick = () => disabled ? null : setToggled(prev => !prev);
    const angle = disabled ? "xmark" : toggled ? "angleLeft" : "angleDown";
    const placeHolder = () => disabled ? <p style={{ color: BaseStyles.Color.Black1 }}>Disabled</p> : selected === "" ? <p style={{ color: BaseStyles.Color.Black1 }}>Select option...</p> : selected;

    const optionStyle = css`
        box-shadow: ${BaseStyles.Shadow.BottomDefault};
        transition-duration: 0.5s;
        border: none;
        width: ${width};
        padding: 0.5rem 1.5rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        transform: scaleY(${toggled ? 1 : 0});
        transform-origin: top center;
        p {
            width: ${width};
        }
    `

    const style = css`
        box-shadow: ${BaseStyles.Shadow.BottomSmall};
        transition-duration: 0.5s;
        border: none;
        height: 1rem;
        width: ${width};
        padding: 1rem 1.5rem;
        margin-bottom: 0.5rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        Icon {
            transform-origin: center;
        }
        &:hover {
            border: 1px solid ${BaseStyles.Color.Black1};
        }
    `

    return (
        <div className='wrapper'>
            <div css={style} onClick={onClick}>
                {placeHolder()}
                <Icon type={angle} scale={1.5} />
            </div>
            <div css={optionStyle}>
                {options && options.map((item: string): JSX.Element => {
                    return <p onClick={() => {
                        setSelected(item)
                        onClick()
                    }}>{item}</p>
                })}
            </div>
        </div>
    )
}

Dropdown.defaultProps = {
    options: ["option1", "option2", "option3"],
    disabled: false,
    width: "300px",
}
