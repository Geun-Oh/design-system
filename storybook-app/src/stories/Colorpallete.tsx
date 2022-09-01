/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { BaseStyles } from "../themes";
/**
 * 사용되는 컬러 팔레트입니다.
 * Black을 기반으로 포인트 색상을 프로젝트마다 다르게 적용하여 제작합니다.
 */
export const Colorpallete = () => {
    const { Color } = BaseStyles;
    return (
        <div>
            {Color && Object.keys(Color).map((key) => {
                return (
                    <>
                        <div style={{ color: Color[key], height: "50px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <div style={{ backgroundColor: Color[key], color: "white", fontSize: "1.5rem", width: "150px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>{Color[key]}</div>
                            {key}
                        </div>
                    </>
                )
            })}
        </div>
    )
}