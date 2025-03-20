import styled from "styled-components";

export const Selector = styled.div`
    position: sticky;
    top: 50px;
    background-color: #dee7ee;
    padding: 30px 40px;
    min-width: 250px;
    max-width: 300px;
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

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const SubList = styled(List)`
    margin-left: 30px;
    margin-top: 10px;
`

export const CheckboxInput = styled.input`
    appearance: none;
    background-color: #dee7ee;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    margin-right: 10px;
    border: 0.15em solid #10264c;
    border-radius: 0.15em;
    transform: translateY(0.25em);
    position: relative;

    &::before {
        position: absolute;
        top: 2px;
        left: 2px;
        content: "";
        width: 0.65em;
        height: 0.65em;
        transform: scale(1);
        transition: 120ms transform ease-in-out;
        background-color: #10264c;
    }

    &:checked::before {
        transform: scale(0);
    }

    &:disabled {
        opacity: 0.5;
    }
`

export const RadioInput = styled(CheckboxInput)`
    border-radius: 50%;

    &::before {
        border-radius: 50%;
        transform: scale(0);
    }

    &:checked::before {
        transform: scale(1);
    }
`