import styled from "styled-components";

export const Adress = styled.div`
    position: absolute;
    bottom: 15px;
    left: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    div {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 14px;
    }

    svg {
        width: 18px;
        height: 18px;
    }

    .subway svg {
        fill: #ee3942;
    }
`