import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Breadcrumb from "../components/Breadcrumb";

export default {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
    parameters: {
        componentSubtitle: "현제 페이지를 표시해주는 브레드크럼입니다."
    }
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = { params: ["Home"] };

export const HomeLayout = Template.bind({});
HomeLayout.args = { params: ["Home", "Layout", "About"] };

export const MoreThanThreeItems = Template.bind({});
MoreThanThreeItems.args = { params: ["Home", "Layout", "About", "Breadcrumb"] };