import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge } from "./Badge";

export default {
    title: 'Components/Badge',
    component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Access = Template.bind({});
Access.args = { innerText: "Badge Innertext", state: "Access", size: "Large" };

export const Warning = Template.bind({});
Warning.args = { innerText: "Warning Badge Innertext", state: "Warning", size: "Large" };

export const Error = Template.bind({});
Error.args = { innerText: "Error Badge Innertext", state: "Error", size: "Large" };

export const New = Template.bind({});
New.args = { innerText: "New Badge Innertext", state: "New", size: "Large" };

export const Wait = Template.bind({});
Wait.args = { innerText: "Wait Badge Innertext", state: "Wait", size: "Large" };