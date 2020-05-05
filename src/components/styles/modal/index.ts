import styled, { css } from "styled-components"

export const Header = styled.h1`
    ${({ theme }) => css`
        width: 100%;
        border-bottom: 1px solid gray;
        font-size: 18px;
        text-align: center;
        padding: 5px;
    `}
`
export const Contents = styled.div`
    ${({ theme }) => css`
        width: 100%;
        padding: 10px 5px;
    `}
`
export const Close = styled.div`
    ${({ theme }) => css`
        cursor: pointer;
        position: absolute;
        display: block;
        padding: 2px 5px;
        line-height: 20px;
        right: -10px;
        top: -10px;
        font-size: 24px;
        background: #ffffff;
        border-radius: 18px;
        border: 1px solid #cfcece;
    `}
`
