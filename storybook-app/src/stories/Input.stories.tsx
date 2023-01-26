import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { waitFor, userEvent, within } from '@storybook/testing-library';
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

InputWithSteper.play = async({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitFor(async () => {
        expect(await canvas.findByDisplayValue('0')).toBeInTheDocument();
    });

    const getUpTask = await canvas.findByTestId('upSteper');
    userEvent.click(getUpTask);

    await waitFor(async () => {
        expect(await canvas.findByDisplayValue('1')).toBeInTheDocument();
    });

    const getDownTask = await canvas.findByTestId('downSteper');
    userEvent.click(getDownTask);

    await waitFor(async () => {
        expect(await canvas.findByDisplayValue('0')).toBeInTheDocument();
    });
};

export const TextAreaInput = Template.bind({});
TextAreaInput.args = { type: "textAreaInput", width: "300px", onChange: (v) => console.log(v.value) };