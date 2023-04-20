/** @jsxImportSource @emotion/react */
import React from 'react';
import { BaseStyles } from "@src/styles/themes";
import Pallete from '@src/components/Colorpallete/ui/Pallete';
import Flex from '@src/components/Flex/Flex';
/**
 * 사용되는 컬러 팔레트입니다.
 * Black을 기반으로 포인트 색상을 프로젝트마다 다르게 적용하여 제작합니다.
 */


const Colorpallete = () => {
    return (
        <Flex flexWrap='wrap' gap="20px">
            {BaseStyles.Color && Object.keys(BaseStyles.Color).map((key: string) => {
                return (
                    <Pallete color={BaseStyles.Color[key]} innerText={key} key={key} />
                )
            })}
        </Flex>
    )
}

export default Colorpallete;