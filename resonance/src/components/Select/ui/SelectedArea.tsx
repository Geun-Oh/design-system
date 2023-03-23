/** @jsxImportSource @emotion/react */
import React from 'react';
import { BaseStyles } from '../../../themes';
import Text from '../../Text';
import Box from '../../Box/index';
import MarginBox from '../../Marginbox';
import Flex from '../../Flex/Flex';

const SelectedArea = ({ innerText }) => {
    return (
        <div style={{ position: "relative", zIndex: 999 }}>
            <Box.CanHover hoverColor={BaseStyles.Color.Beige2} width='300px' backgroundColor="white" height='1rem'>
                <MarginBox marginTop='0.5rem' />
                <Flex flexDirection='column'>
                    <Text innerText={innerText} fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border4} />
                </Flex>
            </Box.CanHover>
        </div>
    )
}

export default SelectedArea;