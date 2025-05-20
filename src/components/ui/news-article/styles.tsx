import styled from "styled-components";

export const StyledArticle = styled.div`
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
    background-color: #ffffff;
    border: 1px solid #c2c2c2;
    border-radius: 20px;
    position: relative;
`

export const Title = styled.h3`
    color: #10264c;
    font-size: 22px;
    margin: 0;
    margin-bottom: 10px;
    width: 85%;
`

export const StyledLikesButton = styled.div`
    position: absolute;
    top: 25px;
    right: 30px;
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
    width: 100%;
    height: auto;
    object-fit: contain;
`

export const Link = styled.a`
    color: #10264c;
    text-decoration: none;
    font-style: italic;

    &:hover {
        color: #104a9d;
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
