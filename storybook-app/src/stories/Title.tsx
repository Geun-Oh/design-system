import React from 'react';

export interface TitleProps {
    text?: string;
}
/**
 * 타이틀 컴포넌트
 * 
 * - 타이틀 컴포넌트입니다.
 */
function Title({ text }: TitleProps) {
    return <div>{text}</div>;
}

export default Title;