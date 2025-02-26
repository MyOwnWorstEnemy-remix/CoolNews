import styled from "styled-components"

export const Section = styled.section`
    width: 100%;
`

export const Title = styled.h1`
    font-size: 32px;
    text-align: center;
    margin: 0;
    margin-bottom: 30px;
`

export const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;

    li {
        max-width: 30%;
        min-width: 250px;
    }
`