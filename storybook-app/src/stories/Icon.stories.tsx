import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from "./Icon";

export default {
    title: 'Components/Icon',
    component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const angleDown = Template.bind({});
angleDown.args = { type: "angleDown" };

export const home = Template.bind({});
home.args = { type: "home" };

export const file = Template.bind({});
file.args = { type: "file" };

export const chart = Template.bind({});
chart.args = { type: "chart" };

export const chat = Template.bind({});
chat.args = { type: "chat" };

export const checkout = Template.bind({});
checkout.args = { type: "checkout" };