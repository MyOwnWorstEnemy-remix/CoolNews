import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    max-width: 1700px;
    padding: 50px 0 20px;
    margin: 0 auto;
    display: flex;
    gap: 100px;
    align-items: center;
`

export const Link = styled(NavLink)`
    &:hover {
        opacity: 0.8;
    }
`