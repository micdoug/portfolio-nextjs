import breakpointsMedia from './breakpointsMedia';
import breakpoints from './breakpoints';

// Converts a component property to a css rule. This function should be called from a
// styled-component definition. It supports css rules using breakpoints. In this case the
// breakpoint rules are forwarded to the breakpointsMedia method.
export default function propToStyle(propName, overrideCssName = null) {
  return (props) => {
    const propValue = props[propName];
    const cssPropName = overrideCssName || propName;
    if (propValue === null || propValue === undefined) {
      return '';
    }
    // this is a direct value for the css property, so we can just create a simple css rule
    if (typeof propValue === 'number' || typeof propValue === 'string') {
      return {
        [cssPropName]: propValue.toString(),
      };
    }
    // this is an object with breakpoint rules, so we need to create multiple rules.
    if (typeof propValue === 'object') {
      const breakpointsToConsider = Object.keys(propValue).filter(
        (breakpoint) => breakpoint in breakpoints,
      );
      const cssBreakpoint = {};
      breakpointsToConsider.forEach((breakpoint) => {
        cssBreakpoint[breakpoint] = {
          [cssPropName]: propValue[breakpoint],
        };
      });
      return breakpointsMedia(cssBreakpoint);
    }
    return '';
  };
}
