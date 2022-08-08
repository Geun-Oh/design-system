import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from "./Dropdown";

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = { options: ["option1", "option2", "option3"], width: 300 };

export const Disabled = Template.bind({});
Disabled.args = { options: ["option1", "option2", "option3"], disabled: true, width: 300 };