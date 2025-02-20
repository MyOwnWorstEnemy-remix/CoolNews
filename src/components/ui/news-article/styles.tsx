import styled from "styled-components";

export const StyledArticle = styled.div`
    width: 100%;
    margin: 0 auto;
    padding-bottom: 40px;
    border-bottom: 1px solid #c2c2c2;
`

export const Title = styled.h3`
    font-size: 22px;
    margin: 0;
    margin-bottom: 10px;
`

export const Description = styled.p`
    font-style: italic;
    margin: 0;
    margin-bottom: 25px;
`

export const Content = styled.p`
    margin:0;
    margin-bottom: 20px;
`

export const Img = styled.img`
    display: block;
    margin: 0 auto;
    margin-bottom: 30px;
    width: 500px;
    height: auto;
    object-fit: contain;
`

export const Link = styled.a`
    color: #14684e;
    text-decoration: none;
    font-style: italic;

    &:hover {
        color: #38af79;
    }
`

export const Meta = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Source = styled.p`
    display: block;
    margin: 0;
    font-style: italic;
`
