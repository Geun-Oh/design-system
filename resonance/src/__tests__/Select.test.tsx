import React from 'react';
import * as stories from '../stories/Select.stories';
import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';
// @ts-ignore
import context from 'jest-plugin-context';
import { userEvent } from '@storybook/testing-library';

const { Default } = composeStories(stories);

/**
 * Select Scenario
 * 
 * Default operating test
 *  > <Default />
 *      > Default should be rendered
 *      > Options should not be rendered
 *  > When SelectedArea clicked
 *      > Options should be rendered
 *  > When Option 1 clicked
 *      > SelectedArea value should be Option 1
 */

describe('Default operating test', () => {
    it('<Default />', async () => {
        render(<Default />);
        const SelectedArea = await screen.findByTestId('Select-Default-SelectedArea');
        expect(SelectedArea).toBeInTheDocument();
    })
})