import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from "../components/Dropdown";

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    parameters: {
        componentSubtitle: "드롭다운 메뉴를 통해 유저에게 선택권을 제공하세요!"
    }
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = { options: ["option1", "option2", "option3"], disabled: false, width: "300px", multiSelect: false, onChange: (e) => console.log(e)  };

export const Disabled = Template.bind({});
Disabled.args = { options: ["option1", "option2", "option3"], disabled: true, width: "300px", multiSelect: false, onChange: (e) => console.log(e)  };

export const MultiSelector = Template.bind({});
MultiSelector.args = { options: ["React.js", "Typescript", "Storybook", "Node.js", "Jest", "Jira"], disabled: false, width: "300px", multiSelect: true, onChange: (e) => console.log(e) };