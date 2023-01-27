import React from 'react';
import * as stories from '../stories/Input.stories';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
// @ts-ignore
import context from 'jest-plugin-context'; // 요건 어케 해결하나...
import userEvent from '@testing-library/user-event';

const { TextInput, InputWithSteper } = composeStories(stories);

test('TextInput component rendering test', async () => {
    render(<TextInput />);
    const textElement = await screen.findByPlaceholderText('Input Text');
    expect(textElement).toBeInTheDocument();
});

// test('Steper rendered', async () => {
//     render(<InputWithSteper />);
//     const steper = await screen.findByDisplayValue(0);
//     expect(steper).toBeInTheDocument();
// })

describe('Steper operating test', () => {
    it('<InputWithSteper />', async () => {
        render(<InputWithSteper />);
        const steper = await screen.findByDisplayValue('0');
        expect(steper).toBeInTheDocument();
    });

    context('When up steper clicked', () => {
        it('Number should be 1', async () => {
            render(<InputWithSteper />);
            const upSteper = await screen.findByTestId('upSteper');
            userEvent.click(upSteper);
            expect(await screen.findByDisplayValue('1')).toBeInTheDocument();
        });
    });

    context('When down steper clicked', () => {
        it('Number should be -1', async () => {
            render(<InputWithSteper />);
            const downSteper = await screen.findByTestId('downSteper');
            userEvent.click(downSteper);
            expect(await screen.findByDisplayValue('-1')).toBeInTheDocument();
        });
    })
})

// 참고 사이트
// https://bobbyhadz.com/blog/typescript-cannot-find-name-describe
// https://www.npmjs.com/package/jest-plugin-context
// https://testing-library.com/docs/queries/bydisplayvalue