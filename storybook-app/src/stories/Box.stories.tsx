import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from '../components/Box/index';

export default {
  title: 'Components/Box',
  component: Box,
  parameters: {
    componentSubtitle: "컴포넌트들을 감싸고 Organism의 단위가 되는 박스 컴포넌트입니다."
  }
} as ComponentMeta<typeof Box>;

const DefaultBox: ComponentStory<typeof Box> = (args) => <Box {...args} />;
const CanHoverBox: ComponentStory<typeof Box.CanHover> = (args) => <Box.CanHover {...args} />;

export const Default = DefaultBox.bind({});
export const CanHover = CanHoverBox.bind({});
