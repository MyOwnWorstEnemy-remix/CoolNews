import styled from "styled-components"

export const Card = styled.article`
    width: 100%;
    box-sizing: border-box;
    padding: 20px 30px 30px;
    border: 1px solid #c2c2c2;
    background-color: #ffffff;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px 20px;
    position: relative;

    h3 {
        font-size: 22px;
        color: #10264c;
        width: 100%;
        margin: 0;
    }
`

export const StyledLikesButton = styled.div`
    position: absolute;
    top: 25px;
    right: 30px;
`

export const Preview = styled.div`
    position: relative;
    height: 300px;
    width: 200px;

    img {
        object-fit: cover;
    }

    span {
        position: absolute;
        top: 20px;
        right: 0;
        padding: 5px 10px;
        background-color:rgb(253, 84, 84);
        color: #ffffff;
    }
`

export const Content = styled.div`
    width: 68%;

    p {
        margin: 0;
    }
`

export const Info = styled.div`
    display: flex;
    justify-content: space-between;

    div:first-child {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-bottom: 20px;

        span {
            font-weight: 600;
        }
    }
`

export const Rating = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;

    p {
        padding: 5px 13px;
        color: #ffffff;
        border-radius: 3px;
        width: 91px;
        box-sizing: border-box;
        text-align: center;
    }

    .rating--kp {
        background-color:rgb(86, 148, 4);
    }

    .rating--imdb {
        background-color:rgb(22, 129, 115);
    }
`