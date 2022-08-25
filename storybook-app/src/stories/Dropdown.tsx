/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { BaseStyles } from "../themes";
import { Icon } from "./Icon";

interface DropdownProps {
    /**드롭다운의 선택 옵션을 입력해주세요. */
    options: string[];
    /**드롭다운의 너비를 지정해주세요. "100px", "50vw"와 같이 단위를 포함한 string으로 입력해야합니다.  */
    width: string;
    /**드롭다운의 활성화 여부를 선택해주세요. */
    disabled: boolean;
    /**드롭다운이 다수의 선택지를 가질 수 있는지 여부를 선택해주세요. */
    multiSelect: boolean;
}

export const Dropdown = ({ options, width, disabled, multiSelect }: DropdownProps) => {
    const [selected, setSelected] = React.useState<string>("");
    const [multiSelected, setMultiSelected] = React.useState<string[]>([]);
    const [multiOptions, setMultiOptions] = React.useState<string[]>(options);
    const [toggled, setToggled] = React.useState<boolean>(false);

    const onClick = () => disabled ? null : setToggled(prev => !prev);
    const angle = disabled ? "xmark" : toggled ? "angleLeft" : "angleDown";
    const angleForMultiSelection = disabled ? "xmark" : toggled ? "angleDown" : "angleRight";
    const placeHolder = () => disabled ? <p style={{ color: BaseStyles.Color.Black1 }}>Disabled</p> : selected === "" ? <p style={{ color: BaseStyles.Color.Black1 }}>Select option...</p> : selected;
    const placeHolderForMultiSelection = () => multiSelected === [] ? "Select options..." : multiSelected.map((item: string): JSX.Element => {
        return <div css={multiOptionStyle()}>
            {item}
            <button onClick={() => {
                setMultiSelected(prev => prev.filter(x => x !== item))
                setMultiOptions(prev => [...prev, item])
            }} style={{ opacity: 0.5 }}>
                <Icon type="xmark" scale={0.8} />
            </button>
        </div>
    })

    const optionStyle = css`
        box-shadow: ${BaseStyles.Shadow.BottomDefault};
        transition-duration: 0.5s;
        border: none;
        width: ${width};
        max-height: 100px;
        overflow-x: hidden;
        overflow-y: scroll;
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
        border: 0.3px solid ${BaseStyles.Color.Black0};
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
            border: 1px solid ${BaseStyles.Color.Beige2};
        }
    `

    const multiSelectorStyle = () => css`
        box-shadow: ${BaseStyles.Shadow.BottomSmall};
        transition-duration: 0.5s;
        border: 0.3px solid ${BaseStyles.Color.Black0};
        width: ${width};
        padding: 1rem 1.5rem;
        margin-bottom: 0.5rem;
        border-radius: 1rem;
        display: inline-flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        Icon {
            transform-origin: center;
        }
        &:hover {
            border: 1px solid ${BaseStyles.Color.Beige2};
        }
    `

    const xmarkStyle = css`
        width: 18px;
        height: 18px;
        outline: none;
        border: none;
        background: none;
    `

    const multiOptionStyle = () => css`
        font-family: ${BaseStyles.Font.FiraCode};
        font-weight: ${BaseStyles.Text.Border3};
        height: 24px;
        background: #FFECCE;
        color: #616161;
        margin-left: 10px;
        margin-top: 6px;
        padding: 4px 4px 4px 10px;
        border-radius: 6px;
        button {
            outline: none;
            border: none;
            background: none;
            transform: translateY(2px);
        }
    `

    if (!multiSelect) {
        return (
            <div className='wrapper'>
                <div css={style}>
                    {placeHolder()}
                    <button css={xmarkStyle} onClick={onClick}>
                        <Icon type={angle} scale={1.5} />
                    </button>
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
    } else {
        return (
            <div className='wrapper'>
                <div css={multiSelectorStyle()} style={{ justifyContent: "flex-start" }}>
                    <button css={xmarkStyle} onClick={onClick}>
                        <Icon type={angleForMultiSelection} scale={1.5} />
                    </button>
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        {placeHolderForMultiSelection()}
                    </div>

                </div>
                <div css={optionStyle}>
                    {multiOptions && multiOptions.map((item: string): JSX.Element => {
                        return <p onClick={() => {
                            setMultiSelected(prev => [...prev, item])
                            setMultiOptions(prev => prev.filter(x => x !== item))
                        }}>{item}</p>
                    })}
                </div>
            </div>
        )
    }
}

Dropdown.defaultProps = {
    options: ["React.js", "Vue.js", "Angular.js"],
    disabled: false,
    width: "300px",
    multiSelect: false,
}
