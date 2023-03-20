import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from "../components/Checkbox";

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        componentSubmit: "기본 체크박스입니다."
    }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = { fill: "#000000" };