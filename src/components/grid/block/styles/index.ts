import styled, { css } from "styled-components"

interface IProps {
    active?: boolean
    puzzle?: boolean
}

export const Container = styled.div<IProps>`
    ${({ active, puzzle, theme }) => css`
        align-items: center;
        background-color: ${active
            ? theme.colors.blue
            : puzzle
            ? theme.colors.grey
            : theme.colors.white};
        border: solid 1px ${theme.colors.black};
        cursor: pointer;
        display: flex;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 0;
        font-size: 20px;
        font-weight: ${puzzle ? "bold" : "normal"};
        height: auto;
        justify-content: center;
        transition: ${theme.transitions};
        user-select: none;

        &:before {
            padding-top: 100%;
            content: "";
            float: left;
        }

        &:hover {
            background-color: ${theme.colors.lightBlue};
        }
    `}
`
