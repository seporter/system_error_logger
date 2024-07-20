import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav\`
  background: \${(props) => props.theme.colors.primary};
  padding: 1rem;
\`;

const StyledLink = styled(Link)\`
  color: white;
  margin: 0 1rem;
  text-decoration: none;
\`;

const Header = () => (
  <Nav>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/about">About</StyledLink>
    <StyledLink to="/contact">Contact</StyledLink>
  </Nav>
);

export default Header;