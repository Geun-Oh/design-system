import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge from "../components/Badge";

export default {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        componentSubtitle: "특정 상태를 나타낼 때 사용되는 뱃지입니다."
    }
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Access = Template.bind({});
Access.args = { innerText: "Badge Innertext", state: "Access", type: "default" };

export const Warning = Template.bind({});
Warning.args = { innerText: "Warning Badge Innertext", state: "Warning", type: "default" };

export const Error = Template.bind({});
Error.args = { innerText: "Error Badge Innertext", state: "Error", type: "default" };

export const New = Template.bind({});
New.args = { innerText: "New Badge Innertext", state: "New", type: "default" };

export const Wait = Template.bind({});
Wait.args = { innerText: "Wait Badge Innertext", state: "Wait", type: "default" };

export const TextInnerAccess = Template.bind({});
TextInnerAccess.args = { innerText: "Badge Innertext", state: "Access", type: "textInner" };

export const TextInnerWarning = Template.bind({});
TextInnerWarning.args = { innerText: "Warning Badge Innertext", state: "Warning", type: "textInner" };

export const TextInnerError = Template.bind({});
TextInnerError.args = { innerText: "Error Badge Innertext", state: "Error", type: "textInner" };

export const TextInnerNew = Template.bind({});
TextInnerNew.args = { innerText: "New Badge Innertext", state: "New", type: "textInner" };

export const TextInnerWait = Template.bind({});
TextInnerWait.args = { innerText: "Wait Badge Innertext", state: "Wait", type: "textInner" };

export const TextOverAccess = Template.bind({});
TextOverAccess.args = { innerText: "Badge Innertext", state: "Access", type: "textOver" };

export const TextOverWarning = Template.bind({});
TextOverWarning.args = { innerText: "Warning Badge Innertext", state: "Warning", type: "textOver" };

export const TextOverError = Template.bind({});
TextOverError.args = { innerText: "Error Badge Innertext", state: "Error", type: "textOver" };

export const TextOverNew = Template.bind({});
TextOverNew.args = { innerText: "New Badge Innertext", state: "New", type: "textOver" };

export const TextOverWait = Template.bind({});
TextOverWait.args = { innerText: "Wait Badge Innertext", state: "Wait", type: "textOver" };