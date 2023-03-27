/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

type directionType = "column" | "row";
type flexType = "flex-start" | "flex-end" | "center" | "left" | "right" | "space-between" | "space-evenly" | "space-around";

interface FlexProps {
    flexDirection?: directionType;
    justifyContent?: flexType;
    alignItems?: flexType;
    width?: string;
    height?: string;
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
    flex?: string;
    children: React.ReactNode;
    overflow?: string;
    overflowX?: "visible" | "hidden" | "auto" | "scroll" | "clip";
    gap?: string;
}

const Flex = ({ flexDirection, justifyContent, alignItems, width, height, flexWrap, children, flex, overflow, overflowX, gap }: FlexProps) => {
    return (
        <div css={FlexDiv} style={{ display: "flex", flexDirection, justifyContent, alignItems, width: width ?? "100%", height, flexWrap, flex, overflow: overflow ?? "hidden", overflowX, gap }}>
            {children}
        </div>
    )
}

const FlexDiv = css`
::-webkit-scrollbar{
    display: none; 
}
`

export default Flex;