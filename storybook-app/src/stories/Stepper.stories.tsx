import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { waitFor, userEvent, within } from '@storybook/testing-library';
import Stepper from '../components/Stepper/index';

export default {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    componentSubtitle: "Stepper 컴포넌트입니다."
  }
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) =>     <Stepper {...args}>
<Stepper.Value />
<Stepper.UpButton />
<Stepper.DownButton />
</Stepper>;

const nextfc = (value: string) => console.log(value);

export const Default = Template.bind({});
Default.args = { next: nextfc, width: "200px", defaultValue: 2001 };

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