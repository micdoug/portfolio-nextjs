import React from 'react';
import styled from 'styled-components';
import { Text } from '../../foundation/Text';

const LogoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.background};
  color: ${({ theme }) => theme.colors.primary.textColor};
  height: 100%;
  padding: 16px;
`;

export default function Logo() {
  return (
    <LogoWrapper>
      <Text weight="700">{'<ME/>'}</Text>
    </LogoWrapper>
  );
}
