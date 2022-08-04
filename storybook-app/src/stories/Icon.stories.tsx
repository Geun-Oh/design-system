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