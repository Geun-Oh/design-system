import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from "../components/Input";

export default {
    title: 'Components/Input',
    component: Input,
    parameters: {
        componentSubtitle: "인풋 플레이스입니다."
    }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = { type: "textInput", width: "300px", onChange: (v) => console.log(v.value) };

export const Date = Template.bind({});
Date.args = { type: "date", width: "300px", onChange: (v) => console.log(v.value) };

export const PhoneNumber = Template.bind({});
PhoneNumber.args = { type: "phoneNumber", width: "300px", onChange: (v) => console.log(v.value) };

export const Password = Template.bind({});
Password.args = { type: "password", width: "300px", onChange: (v) => console.log(v.value) };

export const SearchField = Template.bind({});
SearchField.args = { type: "searchField", width: "300px", onChange: (v) => console.log(v.value) };

export const InputWithSteper = Template.bind({});
InputWithSteper.args = { type: "inputWithSteper", width: "300px", onChange: (v) => console.log(v.value) };

export const TextAreaInput = Template.bind({});
TextAreaInput.args = { type: "textAreaInput", width: "300px", onChange: (v) => console.log(v.value) };