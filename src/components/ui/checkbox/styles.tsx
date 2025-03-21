import styled from "styled-components";

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