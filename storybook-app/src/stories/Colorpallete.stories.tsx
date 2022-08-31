import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Colorpallete } from "./Colorpallete";

export default {
    title: 'Components/ColorPallete',
    component: Colorpallete,
} as ComponentMeta<typeof Colorpallete>;

const Template: ComponentStory<typeof Colorpallete> = (args) => <Colorpallete />;
export const Palette = Template.bind({});