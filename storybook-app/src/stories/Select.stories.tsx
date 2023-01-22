import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NewSelect from "../components/Select/Select";

export default {
    title: 'Pages/NewSelect',
    component: NewSelect,
    parameters: {
        componentSubtitle: "새로운 셀렉트 박스입니다."
    }
} as ComponentMeta<typeof NewSelect>;

const Template: ComponentStory<typeof NewSelect> = () => <NewSelect />;

export const Example1 = Template.bind({});