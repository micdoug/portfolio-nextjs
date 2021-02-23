import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from '../../../theme/utils/propToStyle';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

function createTextThemeVariant(variantName) {
  return css`
    font-size: ${({ theme }) => theme.typographyVariants[variantName].fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants[variantName].fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants[variantName].lineHeight};
  `;
}

const smallestException = createTextThemeVariant('smallestException');
const title = breakpointsMedia({
  xs: css`
    font-size: 50px;
    font-weight: 500;
    line-height: 70px;
  `,
  md: css`
    font-size: 60px;
    font-weight: 500;
    line-height: 80px;
  `,
});
const subtitle = breakpointsMedia({
  xs: css`
    font-size: 35px;
    font-weight: 400;
    line-height: 50px;
  `,
  md: css`
    font-size: 45px;
    font-weight: 400;
    line-height: 60px;
  `,
});
const paragraph1 = createTextThemeVariant('paragraph1');
const paragraph2 = createTextThemeVariant('paragraph2');

export const TextThemeVariants = {
  smallestException,
  title,
  subtitle,
  paragraph1,
  paragraph2,
};

const TextBase = styled.span`
  ${({ variant }) => variant}
  ${propToStyle('color')}
  ${propToStyle('textAlign')}
  ${propToStyle('weight', 'font-weight')}
  ${propToStyle('textShadow')}
`;

export function Text({
  tag,
  variant,
  color,
  textAlign,
  children,
  weight,
  textShadow,
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      color={color}
      textAlign={textAlign}
      weight={weight}
      textShadow={textShadow}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: TextThemeVariants.paragraph1,
  textAlign: 'start',
  color: null,
  textShadow: null,
  weight: null,
};

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.any,
  color: PropTypes.any,
  textAlign: PropTypes.any,
  children: PropTypes.string.isRequired,
  weight: PropTypes.any,
  textShadow: PropTypes.any,
};
