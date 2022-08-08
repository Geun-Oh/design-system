import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggle } from "./Toggle";

export default {
    title: 'Components/Toggle',
    component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Basic = Template.bind({});
Basic.args = { type: "Basic" };

export const DenyAccept = Template.bind({});
DenyAccept.args = { type: "DenyAccept", toggled: false };