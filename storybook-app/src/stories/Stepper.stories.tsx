import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
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