import styled from "styled-components";

export const Article = styled.article`
    background-color: #ffffff;
    border: 1px solid #c2c2c2;
    width: 100%;
    padding: 0;
`;

export const Preview = styled.div`
    img {
        width: 100%;
        max-height: 240px;
        object-fit: cover;
    }
`