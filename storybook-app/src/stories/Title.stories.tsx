import { Meta, Story } from '@storybook/react';
import Title, { TitleProps } from './Title';

export default {
    title: "Components/Title",
    component: Title,
} as Meta; // Meta 타입으로 컴포넌트의 정보를 작성하고 default export를 해주면 스토리북에서 해당 정보를 파싱하여 컴포넌트를 생성한다.

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Basic = Template.bind({});