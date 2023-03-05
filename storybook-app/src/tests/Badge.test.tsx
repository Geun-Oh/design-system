import * as stories from '../stories/Badge.stories';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
// @ts-ignore
import context from 'jest-plugin-context'; // 요건 어케 해결하나...
import { matchers } from '@emotion/jest'

// @emotion/jest 내부의 matcher를 연동해주어 emotion으로 작성된 스타일들을 테스트할 수 있도록 하자.
expect.extend(matchers);

const { Access, Warning, Error, New, Wait, TextInnerAccess, TextOverAccess } = composeStories(stories);

describe('Badge operating test', () => {
    test('Default badges', async () => {
        render(<Access />);
        expect(await screen.findByText('Badge Innertext')).toBeInTheDocument();
        render(<Warning />);
        expect(await screen.findByText('Warning Badge Innertext')).toBeInTheDocument();
        render(<Error />);
        expect(await screen.findByText('Error Badge Innertext')).toBeInTheDocument();
        render(<New />);
        expect(await screen.findByText('New Badge Innertext')).toBeInTheDocument();
        render(<Wait />);
        expect(await screen.findByText('Wait Badge Innertext')).toBeInTheDocument();
    });

    test('Badges with Innertext', async () => {
        render(<TextInnerAccess />);
        expect(await screen.findByText('Badge Innertext')).toBeInTheDocument();
    });

    test('Badges with Overtext', async () => {
        render(<TextOverAccess />);
        expect(await screen.findByText('Badge Innertext')).toBeInTheDocument();
    })
});