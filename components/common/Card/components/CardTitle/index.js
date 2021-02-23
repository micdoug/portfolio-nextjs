import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from '../../../../foundation/Text';
import breakpointsMedia from '../../../../../theme/utils/breakpointsMedia';

const CardTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default function CardTitle({ children, textAlign }) {
  const textVariant = breakpointsMedia({
    md: css`
      width: 100%;
      font-weight: 700px;
      font-size: 32px;
      line-height: 38px;
    `,
    xs: css`
      width: 100%;
      font-weight: 700px;
      font-size: 24px;
      line-height: 28px;
    `,
  });
  return (
    <CardTitleWrapper>
      <Text tag="h3" textAlign={textAlign} variant={textVariant}>{children}</Text>
    </CardTitleWrapper>
  );
}

CardTitle.defaultProps = {
  textAlign: null,
};

CardTitle.propTypes = {
  children: PropTypes.string.isRequired,
  textAlign: PropTypes.any,
};
