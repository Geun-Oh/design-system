/** @jsxImportSource @emotion/react */
import React from 'react';
import { BaseStyles } from '../../../themes';
import Text from '../../Text';
import Box from '../../Box/index';
import MarginBox from '../../Marginbox';

const SelectedArea = ({ innerText }) => {
    return (
        <Box.CanHover hoverColor={BaseStyles.Color.Beige2} width='300px' backgroundColor="white" height='1rem'>
            <MarginBox marginTop='0.5rem' />
            <Text innerText={innerText} />
        </Box.CanHover>
    )
}

export default SelectedArea;