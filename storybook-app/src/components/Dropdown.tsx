/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { BaseStyles } from "../themes";
import Icon from "./Icon";
import MarginBox from './Marginbox';

interface DropdownProps {
    /**드롭다운의 선택 옵션을 입력해주세요. 배열을 받습니다. */
    options: string[];
    /**드롭다운의 너비를 지정해주세요. "100px", "50vw"와 같이 단위를 포함한 string으로 입력해야합니다.  */
    width: string;
    /**드롭다운의 활성화 여부를 선택해주세요. */
    disabled: boolean;
    /**드롭다운이 다수의 선택지를 가질 수 있는지 여부를 선택해주세요. */
    multiSelect: boolean;
    /**선택 값이 변경되었을 때 값을 이용해 수행할 로직을 지정해주세요. */
    onChange: (e: any) => any;
}

const Dropdown = ({ options, width, disabled, multiSelect, onChange }: DropdownProps) => {
    const [selected, setSelected] = useState<string>("");
    const [multiSelected, setMultiSelected] = useState<string[]>([]);
    const [multiOptions, setMultiOptions] = useState<string[]>(options);
    const [toggled, setToggled] = useState<boolean>(false);

    const onClick = () => disabled ? null : setToggled(prev => !prev);
    const angle = disabled ? "xmark" : toggled ? "angleLeft" : "angleDown";
    const angleForMultiSelection = disabled ? "xmark" : toggled ? "angleDown" : "angleRight";
    const placeHolder = () => disabled ? <p style={{ color: BaseStyles.Color.Black1 }}>Disabled</p> : selected === "" ? <p style={{ color: BaseStyles.Color.Black1 }}>Select option...</p> : selected;
    const placeHolderForMultiSelection = () => multiSelected.length === 0 ? "Select options..." : multiSelected.map((item: string, index: number): JSX.Element => {
        return <div css={multiOptionStyle()} key={index}>
            {item}
            <button onClick={() => {
                setMultiSelected(prev => prev.filter(x => x !== item))
                setMultiOptions(prev => [...prev, item])
            }} style={{ opacity: 0.5 }}>
                <Icon type="xmark" scale={0.8} />
            </button>
        </div>
    })

    useEffect(() => {
        !multiSelect ? onChange(selected) : onChange(multiSelected)
        console.log(multiOptions)
    }, [selected, multiSelected])

    if (!multiSelect) {
        return (
            <div className='wrapper'>
                <div css={style({ width })}>
                    {placeHolder()}
                    <button css={xmarkStyle} onClick={onClick}>
                        <Icon type={angle} scale={1.5} />
                    </button>
                </div>
                <div css={optionStyle({ width, toggled })}>
                    {options && options.map((item: string, index: number): JSX.Element => {
                        return <p onClick={() => {
                            setSelected(item)
                            onClick()
                        }} key={index}>{item}</p>
                    })}
                </div>
            </div>
        )
    } else {
        return (
            <div className='wrapper'>
                <div css={multiSelectorStyle({ width })} style={{ justifyContent: "flex-start" }}>
                    <button css={xmarkStyle} onClick={onClick}>
                        <Icon type={angleForMultiSelection} scale={1.5} />
                    </button>
                    <MarginBox marginLeft='0.5rem' />
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                        {placeHolderForMultiSelection()}
                    </div>
                </div>
                <div css={optionStyle({ width, toggled, multiOptions })}>
                    {multiOptions && multiOptions.map((item: string, index: number): JSX.Element => {
                        return <p onClick={() => {
                            setMultiSelected(prev => [...prev, item])
                            setMultiOptions(prev => prev.filter(x => x !== item))
                        }} key={index}>{item}</p>
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

const optionStyle = ({ width, toggled, multiOptions }: { width: string, toggled: boolean, multiOptions?: string[] }) =>  css`
box-shadow: ${BaseStyles.Shadow.BottomDefault};
transition-duration: 0.5s;
border: none;
width: ${width};
max-height: 100px;
overflow-x: hidden;
overflow-y: scroll;
padding: ${multiOptions?.length === 0 ? "0rem 1.5rem" : "0.5rem 1.5rem"};
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
::-webkit-scrollbar-track {
    background-color: none;
  }
  ::-webkit-scrollbar {
    width: 6px;               /* width of the entire scrollbar */
  }
  ::-webkit-scrollbar-thumb {
    background-color: lightgray;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: none;  /* creates padding around scroll thumb */
  }
`

const style = ({ width }: { width: string}) => css`
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

const multiSelectorStyle = ({ width }: { width: string}) => css`
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

export default Dropdown;