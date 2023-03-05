import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { waitFor, userEvent, within } from '@storybook/testing-library';
import Example from '../components/Badge/Example';

const { BadgeExample, AccessExample } = Example;

export default {
  title: 'Components/Example',
  component: BadgeExample,
  parameters: {
    componentSubtitle: "컴포넌트들을 감싸고 Organism의 단위가 되는 박스 컴포넌트입니다."
  }
} as ComponentMeta<typeof BadgeExample>;

const DefaultExample: ComponentStory<typeof BadgeExample> = () => <BadgeExample />;
export const Access: ComponentStory<typeof AccessExample> = () => <AccessExample />;

export const Default = DefaultExample.bind({});

Access.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await waitFor(async () => {
    const a = await canvas.findByRole('link');
    expect(await canvas.findByTestId('Badge-Wrapper')).toBeInTheDocument();
    expect(a!).toHaveAttribute("href", "https://www.naver.com/");
    // expect((await canvas.findByTestId('Badge-Access-Wrapper')).closest("a")).toBeInTheDocument();
  });
};