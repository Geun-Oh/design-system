import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumb } from "./Breadcrumb";

export default {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = { params: ["Home"] };

export const HomeLayout = Template.bind({});
HomeLayout.args = { params: ["Home", "Layout", "About"] };

export const MoreThanThreeItems = Template.bind({});
MoreThanThreeItems.args = { params: ["Home", "Layout", "About", "Breadcrumb"] };