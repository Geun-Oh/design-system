import React from 'react';
import Text from '../Text';
import Badge from './index';
import Statusbar from '../Statusbar';
import Box from '../Box/index';
import MarginBox from '../Marginbox';
import { BaseStyles } from '../../themes';

export const BadgeExample = () => {
    return (
        <>
            <Badge color="Standard">
                <Box height='32px' backgroundColor='#FFFFFF' extraStyle={{ padding: "0.5rem" }} width="200px">
                    <Text fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border4} innerText='Standard Badge Innertext' />
                </Box>
            </Badge>
            <Badge color="Access">
                <Statusbar extraAction='Access' src='https://www.naver.com/' />
            </Badge>
            <MarginBox marginBottom='2rem' />
            <Badge color="Error">
                <Box height='32px' backgroundColor='#FFFFFF' extraStyle={{ padding: "0.5rem" }} width="200px">
                    <Text fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border4} innerText='Error Badge Innertext' />
                </Box>
            </Badge>
            <Badge color="Wait">
                <Statusbar extraAction='Wait' src='https://www.naver.com/' />
            </Badge>
            <MarginBox marginBottom='2rem' />
            <Badge color="New">
                <Box height='32px' backgroundColor='#FFFFFF' extraStyle={{ padding: "0.5rem" }} width="200px">
                    <Text fontSize={BaseStyles.Text.Heading4} fontWeight={BaseStyles.Text.Border4} innerText='New Badge Innertext' />
                </Box>
            </Badge>
            <Badge color="Warning">
                <Statusbar extraAction='Warning' src='https://www.naver.com/' />
            </Badge>
        </>
    );
};

const AccessExample = () => {
    return (
        <Badge color="Access">
            <Statusbar extraAction='Access' src='https://www.naver.com/' />
        </Badge>
    )
}

const Example = {
    BadgeExample,
    AccessExample,
}

export default Example;