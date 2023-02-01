import React from 'react';
import Text from '../Text';
import Box from '../Box/index'
import Indicate from './hooks/Indicate';
import BadgeWrapper from './hooks/BadgeWrapper';
import Statusbar from '../Statusbar';

export const BadgeExample = () => {
    return (
        <>
            <BadgeWrapper>
                <Text innerText='Badge Innertext' />
            </BadgeWrapper>
            <BadgeWrapper>
                <Statusbar extraAction='Naver' src='https://www.naver.com/' />
            </BadgeWrapper>
        </>
    )
}

export default BadgeExample;