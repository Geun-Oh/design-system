import * as stories from '@src/stories/Colorpallete.stories';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
// @ts-ignore
import context from 'jest-plugin-context'; // 요건 어케 해결하나...
import { matchers } from '@emotion/jest'

expect.extend(matchers);
const { Palette } = stories;

/**
 * Colorpallete Scenario
 * 
 * Palette rendering test
 *  > <Palette />
 *      > 
 */
test('Palette Rendered', () => {
    render(<Palette />);
})