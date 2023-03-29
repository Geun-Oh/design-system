import * as stories from '../stories/Stepper.stories';
import { act, render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
// @ts-ignore
import context from 'jest-plugin-context'; // 요건 어케 해결하나...
import { matchers } from '@emotion/jest'
import { userEvent } from '@storybook/testing-library';

// @emotion/jest 내부의 matcher를 연동해주어 emotion으로 작성된 스타일들을 테스트할 수 있도록 하자.
expect.extend(matchers);

const { Default } = composeStories(stories);

/**
 * Stepper Scenario
 * 
 * Stepper operating test
 *  > <Stepper />
 *      > Stepper should be rendered
 *      > InitialValue should be 2001 
 *  > When UpButton clicked
 *      > Value should be 2002
 *  > When DownButton clicked
 *      > Value should be 2000
 */
describe('Stepper oprating test', () => {
    context('<Stepper />', () => {
        it('Stepper should be rendered', async () => {
            render(<Default />);
            const Stepper = await screen.findByTestId('Stepper-Default-Wrapper');
            expect(Stepper).toBeInTheDocument();
        });

        it('InitialValue should be 2001', async () => {
            render(<Default />);
            const StepperValue = await screen.findByDisplayValue(2001);
            expect(StepperValue).toBeInTheDocument();
        });
    });

    context('When UpButton clicked', () => {
        it('Value should be 2002', async () => {
            render(<Default />);
            const UpButton = await screen.findByTestId('Stepper-Default-UpButton');
            const Value = await screen.findByTestId('Stepper-Default-Value');
            
            // Click event triggered      
            await userEvent.click(UpButton); 

            await waitFor(() => {
                expect(Value).toHaveValue(2002);
            })
        });
    });

    context('When DownButton clicked', () => {
        it('Value should be 2000', async () => {
            render(<Default />);

            const DownButton = await screen.findByTestId('Stepper-Default-DownButton');
            const Value = await screen.findByTestId('Stepper-Default-Value');

            // Click event triggered
            await userEvent.click(DownButton);

            await waitFor(() => {
                expect(Value).toHaveValue(2000);
            })
        });
    });
});