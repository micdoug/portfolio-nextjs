import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FooterIconLink = styled.a`
  padding: 18px 20px;
  display: block;
  margin: 0;
  line-height: 0;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export default function FooterIcon({ iconPath, url, altText }) {
  return (
    <FooterIconLink href={url}>
      <img src={iconPath} alt={altText} width="32px" height="32px" />
    </FooterIconLink>
  );
}

FooterIcon.propTypes = {
  iconPath: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};
