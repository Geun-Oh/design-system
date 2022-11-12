/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { BaseStyles, Themes, ThemeType } from "../themes";
import Icon, { IconProps } from "./Icon";

type InputType = "textInput" | "date" | "phoneNumber" | "password" | "searchField" | "inputWithSteper" | "textAreaInput";

interface InputProps {
    /**라이트모드와 다크모드를 설정해주세요. */
    themeType: ThemeType;
    /**타입을 정해주세요. */
    type: InputType;
    /**인풋의 너비를 지정해주세요. "100px", "50vw"와 같이 단위를 포함한 string으로 입력해야합니다. */
    width: string;
    /**아이콘의 타입을 설정해주세요. */
    icon?: IconProps["type"];
    /**인풋의 이름을 지정해주세요. 백엔드와의 통신에 제출할 폼에서 유용하게 사용됩니다. */
    name?: string;
    /**인풋의 높이를 지정해주세요. "100px", "50vw"와 같이 단위를 포함한 string으로 입력해야합니다. */
    height?: string;
}
type Theme = typeof Themes.LightMode;
/**
 * 상황에 맞게 커스텀하여 사용해주세요.
 */
const Input = ({ themeType, type, width, icon, name, height }: InputProps) => {
    const theme = themeType === "lightMode" ? Themes.LightMode : Themes.DarkMode;
    const [passwordType, setPasswordType] = React.useState("password");
    const [inputValue, setInputValue] = React.useState("");
    const [stepNumber, setStepNumber] = React.useState(0);

    const handlePress = (e: any) => {
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
                <div css={style(width, theme)}>
                    <input css={textInputStyle(theme)} placeholder="Input Text" type="text" name={name}></input>
                </div>
            )
        case "date":
            return (
                <div css={style(width, theme)}>
                    <input css={textInputStyle(theme)} type="date" name={name}></input>
                </div>
            )
        case "phoneNumber":
            return (
                <div css={style(width, theme)}>
                    <input css={textInputStyle(theme)} type="text" onChange={handlePress} value={inputValue} placeholder="010-1234-5678" maxLength={13} />
                </div>
            )
        case "password":
            return (
                <div css={style(width, theme)}>
                    <input type={passwordType} css={textInputStyle(theme)} name={name} />
                    <button onMouseDown={() => setPasswordType("text")} onMouseUp={() => setPasswordType("password")} style={{ width: "16px", height: "16px", border: "none", outline: "none", background: "none" }}>
                        <Icon type="eye" />
                    </button>
                </div>
            )
        case "searchField":
            return (
                <div css={style(width, theme)}>
                    <Icon type="magnifyingGlass" />
                    <input css={textInputStyle(theme)} style={{ paddingLeft: "16px" }} placeholder="Search..." type="text" name={name}></input>
                </div>
            )
        case "inputWithSteper":
            return (
                <div css={style(width="80px", theme)}>
                    <div css={textInputStyle(theme)}>{stepNumber}</div>
                    <div className='steperwrapper' css={steperWrapperStyle(theme)}>
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
                <div css={textAreaStyle(width, theme)}>
                    <textarea css={textAreaInputStyle(height!, theme)} placeholder="Input Text" name={name}></textarea>
                </div>
            )
        default:
            return null;
    }
}

Input.defaultProps = {
    themeType: "lightMode",
    width: "300px",
    height: "300px",
}

const style = (width: string, theme: Theme) => css`
    width: ${width};
    background-color: ${theme.BackgroundColor};
    color: ${theme.Color};
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    transition-duration: 0.5s;
    border: 0.3px solid ${BaseStyles.Color.Black0};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    border-radius: 1rem;
    &:hover {
        border: 1px solid ${BaseStyles.Color.Beige2};
    }
    input::placeholder {
        color: ${theme.Color};
    }
`

const textInputStyle = (theme: Theme) => css`
    width: 100%;
    background-color: ${theme.BackgroundColor};
    color: ${theme.Color};
    font-family: ${BaseStyles.Font.FiraCode};
    font-size: 1rem;
    border: none;
    outline: none;
    text-decoration: none;
`

const steperWrapperStyle = (theme: Theme) => css`
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
`

const textAreaStyle = (width: string, theme: Theme) => css`
background-color: ${theme.BackgroundColor};
color: ${theme.Color};
width: ${width};
box-shadow: ${BaseStyles.Shadow.BottomDefault};
transition-duration: 0.5s;
border: 0.3px solid     border: 0.3px solid ${BaseStyles.Color.Black0};;
display: flex;
flex-direction: row;
padding: 1rem;
border-radius: 6px;
&:hover {
    border: 1px solid ${BaseStyles.Color.Beige2};
}
textarea::placeholder {
    color: ${theme.Color};
}
`

const textAreaInputStyle = (height: string, theme: Theme) => css`
background-color: ${theme.BackgroundColor};
color: ${theme.Color};
width: 100%;
height: ${height};
font-family: ${BaseStyles.Font.FiraCode};
font-size: 1rem;
border: none;
outline: none;
text-decoration: none;
`

export default Input;