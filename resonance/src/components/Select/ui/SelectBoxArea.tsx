/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { BaseStyles } from '../../../themes';
import Box from '../../Box';
import Flex from '../../Flex/Flex';

const SelectBoxArea = ({ children }: { children: React.ReactNode }) => {
    return (
            <Box.CanHover data-testid="Select-Default-SelectBoxArea" hoverColor={BaseStyles.Color.Beige2} backgroundColor='white' width="300px">
                <Flex flexDirection='column'>
                    {children}
                </Flex>
            </Box.CanHover>
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
    transition-duration: .4s;
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