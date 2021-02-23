import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: red;
  position: relative;
`;

const ImageCropped = styled.img`
  position: absolute;
    left: -1000%;
    right: -1000%;
    top: -1000%;
    bottom: -1000%;
    margin: auto;
    min-height: 100%;
    min-width: 100%;
`;

export default function CardImage({ imagePath }) {
  return (
    <CardImageWrapper imagePath={imagePath}>
      <ImageCropped src={imagePath} />
    </CardImageWrapper>
  );
}

CardImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
};
