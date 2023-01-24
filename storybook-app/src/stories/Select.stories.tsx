import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { waitFor, userEvent, within } from '@storybook/testing-library';
import NewSelect from "../components/Select/Select";

export default {
    title: 'Pages/NewSelect',
    component: NewSelect,
    parameters: {
        componentSubtitle: "새로운 셀렉트 박스입니다."
    }
} as ComponentMeta<typeof NewSelect>;

const Template: ComponentStory<typeof NewSelect> = () => <NewSelect />;

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
    // 직접 screen API를 쓸 수도 있지만 스토리북에서는 within(canvasElement) 로 캔버스를 가져올 것을 권장한다.
    const canvas = within(canvasElement);
    await waitFor (async () => {
        expect(await canvas.findByText('defaultValue')).toBeInTheDocument();
    });

    const getTask = await canvas.findByText('defaultValue');
    userEvent.click(getTask);

    await waitFor (async () => {
        expect(await canvas.findByText('Option 1')).toBeInTheDocument();
    });
}
