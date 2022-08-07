/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles } from "../themes";
import { Icon } from "./Icon";

interface DropdownProps {
    options: string[];
    width: number;
}

export const Dropdown = ({ options, width }: DropdownProps) => {
    const [ selected, setSelected ] = React.useState("");
    const [ toggled, setToggled ] = React.useState(false);

    const onClick = () => setToggled(prev => !prev)
    const angle = toggled ? "angleLeft" : "angleDown";

    const optionStyle = css`
        box-shadow: ${BaseStyles.Shadow.BottomDefault};
        transition-duration: 0.5s;
        border: none;
        width: ${width}px;
        padding: 0.5rem 1.5rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        transform: scaleY(${toggled ? 1 : 0});
        transform-origin: top center;
        p {
            width: ${width}px;
        }
    `

    const style = css`
        box-shadow: ${BaseStyles.Shadow.BottomDefault};
        transition-duration: 0.5s;
        border: none;
        height: 1rem;
        width: ${width}px;
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
    `

    return (
        <div className='wrapper'>
            <div css={style} onClick={onClick} >
                {selected === "" ? <p style={{ color: BaseStyles.Color.Black1 }}>Select option...</p> : selected}
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
    width: 300,
}
