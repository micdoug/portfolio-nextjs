import styled from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from '../../../../theme/utils/propToStyle';

export const CrossAxisAlignment = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  stretch: 'stretch',
  baseline: 'baseline',
};

export const MainAxisAlignment = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly',
};

export const MultilineAlignment = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  stretch: 'stretch',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
};

export const LayoutDirection = {
  column: 'column',
  columnReverse: 'column-reverse',
  row: 'row',
  rowReverse: 'row-reverse',
};

export const FlexWrap = {
  wrap: 'wrap',
  nowrap: 'nowrap',
  wrapReverse: 'wrap-reverse',
  inherit: 'inherit',
  initial: 'initial',
  unset: 'unset',
};

const FlexLayoutWrapper = styled.div`
  display: flex;
  ${propToStyle('direction', 'flex-direction')}
  ${propToStyle('mainAxisAlignment', 'justify-content')}
  ${propToStyle('crossAxisAlignment', 'align-items')}
  ${propToStyle('multilineAlignment', 'align-content')}
  ${propToStyle('wrap', 'flex-wrap')}
  ${propToStyle('width')}
  ${propToStyle('height')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('padding')}
  ${propToStyle('margin')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('background')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('border')}
`;

FlexLayoutWrapper.defaultProps = {
  direction: LayoutDirection.column,
  mainAxisAlignment: MainAxisAlignment.start,
  crossAxisAlignment: CrossAxisAlignment.start,
  multilineAlignment: MultilineAlignment.start,
  wrap: FlexWrap.nowrap,
  width: null,
  height: null,
  backgroundColor: null,
  padding: null,
  margin: null,
  backgroundPosition: null,
  backgroundImage: null,
  backgroundRepeat: null,
  background: null,
  border: null,
};

FlexLayoutWrapper.propTypes = {
  direction: PropTypes.any,
  mainAxisAlignment: PropTypes.string,
  crossAxisAlignment: PropTypes.string,
  multilineAlignment: PropTypes.string,
  wrap: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  backgroundColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

const FlexChildWrapper = styled.div`
  ${propToStyle('order')}
  ${propToStyle('grow', 'flex-grow')}
  ${propToStyle('shrink', 'flex-shrink')}
  ${propToStyle('crossAxisAlignment', 'align-self')}
  ${propToStyle('width')}
  ${propToStyle('height')}
  ${propToStyle('padding')}
  ${propToStyle('display')}
`;

FlexChildWrapper.defaultProps = {
  order: 0,
  grow: 0,
  shrink: 0,
  crossAxisAlignment: null,
};

export default {
  Container: FlexLayoutWrapper,
  Child: FlexChildWrapper,
};
