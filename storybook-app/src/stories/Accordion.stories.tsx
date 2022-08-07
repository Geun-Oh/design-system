import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from "./Accordion";

export default {
    title: 'Components/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = { innerText: "Accordion InnerText" };

export const ExtraAction = Template.bind({});
ExtraAction.args = { innerText: "Accordion InnerText", extraAction: "Extra Action" };

export const Loading = Template.bind({});
Loading.args = { innerText: "Accordion InnerText", width: "300px", loading: true };

export const ExtraActionWithLoading = Template.bind({});
ExtraActionWithLoading.args = { innerText: "Accordion InnerText", extraAction: "Extra Action", src: "https://github.com/Geun-Oh", loading: true };
