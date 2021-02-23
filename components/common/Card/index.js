import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import CardImage from './components/CardImage';
import CardTitle from './components/CardTitle';
import { Text, TextThemeVariants } from '../../foundation/Text';
import Flex from '../../foundation/Layout/Flex';

function Card({
  imagePath, title, theme, text,
}) {
  if (text) {
    return (
      <Flex.Container
        width={{ xs: '360px', md: '876px' }}
        height={{ xs: '380px', md: '390px' }}
        border={`1px solid ${theme.colors.primary.background}`}
        margin={{ xs: '0 0 30px 0', md: '0 9px 30px 9px' }}
        direction="column"
        wrap="wrap"
      >
        <Flex.Child
          height={{ xs: '330px', md: '388px' }}
          width={{ xs: '100%', md: '578px' }}
        >
          <CardImage imagePath={imagePath} />
        </Flex.Child>
        <Flex.Child padding="0 16px" height={{ xs: '48px', md: '108px' }} width={{ xs: '360px', md: '298px' }}>
          <CardTitle textAlign={{ xs: 'center', md: 'start' }}>{title}</CardTitle>
        </Flex.Child>
        <Flex.Child padding="0 16px" display={{ xs: 'none', md: 'block' }} width={{ xs: '290px', md: '298px' }}>
          <Text variant={TextThemeVariants.paragraph1} tag="p">{text}</Text>
        </Flex.Child>
      </Flex.Container>
    );
  }
  return (
    <Flex.Container
      width={{ xs: '290px', md: '280px' }}
      height={{ xs: '320px', md: '500px' }}
      border={`1px solid ${theme.colors.primary.background}`}
      margin="0 9px 30px 9px"
      direction="column"
      wrap="wrap"
    >
      <Flex.Child
        height={{ xs: '250px', md: '390px' }}
        width="100%"
      >
        <CardImage imagePath={imagePath} />
      </Flex.Child>
      <Flex.Child height={{ xs: '68px', md: '108px' }} crossAxisAlignment="stretch">
        <CardTitle textAlign="center">{title}</CardTitle>
      </Flex.Child>
    </Flex.Container>
  );
}

Card.propTypes = {
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  text: PropTypes.string,
};

Card.defaultProps = {
  text: null,
};

export default withTheme(Card);
