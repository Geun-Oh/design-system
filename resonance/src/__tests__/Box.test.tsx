import * as stories from '../stories/Box.stories';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
// @ts-ignore
import context from 'jest-plugin-context'; // 요건 어케 해결하나...
import { matchers } from '@emotion/jest'

// @emotion/jest 내부의 matcher를 연동해주어 emotion으로 작성된 스타일들을 테스트할 수 있도록 하자.
expect.extend(matchers)

const { Default, CanHover } = composeStories(stories);

describe('Box operating test', () => {
    it('<Box />', async () => {
        render(<Default />);
        const Box = await screen.findByTestId('DefaultBox');
        expect(Box).toBeInTheDocument();
    });

    it('<CanHover />', async () => {
        render(<CanHover />);
        const Box = await screen.findByTestId('BoxCanHover');
        expect(Box).toBeInTheDocument();
    });

    context('When CanHoverBox hovered', () => {
        it('border color should change', async () => {
            render(<CanHover hoverColor='#000000' />);
            const Box = await screen.findByTestId('BoxCanHover');
            // hover를 테스트하는 경우 event를 발생시키켜 확인하는 방법을 찾지 못했다. 
            // 따라서 toHaveStyleRule 메서드를 이용하여 내부 style이 잘 작성되어 있는지 확인하는 방식을 사용하였다.
            expect(Box).toHaveStyleRule("border", "0.3px solid #DDDDDD");
            expect(Box).toHaveStyleRule("border", "1px solid #000000", { target: ":hover" });
        });
    });
});