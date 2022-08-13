import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { label: "Default", theme: "default" };

export const Link = Template.bind({});
Link.args = { label: "Link", theme: "link" };

export const Warning = Template.bind({});
Warning.args = { label: "Warning", theme: "warning" };

export const Delete = Template.bind({});
Delete.args = { label: "Delete", theme: "delete" };

export const Disabled = Template.bind({});
Disabled.args = { label: "Disabled", theme: "disabled" };

export const WithIcon = Template.bind({});
WithIcon.args = { label: "WithIcon", theme: "default", iconType: "bento" };

export const Submit = Template.bind({});
Submit.args = { label: "Submit", theme: "submit" };

export const FormSubmit = Template.bind({});
FormSubmit.args = { label: "Submit your form", theme: "formSubmit" };