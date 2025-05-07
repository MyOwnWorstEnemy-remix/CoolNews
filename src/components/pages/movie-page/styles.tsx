import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    max-width: 1700px;
    padding-top: 50px;
    margin: 0 auto;
    display: flex;
    gap: 100px;
`

export const Title = styled.h1`
    font-size: 32px;
    text-align: center;
    margin: 0;
    margin-bottom: 30px;
`

export const Control = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    p {
        margin: 0;
        padding: 15px 0;
    }

    div {
        display: flex;
    }
`