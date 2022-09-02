import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from "./Sidebar";

export default {
    title: 'Components/Sidebar',
    component: Sidebar,
    parameters: {
        componentSubtitle: "사이드 네비게이션 바입니다."
    }
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});