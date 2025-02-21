import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 50%;
`

export const Link = styled(NavLink)`
  font-size: 16px;
  padding: 10px;
  text-decoration: none;
  color: #282f2c;

  &:hover {
    color: #104a9d;
  }

  &.active {
    color: #10264c;
    border-bottom: 1px solid #10264c;
  }
`;
