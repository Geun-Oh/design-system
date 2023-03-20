import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toggle from "../components/Toggle";

export default {
    title: 'Components/Toggle',
    component: Toggle,
    parameters: {
        componentSubtitle: "토글이 가능한 오브젝트 입니다."
    }
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Basic = Template.bind({});
Basic.args = { type: "Basic" };

export const DenyAccept = Template.bind({});
DenyAccept.args = { type: "DenyAccept", toggled: false };