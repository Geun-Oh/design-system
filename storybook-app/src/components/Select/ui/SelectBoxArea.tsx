/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { BaseStyles } from '../../../themes';
import Box from '../../Box';
import Flex from '../../Flex';

const SelectBoxArea = ({ children }) => {
    return (
        <Box backgroundColor='white' width="300px">
            <Flex flexDirection='column'>
                {children}
            </Flex>
        </Box>
    )
}

export const style = css`
    box-shadow: ${BaseStyles.Shadow.Flat};
    transition-duration: 0.5s;
    border: none;
    width: 300px;
    max-height: 100px;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    ::-webkit-scrollbar-track {
        background-color: none;
    }
    ::-webkit-scrollbar {
        width: 6px;               /* width of the entire scrollbar */
    }
    ::-webkit-scrollbar-thumb {
        background-color: lightgray;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: none;  /* creates padding around scroll thumb */
    }
`

export default SelectBoxArea;