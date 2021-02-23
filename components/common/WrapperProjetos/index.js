import React from 'react';
import styled, { css } from 'styled-components';
import Flex from '../../foundation/Layout/Flex';
import SectionTitle from '../SectionTitle';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Card from '../Card';

const Wrapper = styled.div`
  padding-bottom: 0;
  margin-bottom: 0;
  max-width: 1500px;
  margin: 0 auto;
  ${breakpointsMedia({
    xs: css`
      padding-top: 32px;
    `,
    md: css`
      padding-top: 64px;
    `,
  })}
`;

export default function WrapperProjetos() {
  return (
    <Wrapper>
      <SectionTitle text="Meus Projetos" />
      <Flex.Container
        direction={{ xs: 'column', md: 'row' }}
        mainAxisAlignment="center"
        crossAxisAlignment="center"
        wrap={{ xs: 'nowrap', md: 'wrap' }}
        margin={{ xs: '33px 0 0 0', md: '85px 0 0 0' }}
      >
        <Flex.Child>
          <Card imagePath="/images/image1.jpg" title="Projeto 1" />
        </Flex.Child>
        <Flex.Child>
          <Card imagePath="/images/image2.jpg" title="Projeto 2" />
        </Flex.Child>
        <Flex.Child>
          <Card imagePath="/images/image3.jpg" title="Projeto 3" />
        </Flex.Child>
        <Flex.Child order={{ xs: -1, md: 0 }}>
          <Card
            imagePath="/images/image4.jpg"
            title="Projeto Destaque"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit."
          />
        </Flex.Child>
      </Flex.Container>
    </Wrapper>
  );
}
