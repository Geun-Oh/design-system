import * as stories from '@src/stories/Colorpallete.stories';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
// @ts-ignore
import context from 'jest-plugin-context'; // 요건 어케 해결하나...
import { matchers } from '@emotion/jest'
import { BaseStyles } from '@src/styles/themes';

expect.extend(matchers);
const { Palette } = composeStories(stories);

/**
 * Colorpallete Scenario
 * 
 * Palette operating test
 *  > <Palette />
 *      > Palette should be rendered
 *      > Numbers of Palette must be the same as Colors in BaseStyles
 *      > The color of the Palette and the color inside the BaseStyles must be the same
 */
describe('Palette rendering test', () => {
    context('<Palette />', () => {
        it('Palette should be rendered', async () => {
            render(<Palette />);
            const DefaultBox = await screen.findAllByTestId("DefaultBox");
            expect(DefaultBox[0]).toBeInTheDocument();
        })
        it('Numbers of Palette should be same as Colors in BaseStyles', async () => {
            render(<Palette />);
            const AllDefaultBoxes = await screen.findAllByTestId("DefaultBox");
            expect(AllDefaultBoxes.length).toEqual(Object.keys(BaseStyles.Color).length);
        })
        it('The color of the Palette and the color inside the BaseStyles must be the same', async () => {
            render(<Palette />);
            const AllDefaultBoxes = await screen.findAllByTestId("DefaultBox");
            AllDefaultBoxes.forEach((box, index) => {
                expect(box).toHaveStyle(`background-color: ${BaseStyles.Color[Object.keys(BaseStyles.Color)[index]]};`)
            })
        })
    })
})