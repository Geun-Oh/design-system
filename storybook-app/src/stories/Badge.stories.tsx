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