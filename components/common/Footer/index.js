import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Center from '../../foundation/Layout/Center';
import Flex from '../../foundation/Layout/Flex';
import FooterIcon from './components/FooterIcon';

const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.background};
  height: 68px;
  width: 100%;
  margin-top: 22px;
`;

function Footer({ theme }) {
  return (
    <FooterWrapper>
      <Center>
        <Flex.Container direction="row" backgroundColor={theme.colors.primary.background} height="68px" padding="0 4px" crossAxisAlignment="center">
          <FooterIcon url="https://github.com/micdoug" iconPath="/images/github.png" altText="Ícone do github" />
          <FooterIcon url="https://twitter.com" iconPath="/images/twitter.png" altText="Ícone do twitter" />
        </Flex.Container>
      </Center>
    </FooterWrapper>
  );
}

Footer.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(Footer);
