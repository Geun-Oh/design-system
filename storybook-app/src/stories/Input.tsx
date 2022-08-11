/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles } from "../themes";
import { Icon, IconProps } from "./Icon";

type InputType = "textInput" | "date" | "phoneNumber" | "password" | "searchField" | "multiSelectInput" | "numberOnlyInput" | "inputWithSteper" | "textAreaInput";

interface InputProps {
    type: InputType;
    width: string;
    icon?: IconProps["type"];
    name?: string;
    height?: string;
}

export const Input = ({ type, width, icon, name, height }: InputProps) => {

    const [passwordType, setPasswordType] = React.useState("password");
    const [inputValue, setInputValue] = React.useState("");
    const [stepNumber, setStepNumber] = React.useState(0);

    const handlePress = (e) => {
        const regex = /^[0-9\b -]{0,13}$/;
        if (regex.test(e.target.value)) {
            setInputValue(e.target.value);
        }
    }

    React.useEffect(() => {
        if (inputValue.length === 10) {
            setInputValue(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
        }
        if (inputValue.length === 13) {
            setInputValue(inputValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
    }, [inputValue]);

    switch (type) {
        case "textInput":
            return (
                <div css={style(width)}>
                    <input css={textInputStyle()} placeholder="Input Text" type="text" name={name}></input>
                </div>
            )
        case "date":
            return (
                <div css={style(width)}>
                    <input css={textInputStyle()} type="date" name={name}></input>
                </div>
            )
        case "phoneNumber": // 전화번호 형식에 맞지 않을 때 경고하는 로직 제작
            return (
                <div css={style(width)}>
                    <input css={textInputStyle()} type="text" onChange={handlePress} value={inputValue} placeholder="010-1234-5678" maxLength={13} />
                </div>
            )
        case "password":
            return (
                <div css={style(width)}>
                    <input type={passwordType} css={textInputStyle()} name={name} />
                    <button onMouseDown={() => setPasswordType("text")} onMouseUp={() => setPasswordType("password")} style={{ width: "16px", height: "16px", border: "none", outline: "none", background: "none" }}>
                        <Icon type="eye" />
                    </button>
                </div>
            )
        case "searchField":
            return (
                <div css={style(width)}>
                    <Icon type="magnifyingGlass" />
                    <input css={textInputStyle()} style={{ paddingLeft: "16px" }} placeholder="Search..." type="text" name={name}></input>
                </div>
            )
        case "inputWithSteper":
            return (
                <div css={style(width = "80px")}>
                    <div css={textInputStyle()}>{stepNumber}</div>
                    <div className='steperwrapper' css={steperWrapperStyle()}>
                        <button onClick={() => setStepNumber(prev => prev + 1)}>
                            <Icon type="angleUp" />
                        </button>
                        <button onClick={() => setStepNumber(prev => prev - 1)}>
                            <Icon type="angleDown" />
                        </button>
                    </div>
                </div>
            )
        case "textAreaInput":
            return (
                <div css={textAreaStyle(width)}>
                    <textarea css={textAreaInputStyle(height)} placeholder="Input Text" name={name}></textarea>
                </div>
            )
        default:
            return null;
    }
}

Input.defaultProps = {
    width: "300px",
    height: "300px",
}

const style = (width) => css`
    width: ${width};
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    transition-duration: 0.5s;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    border-radius: 6px;
    background: white;
`

const textInputStyle = () => css`
    width: 100%;
    font-family: ${BaseStyles.Font.FiraCode};
    font-size: 1rem;
    border: none;
    outline: none;
    text-decoration: none;
`

const steperWrapperStyle = () => css`
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
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
`

const textAreaStyle = (width) => css`
width: ${width};
box-shadow: ${BaseStyles.Shadow.BottomDefault};
transition-duration: 0.5s;
border: none;
display: flex;
flex-direction: row;
padding: 1rem;
border-radius: 6px;
background: white;
`

const textAreaInputStyle = (height) => css`
width: 100%;
height: ${height};
font-family: ${BaseStyles.Font.FiraCode};
font-size: 1rem;
border: none;
outline: none;
text-decoration: none;
`