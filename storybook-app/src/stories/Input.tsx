/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles } from "../themes";
import { Icon, IconProps } from "./Icon";

type InputType = "textInput" | "date" | "phoneNumber" | "password" | "searchField" | "multiSelectInput" | "numberOnlyInput" | "inputWithSteper" | "textAreaInput";

interface InputProps {
    type: InputType;
    width: number;
    icon?: IconProps["type"];
    name?: string;
}

export const Input = ({ type, width, icon, name }: InputProps) => {

    const [passwordType, setPasswordType] = React.useState("password");
    const [inputValue, setInputValue] = React.useState("");

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
                    <input css={textInputStyle()} type="text" onChange={handlePress} value={inputValue}  placeholder="010-1234-5678" maxLength={13}/>
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
        default:
            return null;
    }
}

const style = (width) => css`
    width: ${width}px;
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