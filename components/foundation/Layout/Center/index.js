import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${propToStyle('backgroundColor')}
`;
