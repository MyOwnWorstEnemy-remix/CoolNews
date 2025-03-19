import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100%;
    max-width: 1700px;
    padding: 50px 0 20px;
    margin: 0 auto;
    display: flex;
    gap: 150px;
`

export const Link = styled(NavLink)`
    &:hover {
        opacity: 0.8;
    }
`

export const Contacts = styled.div`
    margin-right: auto;

    h2 {
        margin: 0;
        margin-bottom: 20px;
    }

    p {
        margin: 0;
        margin-bottom: 10px;
    }

    a {
        text-decoration: none;
        color: #282f2c;

        &:hover,
        &:focus {
            color: #104a9d;
        }

        &:active {
            color: #10264c;
            border-bottom: 1px solid #10264c;
        }
    }
`