import styled from "styled-components";

export const Main = styled.main`
    max-width: 1700px;
    padding-top: 50px;
    margin: 0 auto;
    display: flex;
    gap: 100px;
`

export const HiddenTitle = styled.h1`
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;

    white-space: nowrap;

    border: 0;

    clip: rect(0 0 0 0);
    clip-path: inset(100%);
`