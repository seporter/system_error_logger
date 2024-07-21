import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer\`
  background: \${(props) => props.theme.colors.primary};
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
\`;

const Footer = () => (
  <FooterContainer>
    &copy; {new Date().getFullYear()} StubHub Team
  </FooterContainer>
);

export default Footer;