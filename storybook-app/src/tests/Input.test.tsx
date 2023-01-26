import React from 'react';
import * as stories from '../stories/Input.stories';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import context from 'jest-plugin-context';
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