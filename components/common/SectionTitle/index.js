import React from 'react';
import PropTypes from 'prop-types';
import { Text, TextThemeVariants } from '../../foundation/Text';

export default function SectionTitle({ text }) {
  return <Text tag="h2" textAlign="center" variant={TextThemeVariants.subtitle}>{text}</Text>;
}

SectionTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
