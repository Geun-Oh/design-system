import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { waitFor, userEvent, within } from '@storybook/testing-library';
import Input from "../components/Input/index";

export default {
    title: 'Components/Input',
    component: Input.Text,
    parameters: {
        componentSubtitle: "인풋 플레이스입니다."
    }
} as ComponentMeta<typeof Input.Text>;

const TextTemplate: ComponentStory<typeof Input.Text> = (args) => <Input.Text {...args} />;
const DateTemplate: ComponentStory<typeof Input.Date> = (args) => <Input.Date {...args} />;
const PasswordTemplate: ComponentStory<typeof Input.Password> = (args) => <Input.Password {...args} />;
const PhoneNumberTemplate: ComponentStory<typeof Input.PhoneNumber> = (args) => <Input.PhoneNumber {...args} />;
const SearchFieldTemplate: ComponentStory<typeof Input.SearchField> = (args) => <Input.SearchField {...args} />;
const StepperTemplate: ComponentStory<typeof Input.Stepper> = (args) => <Input.Stepper {...args} />;
const TextareaTemplate: ComponentStory<typeof Input.Textarea> = (args) => <Input.Textarea {...args} />; 


export const Text = TextTemplate.bind({});
export const Date = DateTemplate.bind({});
export const Password = PasswordTemplate.bind({});
export const PhoneNumber = PhoneNumberTemplate.bind({});
export const SearchField = SearchFieldTemplate.bind({});
export const Stepper = StepperTemplate.bind({});
export const Textarea = TextareaTemplate.bind({});

Stepper.args = { onChange: console.log };
// TextInput.args = { type: "textInput", width: "300px", onChange: (v) => console.log(v.value) };

// export const Date = Template.bind({});
// Date.args = { type: "date", width: "300px", onChange: (v) => console.log(v.value) };

// export const PhoneNumber = Template.bind({});
// PhoneNumber.args = { type: "phoneNumber", width: "300px", onChange: (v) => console.log(v.value) };

// export const Password = Template.bind({});
// Password.args = { type: "password", width: "300px", onChange: (v) => console.log(v.value) };

// export const SearchField = Template.bind({});
// SearchField.args = { type: "searchField", width: "300px", onChange: (v) => console.log(v.value) };

// export const InputWithSteper = Template.bind({});
// InputWithSteper.args = { type: "inputWithSteper", width: "300px", onChange: (v) => console.log(v.value) };

Stepper.play = async({ canvasElement }) => {
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

// export const TextAreaInput = Template.bind({});
// TextAreaInput.args = { type: "textAreaInput", width: "300px", onChange: (v) => console.log(v.value) };