import styled from "styled-components";

export const Section = styled.div`
    position: sticky;
    top: 50px;
    max-height: calc(100vw - 100px);
    scrollbar-gutter: stable;
    scrollbar-width: thin;
    scrollbar-color: #10264c rgb(241, 244, 253);
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #dee7ee;
    padding: 30px 40px;
    min-width: 300px;
    max-width: 350px;
    border-radius: 15px;
    box-shadow: 0px 0px 15px -5px #282f2c;
    height: fit-content;
    margin-top: 70px;
`

export const Title = styled.h2`
    font-size: 24px;
    margin: 0;
    margin-bottom: 20px;
`

export const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    &:not(:last-child) {
        margin-bottom: 25px;
    }

    h3 {
        margin: 0;
    }
`