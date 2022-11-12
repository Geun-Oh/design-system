import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from '../components/Box';

export default {
  title: 'Components/Box',
  component: Box,
  parameters: {
    componentSubtitle: "컴포넌트들을 감싸고 Organism의 단위가 되는 박스 컴포넌트입니다."
  }
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});
