import styled from "styled-components";

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-weight: 600;
    margin-bottom: 20px;

    div {
        display: flex;
        gap: 10px;
    }

    svg {
        margin-top: 2px;
        width: 18px;
        height: 18px;
        flex-shrink: 0;
    }
`

export const Time = styled.div`
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
`