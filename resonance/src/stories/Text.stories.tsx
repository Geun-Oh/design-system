import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from '../components/Text';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    componentSubtitle: "텍스트를 생성할 수 있습니다."
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = { innerText: "텍스트 테스트 컴포넌트입니다." };
