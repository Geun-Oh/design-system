import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginForm } from "./LoginForm";

export default {
    title: 'Pages/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Example1 = Template.bind({});
Example1.args = { width: "500px" };