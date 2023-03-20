import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DropDown from "../components/DropDown";

export default {
    title: 'Components/DropDown',
    component: DropDown,
    parameters: {
        componentSubtitle: "드롭다운 메뉴를 통해 유저에게 선택권을 제공하세요!"
    }
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

export const Default = Template.bind({});
Default.args = { options: ["option1", "option2", "option3"], disabled: false, width: "300px", multiSelect: false, onChange: (e) => console.log(e)  };

export const Disabled = Template.bind({});
Disabled.args = { options: ["option1", "option2", "option3"], disabled: true, width: "300px", multiSelect: false, onChange: (e) => console.log(e)  };

export const MultiSelector = Template.bind({});
MultiSelector.args = { options: ["React.js", "Typescript", "Storybook", "Node.js", "Jest", "Jira"], disabled: false, width: "300px", multiSelect: true, onChange: (e) => console.log(e) };