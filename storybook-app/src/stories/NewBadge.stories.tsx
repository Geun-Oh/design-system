import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Example from '../components/Badge/Example';

export default {
  title: 'Components/Example',
  component: Example,
  parameters: {
    componentSubtitle: "컴포넌트들을 감싸고 Organism의 단위가 되는 박스 컴포넌트입니다."
  }
} as ComponentMeta<typeof Example>;

const DefaultBox: ComponentStory<typeof Example> = () => <Example />;

export const Default = DefaultBox.bind({});