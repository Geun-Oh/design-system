import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from "./Card";

export default {
    title: 'Components/Card',
    component: Card,
    parameters: {
        componentSubtitle: "기본적인 카드의 단위입니다."
    }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = { title: "Card Example", detail: "Example of a card's description. Stick to one or two senteces.", image: false };

export const WithIcon = Template.bind({});
WithIcon.args = { title: "Card Example", detail: "Example of a card's description. Stick to one or two senteces.", icon: "chat", image: false };

export const WithHead = Template.bind({});
WithHead.args = { head: "Beta", title: "Card Example", detail: "Example of a card's description. Stick to one or two senteces.", image: false };

export const WithHeadIcon = Template.bind({});
WithHeadIcon.args = { head: "Beta", title: "Card Example", detail: "Example of a card's description. Stick to one or two senteces.", icon: "chat" , image: false };

export const WithHeadButton = Template.bind({});
WithHeadButton.args = { head: "Beta", title: "Card Example", detail: "Example of a card's description. Stick to one or two senteces.", confirmButton: true, image: false };

export const WithHeadIconButton = Template.bind({});
WithHeadIconButton.args = { head: "Beta", title: "Card Example", detail: "Example of a card's description. Stick to one or two senteces.", confirmButton: true, icon: "chat" , image: false };

export const WithImg = Template.bind({});
WithImg.args = { title: "Card Example", detail: "Example of a card's description. Stick to one or two senteces.", image: true };

export const WithHeadIconImg = Template.bind({});
WithHeadIconImg.args = { head: "Beta", title: "Card Example", detail: "Example of a card's description. Stick to one or two senteces.", icon: "chat" , image: true };

export const WithHeadIconImgButton = Template.bind({});
WithHeadIconImgButton.args = { head: "Beta", title: "Card Example", detail: "Example of a card's description. Stick to one or two senteces.", confirmButton: true, icon: "chat" , image: true };