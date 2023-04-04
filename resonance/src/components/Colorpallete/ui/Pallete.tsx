import React from 'react';
import { BaseStyles } from '@src/styles/themes';
import Box from '../../Box/index';
import Text from '../../Text';

const Pallete = ({ color, innerText }: { color: string, innerText: string }) => {
    return (
        <Box backgroundColor={color} height="60px" width='200px'>
            <Text fontSize={BaseStyles.Text.Heading3} fontWeight={BaseStyles.Text.Border3} innerText={innerText} />
        </Box>
    )
}

export default Pallete;