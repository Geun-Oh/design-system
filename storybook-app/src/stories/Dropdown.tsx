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

    return (
        <div className='wrapper'>
            <div css={style(width)}>
                {selected}
                <Icon type="angleDown" scale={2}/>
            </div>
            <div css={optionStyle(width)}>
                {options && options.map((item: string): JSX.Element => {
                    return <p>{item}</p>
                })}
            </div>
        </div>
    )
}

const style = (width) => css`
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
`

const optionStyle = (width) => css`
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    transition-duration: 0.5s;
    border: none;
    width: ${width}px;
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    p {
        width: ${width}px;
    }
`