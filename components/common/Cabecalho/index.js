import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import Logo from '../Logo';
import Flex, { MainAxisAlignment, LayoutDirection } from '../../foundation/Layout/Flex';

function Cabecalho({ theme }) {
  return (
    <Flex.Container
      direction={LayoutDirection.row}
      mainAxisAlignment={MainAxisAlignment.spaceBetween}
      padding={{ xs: '0 16px', md: '0 254px' }}
      backgroundColor={theme.colors.secondary.background}
    >
      <Flex.Child>
        <Logo />
      </Flex.Child>
      <Flex.Child>
        <Navbar />
      </Flex.Child>
    </Flex.Container>
  );
}

Cabecalho.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(Cabecalho);
