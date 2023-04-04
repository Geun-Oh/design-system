import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '@src/components/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    componentSubtitle: "기본적인 버튼입니다."
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { innerText: "Default", theme: "default", onClick: () => console.log('Default clicked') };

export const Link = Template.bind({});
Link.args = { innerText: "Link", theme: "link", onClick: () => console.log('Link clicked') };

export const Warning = Template.bind({});
Warning.args = { innerText: "Warning", theme: "warning", onClick: () => console.log('Warning clicked') };

export const Delete = Template.bind({});
Delete.args = { innerText: "Delete", theme: "delete", onClick: () => console.log('Delete clicked') };

export const Disabled = Template.bind({});
Disabled.args = { innerText: "Disabled", theme: "disabled", onClick: () => console.log('Disabled clicked') };

export const WithIcon = Template.bind({});
WithIcon.args = { innerText: "WithIcon", theme: "default", iconType: "bento", onClick: () => console.log('With Icon clicked')  };

export const Submit = Template.bind({});
Submit.args = { innerText: "Submit", theme: "submit", onClick: () => console.log('Submit clicked')  };

export const FormSubmit = Template.bind({});
FormSubmit.args = { innerText: "Submit your form", theme: "formSubmit", onClick: () => console.log('Form Submit clicked')  };