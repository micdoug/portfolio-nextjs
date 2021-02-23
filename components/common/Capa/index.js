import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { Text, TextThemeVariants } from '../../foundation/Text';
import Cabecalho from '../Cabecalho';
import Center from '../../foundation/Layout/Center';
import Flex, { CrossAxisAlignment } from '../../foundation/Layout/Flex';

function Capa({ theme }) {
  return (
    <Flex.Container
      width="100%"
      height="300px"
      crossAxisAlignment={CrossAxisAlignment.stretch}
      background={{
        xs: `url(/images/nodejs-logo.svg) right top no-repeat, ${theme.colors.primary.background}`,
        md: `url(/images/nodejs-logo.svg) left top no-repeat, url(/images/nodejs-logo.svg) right top no-repeat, ${theme.colors.primary.background}`,
      }}
    >
      <Flex.Child grow={1}>
        <Center>
          <Text
            variant={TextThemeVariants.title}
            color={theme.colors.primary.textColor}
            tag="h1"
            textShadow="2px 2px 5px rgba(0, 0, 0, 0.6)"
          >
            Michael Silva
          </Text>
          <Text
            variant={TextThemeVariants.subtitle}
            color={theme.colors.primary.textColor}
            tag="h2"
            textShadow="2px 2px 5px rgba(0, 0, 0, 0.6)"
          >
            Portfolio
          </Text>
        </Center>
      </Flex.Child>
      <Flex.Child>
        <Cabecalho />
      </Flex.Child>
    </Flex.Container>
  );
}

Capa.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme(Capa);
