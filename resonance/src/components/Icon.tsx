/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, keyframes } from '@emotion/react';

type TypeProps = 'angleDown' | "angleUp" | "angleRight" | "angleLeft" | "xmark" | "home" | "file" | "chat" | "chart" | "checkout" | "loading" | "none" | "hamburger" | "kebab" | "meetball" | "bento" | "donorRight" | "donorLeft" | "calendar" | "flag" | "triangleDown" | "eye" | "magnifyingGlass";

export interface IconProps {
    /**아이콘 클릭 시 발생하는 액션을 입력해주세요. */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    /**아이콘의 타입을 입력해주세요. */
    type: TypeProps;
    /**아이콘의 크기를 설정해주세요. 기본은 12*12px 이며, 입력받은 수만큼 비율이 변화합니다. */
    scale?: number;
    /**아이콘의 색을 정해주세요. 기본 색으로 Black, White, Beige가 있습니다. */
    fill: "#000000" | "#FFCD80" | "#FFFFFF" | string;
    /**마우스를 클릭했을 때 취할 액션을 지정해주세요. */
    onMouseDown?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    /**마우스 클릭을 해제했을 때 취할 액션을 지정해주세요. */
    onMouseUp?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Icon = ({ onClick, type, scale, fill, onMouseDown, onMouseUp }: IconProps) => {
    switch (type) {
        case "angleDown":
            return (
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M4.99987 5.25C4.78664 5.25 4.57331 5.17676 4.41081 5.03027L0.244141 1.28027C-0.0813802 0.987305 -0.0813802 0.512695 0.244141 0.219727C0.569662 -0.0732422 1.09701 -0.0732422 1.42253 0.219727L4.99987 3.44062L8.578 0.220312C8.90352 -0.0726564 9.43086 -0.0726564 9.75638 0.220312C10.0819 0.513281 10.0819 0.98789 9.75638 1.28086L5.58971 5.03086C5.42695 5.17734 5.21341 5.25 4.99987 5.25Z" fill={fill} />
                </svg>
            )
        case "angleUp":
            return (
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M5.00065 0C5.21388 0 5.42721 0.0732422 5.58971 0.219727L9.75638 3.96973C10.0819 4.2627 10.0819 4.7373 9.75638 5.03027C9.43086 5.32324 8.90351 5.32324 8.57799 5.03027L5.00065 1.80938L1.42252 5.02969C1.097 5.32266 0.569659 5.32266 0.244138 5.02969C-0.0813831 4.73672 -0.0813831 4.26211 0.244138 3.96914L4.4108 0.219141C4.57357 0.0726566 4.78711 0 5.00065 0Z" fill={fill} />
                </svg>
            )
        case "angleRight":
            return (
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M5.62526 5.6254C5.62526 5.83863 5.55202 6.05197 5.40553 6.21447L1.65553 10.3811C1.36256 10.7067 0.887955 10.7067 0.594986 10.3811C0.302017 10.0556 0.302017 9.52827 0.594986 9.20275L3.81588 5.6254L0.595572 2.04728C0.302603 1.72176 0.302603 1.19441 0.595572 0.868894C0.888541 0.543373 1.36315 0.543373 1.65612 0.868894L5.40612 5.03556C5.5526 5.19832 5.62526 5.41186 5.62526 5.6254Z" fill={fill} />
                </svg>
            )
        case "angleLeft":
            return (
                <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M0.375259 5.6246C0.375259 5.41137 0.448502 5.19803 0.594986 5.03553L4.34499 0.868866C4.63795 0.543345 5.11256 0.543345 5.40553 0.868866C5.6985 1.19439 5.6985 1.72173 5.40553 2.04725L2.18463 5.6246L5.40495 9.20272C5.69792 9.52824 5.69792 10.0556 5.40495 10.3811C5.11198 10.7066 4.63737 10.7066 4.3444 10.3811L0.5944 6.21444C0.447916 6.05168 0.375259 5.83814 0.375259 5.6246Z" fill={fill} />
                </svg>
            )
        case "xmark":
            return (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M11.6466 9.95266C12.1153 10.4214 12.1153 11.1807 11.6466 11.6494C11.4141 11.8838 11.1066 12 10.7992 12C10.4917 12 10.185 11.8828 9.95097 11.6485L5.99953 7.69909L2.04846 11.6475C1.81411 11.8838 1.50701 12 1.19991 12C0.892805 12 0.586079 11.8838 0.351535 11.6475C-0.117178 11.1788 -0.117178 10.4195 0.351535 9.95078L4.30373 5.99859L0.351535 2.04828C-0.117178 1.57956 -0.117178 0.820248 0.351535 0.351535C0.820248 -0.117178 1.57956 -0.117178 2.04828 0.351535L5.99953 4.3056L9.95172 0.35341C10.4204 -0.115303 11.1798 -0.115303 11.6485 0.35341C12.1172 0.822123 12.1172 1.58144 11.6485 2.05015L7.69627 6.00234L11.6466 9.95266Z" fill={fill} />
                </svg>
            )
        case "home":
            return (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M11.9958 5.98828C11.9958 6.41016 11.6833 6.74063 11.3292 6.74063H10.6625L10.6771 10.493C10.6771 10.5586 10.6729 10.6195 10.6667 10.6828V11.0625C10.6667 11.5805 10.2937 12 9.83333 12H9.5C9.47708 12 9.45417 11.9789 9.43125 11.9977C9.40208 11.9789 9.37292 12 9.34375 12H8.16667C7.70625 12 7.33333 11.5805 7.33333 11.0625V9C7.33333 8.58516 7.03542 8.25 6.66667 8.25H5.33333C4.96458 8.25 4.66667 8.58516 4.66667 9V11.0625C4.66667 11.5805 4.29375 12 3.83333 12H2.66875C2.6375 12 2.60625 11.9977 2.575 11.9953C2.55 11.9977 2.525 12 2.5 12H2.16667C1.70646 12 1.33333 11.5805 1.33333 11.0625V8.4375C1.33333 8.41641 1.33396 8.39297 1.33521 8.37188V6.74063H0.667708C0.292083 6.74063 0 6.41016 0 5.98828C0 5.77734 0.0625833 5.58984 0.208542 5.42578L5.55 0.187875C5.69583 0.0234844 5.8625 0 6.00833 0C6.15417 0 6.32083 0.0469687 6.44792 0.164391L11.7667 5.42578C11.9333 5.58984 12.0187 5.77734 11.9958 5.98828Z" fill={fill} />
                </svg>
            )
        case "file":
            return (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M0 1.5C0 0.671484 0.895313 0 2 0H7V3C7 3.41484 7.44687 3.75 8 3.75H12V10.5C12 11.3273 11.1031 12 10 12H2C0.895313 12 0 11.3273 0 10.5V1.5ZM8 3V0L12 3H8Z" fill={fill} />
                </svg>
            )
        case "chat":
            return (
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M5.97949 0C2.66543 0 0.000586035 2.1825 0.000586035 4.875C0.000586035 6.03797 0.500977 7.10109 1.33582 7.93828C1.04285 9.11883 0.0638673 10.1712 0.0521485 10.1829C-0.000585843 10.2356 -0.0152343 10.3173 0.0169923 10.3876C0.0462657 10.4579 0.111234 10.4993 0.187406 10.4993C1.74014 10.4993 2.88506 9.75492 3.48272 9.29484C4.24748 9.58195 5.10038 9.7493 5.99991 9.7493C9.31397 9.7493 11.9788 7.56656 11.9788 4.89539C11.9788 2.22422 9.29356 0 5.97949 0ZM2.9584 5.625C2.54238 5.625 2.2084 5.29102 2.2084 4.89609C2.2084 4.50117 2.54238 4.14609 2.9584 4.14609C3.37441 4.14609 3.7084 4.48008 3.7084 4.89609C3.7084 5.31211 3.39434 5.625 2.9584 5.625ZM5.97949 5.625C5.56348 5.625 5.25059 5.29102 5.25059 4.89609C5.25059 4.50117 5.58457 4.14609 5.97949 4.14609C6.37441 4.14609 6.7084 4.48008 6.7084 4.89609C6.7084 5.31211 6.39668 5.625 5.97949 5.625ZM8.9584 5.625C8.54238 5.625 8.2084 5.29102 8.2084 4.89609C8.2084 4.50117 8.54238 4.14609 8.9584 4.14609C9.37441 4.14609 9.7084 4.48008 9.7084 4.89609C9.7084 5.31211 9.39434 5.625 8.9584 5.625Z" fill={fill} />
                </svg>
            )
        case "chart":
            return (
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M1.5 9.1243C1.5 9.33055 1.66781 9.4993 1.875 9.4993H11.25C11.6648 9.4993 12 9.83445 12 10.2493C12 10.6641 11.6648 10.9993 11.25 10.9993H1.875C0.839531 10.9993 0 10.1602 0 9.1243V1.2493C0 0.835157 0.335859 0.499298 0.75 0.499298C1.16414 0.499298 1.5 0.835157 1.5 1.2493V9.1243ZM8.02969 6.27899C7.73672 6.57195 7.26328 6.57195 6.97031 6.27899L5.625 4.93602L3.52969 7.02899C3.23672 7.32195 2.76328 7.32195 2.47031 7.02899C2.17688 6.73602 2.17688 6.26258 2.47031 5.96961L5.09531 3.34461C5.38828 3.05164 5.86172 3.05164 6.15469 3.34461L7.5 4.68758L9.97031 2.21961C10.2633 1.92617 10.7367 1.92617 11.0297 2.21961C11.3227 2.51258 11.3227 2.98602 11.0297 3.27899L8.02969 6.27899Z" fill={fill} />
                </svg>
            )
        case "checkout":
            return (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M4.28571 0.749298V1.4993H7.71429V0.749298C7.71429 0.335157 8.09732 -0.000701904 8.57143 -0.000701904C9.04554 -0.000701904 9.42857 0.335157 9.42857 0.749298V1.4993H10.7143C11.4241 1.4993 12 2.00297 12 2.6243V3.7493H0V2.6243C0 2.00297 0.575625 1.4993 1.28571 1.4993H2.57143V0.749298C2.57143 0.335157 2.95446 -0.000701904 3.42857 -0.000701904C3.90268 -0.000701904 4.28571 0.335157 4.28571 0.749298ZM0 4.4993H12V10.8743C12 11.4954 11.4241 11.9993 10.7143 11.9993H1.28571C0.575625 11.9993 0 11.4954 0 10.8743V4.4993ZM8.78839 7.12664C9.06161 6.92742 9.06161 6.57117 8.78839 6.35086C8.56071 6.13289 8.15357 6.13289 7.90179 6.35086L5.35714 8.57977L4.07411 7.47586C3.84643 7.25789 3.43929 7.25789 3.1875 7.47586C2.93839 7.69617 2.93839 8.05242 3.1875 8.25164L4.90179 9.75164C5.15357 9.9907 5.56071 9.9907 5.78839 9.75164L8.78839 7.12664Z" fill={fill} />
                </svg>
            )
        case "loading":
            return (
                <div css={rotateCss}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                        <path d="M7.125 1.125C7.125 1.74633 6.62109 2.25 6 2.25C5.37891 2.25 4.875 1.74633 4.875 1.125C4.875 0.503672 5.37891 0 6 0C6.62109 0 7.125 0.503672 7.125 1.125ZM7.125 10.875C7.125 11.4961 6.62109 12 6 12C5.37891 12 4.875 11.4961 4.875 10.875C4.875 10.2539 5.37891 9.75 6 9.75C6.62109 9.75 7.125 10.2539 7.125 10.875ZM0 6C0 5.37891 0.503672 4.875 1.125 4.875C1.74633 4.875 2.25 5.37891 2.25 6C2.25 6.62109 1.74633 7.125 1.125 7.125C0.503672 7.125 0 6.62109 0 6ZM12 6C12 6.62109 11.4961 7.125 10.875 7.125C10.2539 7.125 9.75 6.62109 9.75 6C9.75 5.37891 10.2539 4.875 10.875 4.875C11.4961 4.875 12 5.37891 12 6ZM1.75734 10.2422C1.31789 9.80391 1.31789 9.09141 1.75734 8.65078C2.1968 8.2125 2.90859 8.2125 3.34922 8.65078C3.7875 9.09141 3.7875 9.80391 3.34922 10.2422C2.90859 10.6828 2.1968 10.6828 1.75734 10.2422ZM3.34922 3.34922C2.90859 3.7875 2.1968 3.7875 1.75734 3.34922C1.31813 2.90859 1.31813 2.1968 1.75734 1.75734C2.1968 1.31789 2.90859 1.31789 3.34922 1.75734C3.7875 2.1968 3.7875 2.90859 3.34922 3.34922ZM8.65078 8.65078C9.09141 8.2125 9.80391 8.2125 10.2422 8.65078C10.6828 9.09141 10.6828 9.80391 10.2422 10.2422C9.80391 10.6828 9.09141 10.6828 8.65078 10.2422C8.2125 9.80391 8.2125 9.09141 8.65078 8.65078Z" fill="#FF5C00" />
                    </svg>
                </div>
            )
        case "hamburger":
            return (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M0 2.25C0 1.83586 0.383839 1.5 0.857143 1.5H11.1429C11.617 1.5 12 1.83586 12 2.25C12 2.66484 11.617 3 11.1429 3H0.857143C0.383839 3 0 2.66484 0 2.25ZM0 6C0 5.58516 0.383839 5.25 0.857143 5.25H11.1429C11.617 5.25 12 5.58516 12 6C12 6.41484 11.617 6.75 11.1429 6.75H0.857143C0.383839 6.75 0 6.41484 0 6ZM11.1429 10.5H0.857143C0.383839 10.5 0 10.1648 0 9.75C0 9.33516 0.383839 9 0.857143 9H11.1429C11.617 9 12 9.33516 12 9.75C12 10.1648 11.617 10.5 11.1429 10.5Z" fill={fill} />
                </svg>
            )
        case "kebab":
            return (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M6 8.78572C6.72422 8.78572 7.3125 9.45724 7.3125 10.2857C7.3125 11.1142 6.72422 11.7857 6 11.7857C5.27578 11.7857 4.6875 11.1142 4.6875 10.2857C4.6875 9.45724 5.27578 8.78572 6 8.78572ZM6 4.50001C6.72422 4.50001 7.3125 5.17233 7.3125 6.00001C7.3125 6.82768 6.72422 7.50001 6 7.50001C5.27578 7.50001 4.6875 6.82768 4.6875 6.00001C4.6875 5.17233 5.27578 4.50001 6 4.50001ZM6 3.21429C5.27578 3.21429 4.6875 2.54197 4.6875 1.71429C4.6875 0.886614 5.27578 0.214293 6 0.214293C6.72422 0.214293 7.3125 0.886614 7.3125 1.71429C7.3125 2.54197 6.72422 3.21429 6 3.21429Z" fill={fill} />
                </svg>
            )
        case "meetball":
            return (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M3.21429 6C3.21429 6.72422 2.54278 7.3125 1.71429 7.3125C0.885812 7.3125 0.214294 6.72422 0.214294 6C0.214294 5.27578 0.885812 4.6875 1.71429 4.6875C2.54278 4.6875 3.21429 5.27578 3.21429 6ZM7.50001 6C7.50001 6.72422 6.82769 7.3125 6.00001 7.3125C5.17233 7.3125 4.50001 6.72422 4.50001 6C4.50001 5.27578 5.17233 4.6875 6.00001 4.6875C6.82769 4.6875 7.50001 5.27578 7.50001 6ZM8.78572 6C8.78572 5.27578 9.45805 4.6875 10.2857 4.6875C11.1134 4.6875 11.7857 5.27578 11.7857 6C11.7857 6.72422 11.1134 7.3125 10.2857 7.3125C9.45805 7.3125 8.78572 6.72422 8.78572 6Z" fill={fill} />
                </svg>
            )
        case "bento":
            return (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M3.38701 0.46586C3.38701 0.20872 3.18212 0 2.92912 0H0.458354C0.204895 0 0 0.20825 0 0.46586V2.97708C0 3.23375 0.204895 3.44247 0.458354 3.44247H2.92912C3.18212 3.44247 3.38701 3.23375 3.38701 2.97708V0.46586Z" fill={fill} />
                    <path d="M7.64541 0.46586C7.64541 0.20872 7.44051 0 7.18705 0H4.71583C4.46329 0 4.25793 0.20825 4.25793 0.46586V2.97708C4.25793 3.23375 4.46329 3.44247 4.71583 3.44247H7.18705C7.44051 3.44247 7.64541 3.23375 7.64541 2.97708V0.46586Z" fill={fill} />
                    <path d="M12 0.46586C12 0.20872 11.7951 0 11.5421 0H9.07133C8.81787 0 8.61298 0.20825 8.61298 0.46586V2.97708C8.61298 3.23375 8.81787 3.44247 9.07133 3.44247H11.5421C11.7951 3.44247 12 3.23375 12 2.97708V0.46586Z" fill={fill} />
                    <path d="M3.38701 4.6948C3.38701 4.43766 3.18212 4.22941 2.92912 4.22941H0.458354C0.204895 4.22941 0 4.43766 0 4.6948V7.20602C0 7.4641 0.204895 7.67141 0.458354 7.67141H2.92912C3.18212 7.67141 3.38701 7.4641 3.38701 7.20602V4.6948Z" fill={fill} />
                    <path d="M7.64541 4.6948C7.64541 4.43766 7.44051 4.22941 7.18705 4.22941H4.71583C4.46329 4.22941 4.25793 4.43766 4.25793 4.6948V7.20602C4.25793 7.4641 4.46329 7.67141 4.71583 7.67141H7.18705C7.44051 7.67141 7.64541 7.4641 7.64541 7.20602V4.6948Z" fill={fill} />
                    <path d="M12 4.6948C12 4.43766 11.7951 4.22941 11.5421 4.22941H9.07133C8.81787 4.22941 8.61298 4.43766 8.61298 4.6948V7.20602C8.61298 7.4641 8.81787 7.67141 9.07133 7.67141H11.5421C11.7951 7.67141 12 7.4641 12 7.20602V4.6948Z" fill={fill} />
                    <path d="M3.38701 9.02245C3.38701 8.76625 3.18212 8.55706 2.92912 8.55706H0.458354C0.204895 8.55706 0 8.76625 0 9.02245V11.5346C0 11.7918 0.204895 12 0.458354 12H2.92912C3.18212 12 3.38701 11.7918 3.38701 11.5346V9.02245Z" fill={fill} />
                    <path d="M7.64541 9.02245C7.64541 8.76625 7.44051 8.55706 7.18705 8.55706H4.71583C4.46329 8.55706 4.25793 8.76625 4.25793 9.02245V11.5346C4.25793 11.7918 4.46329 12 4.71583 12H7.18705C7.44051 12 7.64541 11.7918 7.64541 11.5346V9.02245Z" fill={fill} />
                    <path d="M12 9.02245C12 8.76625 11.7951 8.55706 11.5421 8.55706H9.07133C8.81787 8.55706 8.61298 8.76625 8.61298 9.02245V11.5346C8.61298 11.7918 8.81787 12 9.07133 12H11.5421C11.7951 12 12 11.7918 12 11.5346V9.02245Z" fill={fill} />
                </svg>
            )
        case "donorRight":
            return (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M0 0H12V2H0V0ZM3 5H12V7H3V5ZM6.75 10H12V12H6.75V10Z" fill={fill} />
                </svg>
            )
        case "donorLeft":
            return (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M0 5H9V7H0V5ZM0 0H12V2H0V0ZM0 12H5.42625V10H0V12Z" fill={fill} />
                </svg>
            )
        case "calendar":
            return (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M5.71429 1V2H10.2857V1C10.2857 0.447812 10.7964 0 11.4286 0C12.0607 0 12.5714 0.447812 12.5714 1V2H14.2857C15.2321 2 16 2.67156 16 3.5V5H0V3.5C0 2.67156 0.7675 2 1.71429 2H3.42857V1C3.42857 0.447812 3.93929 0 4.57143 0C5.20357 0 5.71429 0.447812 5.71429 1ZM0 6H16V14.5C16 15.3281 15.2321 16 14.2857 16H1.71429C0.7675 16 0 15.3281 0 14.5V6ZM2.85714 8C2.54143 8 2.28571 8.225 2.28571 8.5V11.5C2.28571 11.775 2.54143 12 2.85714 12H6.28571C6.6 12 6.85714 11.775 6.85714 11.5V8.5C6.85714 8.225 6.6 8 6.28571 8H2.85714Z" fill="#767676" />
                </svg>
            )
        case "flag":
            return (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M2 15.5C2 15.775 1.77344 16 1.5 16H0.5C0.226562 16 0 15.775 0 15.5V1C0 0.445312 0.445312 0 1 0C1.55469 0 2 0.445312 2 1V15.5ZM14.8844 0C14.6855 0 14.4778 0.0421875 14.28 0.132281C12.8522 0.784156 11.7937 1.00541 10.9113 1.00541C9.0375 1.00541 7.94844 0.00978125 5.78937 0.00946875C5.02812 0.00954688 4.1125 0.152094 3 0.492188V11.4453C4 11.1333 4.87094 11.0047 5.65156 11.0047C7.9525 11.0047 9.55469 11.9978 11.8578 11.9978C12.855 11.9978 13.9834 11.8112 15.3297 11.2762C15.7531 11.1219 16 10.7625 16 10.3781V0.960312C16 0.346875 15.4781 0 14.8844 0Z" fill="#767676" />
                </svg>
            )
        case "triangleDown":
            return (
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M7.78037 1.36785L4.59625 4.57452C4.41838 4.73235 4.21295 4.81001 4.00752 4.81001C3.80209 4.81001 3.59717 4.73172 3.44059 4.57514L0.256467 1.36847C0.00480378 1.13987 -0.0638491 0.794152 0.0602592 0.496032C0.184367 0.197912 0.476926 0 0.80085 0H7.19165C7.51582 0 7.80843 0.194931 7.93269 0.494779C8.05695 0.794628 8.01085 1.13987 7.78037 1.36785Z" fill="#767676" />
                </svg>
            )
        case "eye":
            return (
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick} onKeyDown={() => onMouseDown} onKeyUp={() => onMouseUp}>
                    <path d="M7.76701 4.34432C7.84479 4.33598 7.92257 4.33321 8.00035 4.33321C9.47264 4.33321 10.6671 5.5027 10.6671 6.99999C10.6671 8.47227 9.47264 9.66677 8.00035 9.66677C6.50306 9.66677 5.33357 8.47227 5.33357 6.99999C5.33357 6.92221 5.33635 6.84443 5.34468 6.76664C5.60302 6.89165 5.90304 6.99999 6.22249 6.99999C7.20309 6.99999 8.00035 6.20273 8.00035 5.22213C8.00035 4.90267 7.89201 4.60266 7.76701 4.34432ZM13.3506 3.01648C14.6506 4.22209 15.5201 5.6416 15.9312 6.65831C16.0229 6.87776 16.0229 7.12221 15.9312 7.34167C15.5201 8.33338 14.6506 9.75288 13.3506 10.9835C12.0422 12.2002 10.2449 13.2225 8.00035 13.2225C5.75581 13.2225 3.95851 12.2002 2.65067 10.9835C1.35062 9.75288 0.481691 8.33338 0.0683675 7.34167C-0.0227892 7.12221 -0.0227892 6.87776 0.0683675 6.65831C0.481691 5.6416 1.35062 4.22209 2.65067 3.01648C3.95851 1.80087 5.75581 0.777496 8.00035 0.777496C10.2449 0.777496 12.0422 1.80087 13.3506 3.01648ZM8.00035 2.99981C5.79192 2.99981 4.00018 4.79156 4.00018 6.99999C4.00018 9.20842 5.79192 11.0002 8.00035 11.0002C10.2088 11.0002 12.0005 9.20842 12.0005 6.99999C12.0005 4.79156 10.2088 2.99981 8.00035 2.99981Z" fill="#767676" />
                </svg>
            )
        case "magnifyingGlass":
            return (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" css={scaleControl(scale!)} onClick={() => onClick}>
                    <path d="M15.6344 13.8641L11.8938 10.1239C12.7444 8.86123 13.1641 7.28359 12.9394 5.60252C12.5563 2.74313 10.2125 0.416195 7.34999 0.0538272C3.09404 -0.484647 -0.484725 3.09372 0.0538391 7.3492C0.41634 10.2126 2.74385 12.558 5.60386 12.9392C7.28512 13.1639 8.86325 12.7444 10.1258 11.8937L13.8664 15.6339C14.3545 16.122 15.1461 16.122 15.6342 15.6339C16.1219 15.1452 16.1219 14.3516 15.6344 13.8641ZM2.47185 6.4993C2.47185 4.29391 4.26623 2.49972 6.47186 2.49972C8.6775 2.49972 10.4719 4.29391 10.4719 6.4993C10.4719 8.70469 8.6775 10.4989 6.47186 10.4989C4.26623 10.4989 2.47185 8.70531 2.47185 6.4993Z" fill="black" />
                </svg>
            )
        case "none":
            return null;
        default:
            return null;
    }
}

Icon.defaultProps = {
    type: 'home',
    fill: "#000000",
};

const scaleControl = (scale: number) => css`
    transform: scale(${scale});
`

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`

const rotateCss = css`
animation: ${rotate} 2s ease infinite;
`

export default Icon;