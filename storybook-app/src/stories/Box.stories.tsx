import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from './Box';

export default {
  title: 'Components/Box',
  component: Box,
  parameters: {
    componentSubtitle: "기본적인 버튼입니다."
  }
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});
