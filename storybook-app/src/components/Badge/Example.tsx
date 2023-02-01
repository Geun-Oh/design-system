import React from 'react';
import Text from '../Text';
import Box from '../Box/index'
import Indicate from './hooks/Indicate';

export const BadgeExample = () => {
    return (
        <Box.Inline backgroundColor='white'>
            <Text innerText='Badge Innertext'></Text>
            <Indicate color="Standard" innerText='1' />
        </Box.Inline>
    )
}

export default BadgeExample;