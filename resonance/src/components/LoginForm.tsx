/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';
import { BaseStyles } from "@src/styles/themes";
import Input from './Input';
import Button from '@src/components/Button/Button';
import Dropdown from './DropDown';

interface LoginFormProps {
    width: string;
}

const LoginForm = ({ width }: LoginFormProps) => {
    const initialForm = {
        id: "",
        name: "",
        password: "",
        phoneNumber: "",
        skills: [],
        introduce: "",
    }

    const [userInfoForm, setUserInfoForm] = useState<typeof initialForm>(initialForm);
    const { id, name, password, phoneNumber, skills, introduce } = userInfoForm;
    const handleChange = (e: any) => {
        setUserInfoForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div className='formWrapper' css={style(width)}>
            <div className='idInput' css={idInputStyle()}>
                <div style={{ marginBottom: "10px", fontFamily: BaseStyles.Font.FiraCode, fontSize: BaseStyles.Text.Heading3, fontWeight: BaseStyles.Text.Border0 }}>
                    ID<span style={{ color: BaseStyles.Color.Orange2 }}>*</span>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Input type="textInput" width="300px" name="id" value={id} onChange={(e) => handleChange(e)} />
                    <div style={{ marginLeft: "20px" }}>
                        <Button onClick={() => console.log("Submit!")} height="40px" innerText="Valiable?" theme="link" />
                    </div>
                </div>
            </div>
            <div className='nameInput' css={idInputStyle()}>
                <div style={{ marginBottom: "10px", fontFamily: BaseStyles.Font.FiraCode, fontSize: BaseStyles.Text.Heading3, fontWeight: BaseStyles.Text.Border0 }}>
                    Full name<span style={{ color: BaseStyles.Color.Orange2 }}>*</span>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Input type="textInput" width="300px" name="name" value={name} onChange={(e) => handleChange(e)} />
                </div>
            </div>
            <div className='passwordInput' css={idInputStyle()}>
                <div style={{ marginBottom: "10px", fontFamily: BaseStyles.Font.FiraCode, fontSize: BaseStyles.Text.Heading3, fontWeight: BaseStyles.Text.Border0 }}>
                    Password<span style={{ color: BaseStyles.Color.Orange2 }}>*</span>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Input type="password" width="300px" name="password" value={password} onChange={(e) => handleChange(e)} />
                </div>
            </div>
            <div className='emailInput' css={idInputStyle()}>
                <div style={{ marginBottom: "10px", fontFamily: BaseStyles.Font.FiraCode, fontSize: BaseStyles.Text.Heading3, fontWeight: BaseStyles.Text.Border0 }}>
                    E-mail<span style={{ color: BaseStyles.Color.Orange2 }}>*</span>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Input type="textInput" width="300px" name="id" value={id} onChange={(e) => handleChange(e)} />
                    <div style={{ marginLeft: "20px" }}>
                        <Button onClick={() => console.log("Submit!")} height="40px" innerText="Submit" theme="link" />
                    </div>
                </div>
            </div>
            <div className='phoneNumberInput' css={idInputStyle()}>
                <div style={{ marginBottom: "10px", fontFamily: BaseStyles.Font.FiraCode, fontSize: BaseStyles.Text.Heading3, fontWeight: BaseStyles.Text.Border0 }}>
                    Phone number
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Input type="phoneNumber" width="300px" name="phoneNumber" value={phoneNumber} onChange={(e) => handleChange(e)} />
                </div>
            </div>
            <div style={{ width: "100%", height: "0.3px", background: BaseStyles.Color.Black2, marginBottom: "40px" }}></div>
            <div className='availableInput' css={idInputStyle()}>
                <div style={{ marginBottom: "10px", fontFamily: BaseStyles.Font.FiraCode, fontSize: BaseStyles.Text.Heading3, fontWeight: BaseStyles.Text.Border0 }}>
                    Available Skills
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Dropdown options={["React.js", "Javascript", "Typescript", "Node.js", "Vue.js", "AWS", "Angular.js", "Redux.js"]} width="300px" multiSelect={true} onChange={(e) => console.log(e)} />
                </div>
            </div>
            <div className='textAreaInput' css={idInputStyle()}>
                <div style={{ marginBottom: "10px", fontFamily: BaseStyles.Font.FiraCode, fontSize: BaseStyles.Text.Heading3, fontWeight: BaseStyles.Text.Border0 }}>
                    Introduce yourself
                </div>
                <Input type="textAreaInput" width="100%" name="Introduce" value={introduce} onChange={(e) => handleChange(e)} />
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <Button onClick={() => console.log(userInfoForm)} height="40px" width="60%" innerText="Submit" theme="delete" />
            </div>
        </div>
    )
}

const style = (width: string) => css`
    width: ${width};
    box-shadow: ${BaseStyles.Shadow.BottomDefault};
    transition-duration: 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 3rem 3rem;
    border-radius: 1rem;
`

const idInputStyle = () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 40px;
    width: 90%;
`

export default LoginForm;