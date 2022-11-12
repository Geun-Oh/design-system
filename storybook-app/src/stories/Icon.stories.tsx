import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from "./Icon";

export default {
    title: 'Components/Icon',
    component: Icon,
    parameters: {
        componentSubtitle: "아이콘입니다. 종류를 선택해 사용해주세요."
    }
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const angleDown = Template.bind({});
angleDown.args = { type: "angleDown" };

export const xmark = Template.bind({});
xmark.args = { type: "xmark" };

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

export const hamburger = Template.bind({});
hamburger.args = { type: "hamburger" };

export const kebab = Template.bind({});
kebab.args = { type: "kebab" };

export const meetball = Template.bind({});
meetball.args = { type: "meetball" };

export const bento = Template.bind({});
bento.args = { type: "bento" };

export const donorRight = Template.bind({});
donorRight.args = { type: "donorRight" };

export const donorLeft = Template.bind({});
donorLeft.args = { type: "donorLeft" };