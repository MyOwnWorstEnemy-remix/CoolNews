import styled from "styled-components";

export const FeatureList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    column-gap: 15px;
    row-gap: 10px;

    li {
        max-width: 100%;
        min-width: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
    }
`