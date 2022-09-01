import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from "./Input";

export default {
    title: 'Components/Input',
    component: Input,
    parameters: {
        componentSubtitle: "인풋 플레이스입니다."
    }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = { type: "textInput", width: "300px" };

export const Date = Template.bind({});
Date.args = { type: "date", width: "300px" };

export const PhoneNumber = Template.bind({});
PhoneNumber.args = { type: "phoneNumber", width: "300px" };

export const Password = Template.bind({});
Password.args = { type: "password", width: "300px" };

export const SearchField = Template.bind({});
SearchField.args = { type: "searchField", width: "300px" };

export const InputWithSteper = Template.bind({});
InputWithSteper.args = { type: "inputWithSteper", width: "300px" };

export const TextAreaInput = Template.bind({});
TextAreaInput.args = { type: "textAreaInput", width: "300px" };