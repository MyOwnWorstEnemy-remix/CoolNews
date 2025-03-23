import styled from "styled-components";

export const LikesButton = styled.button`
    display: flex;
    gap: 6px;
    align-items: center;
    background-color: transparent;
    border: none;
    color: #ff97bb;
    cursor: pointer;

    &:hover {
        color: #d71868;
    }

    svg {
        width: 16px;
        height: 16px;
    }
`