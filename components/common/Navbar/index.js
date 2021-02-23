import React from 'react';
import styled from 'styled-components';
import { Text } from '../../foundation/Text';

const NavbarWrapper = styled.div`
  
`;

const NavbarLink = styled.a`
  padding: 16px;
  display: inline-block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary.textColor};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.background};
    color: ${({ theme }) => theme.colors.primary.textColor};
  }
  &:active {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.6);
  }
`;

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavbarLink href="/"><Text weight="600">Sobre mim</Text></NavbarLink>
      <NavbarLink href="/"><Text weight="600">Contato</Text></NavbarLink>
    </NavbarWrapper>
  );
}
