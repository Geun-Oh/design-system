import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { waitFor, userEvent, within } from '@storybook/testing-library';
import Stepper from '../components/Stepper/Stepper';

export default {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    componentSubtitle: "Stepper 컴포넌트입니다. 동적 컴포넌트 테스팅을 위해 일부 인자는 변경이 불가합니다.",
    docs: {
      description: {
        component: "***width*** - 너비를 지정해주세요.<br />***next*** - Input의 값이 변경될 때 시행할 함수를 지정합니다. 현재 console.log로 설정되어있습니다.<br />***defaultValue*** - 초기값을 설정합니다. 현재 2001로 설정되어있습니다."
      }
    }
  }
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => <Stepper {...args} />;

export const Default = Template.bind({});
Default.args = { width: "auto" };

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const Wrapper = await canvas.findByTestId('Stepper-Default-Wrapper');
  const Value = await canvas.findByTestId('Stepper-Default-Value');
  const UpButton = await canvas.findByTestId('Stepper-Default-UpButton');
  const DownButton = await canvas.findByTestId('Stepper-Default-DownButton');

  await waitFor( async () => {
    expect(Wrapper).toBeInTheDocument();
    expect(Value).toHaveValue(2001);
  });

  userEvent.click(UpButton);

  await waitFor( async () => {
    expect(Value).toHaveValue(2002);
  });

  userEvent.click(DownButton);

  await waitFor( async () => {
    expect(Value).toHaveValue(2001);
  });
}