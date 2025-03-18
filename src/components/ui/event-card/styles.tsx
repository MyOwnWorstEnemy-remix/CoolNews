import styled from "styled-components";

export const Article = styled.article`
    background-color: #ffffff;
    border: 1px solid #c2c2c2;
    width: 100%;
    padding: 0;

    li {
        width: 100%;
    }
`;

export const Preview = styled.div`
    position: relative;
    color: #ffffff;

    img {
        width: 100%;
        max-height: 240px;
        object-fit: cover;
    }
    
    .views {
        position: absolute;
        top: 15px;
        right: 15px;
        display: flex;
        align-items: center;
        gap: 5px;

        svg {
            width: 16px;
            height: 16px;
        }
    }
`

export const Content = styled.div`
    padding: 15px;

    h2 {
        font-size: 20px;
        margin: 0;
        margin-bottom: 10px;

        a {
            color: #10264c;
            text-decoration: none;

            &:hover {
                color: #104a9d;
            }
        }

        span {
            opacity: 0.6;
        }
    }

    .description {
        margin: 0;
        margin-bottom: 20px;
    }
`

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    a {
        text-decoration: none;
        color: #ffffff;
        background-color: #10264c;
        transition: background-color 0.3s ease;
        display: block;
        padding: 10px 20px;
        max-width: 200px;
        border-radius: 10px;

        &:hover {
            background-color: #104a9d;
        }
    }

    div {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #ff97bb;
        cursor: pointer;

        &:hover {
            color: #d71868;
        }
    }

    svg {
        width: 16px;
        height: 16px;
    }
`