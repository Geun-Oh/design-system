import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from "./Header";
import darkImg from "../icons/RESON&CE.png";
import lightImg from "../icons/WhiteRESON&CE.png";

export default {
    title: 'Pages/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LightMode = Template.bind({});
LightMode.args = { imgUrl: darkImg, navOptions: ["About", "More", "Reservation"] };

export const DarkMode = Template.bind({});
DarkMode.args = { imgUrl: lightImg, themeType: "darkMode", navOptions: ["About", "More", "Reservation"] };