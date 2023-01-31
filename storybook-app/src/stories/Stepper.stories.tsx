import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { waitFor, userEvent, within } from '@storybook/testing-library';
import StepperComponent from '../components/Stepper/Stepper';

export default {
  title: 'Components/Stepper',
  component: StepperComponent,
  parameters: {
    componentSubtitle: "Stepper 컴포넌트입니다."
  }
} as ComponentMeta<typeof StepperComponent>;

const Template: ComponentStory<typeof StepperComponent> = () => <StepperComponent />;

export const Default = Template.bind({});

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