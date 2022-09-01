import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Statusbar } from "./Statusbar";

export default {
    title: 'Components/Statusbar',
    component: Statusbar,
    parameters: {
        componentSubtitle: "다양한 곳에 활용할 수 있는 기본적인 스테이터스 바입니다."
    }
} as ComponentMeta<typeof Statusbar>;

const Template: ComponentStory<typeof Statusbar> = (args) => <Statusbar {...args} />;

export const Default = Template.bind({});
Default.args = { innerText: "Statusbar InnerText" };

export const ExtraAction = Template.bind({});
ExtraAction.args = { innerText: "InnerText", extraAction: "Action", src: "https://velog.io/@kandy1002" };

export const Loading = Template.bind({});
Loading.args = { innerText: "InnerText", width: "300px", loading: true };

export const ExtraActionWithLoading = Template.bind({});
ExtraActionWithLoading.args = { innerText: "InnerText", extraAction: "Action", src: "https://github.com/Geun-Oh", loading: true };
