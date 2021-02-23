import { css } from 'styled-components';
import breakpoints from './breakpoints';

// Receives an object in which the properties define specific css rules for a breakpoint.
// Breakpoints are defined in another file, so we can manipulate them as required.
// If the received object contains keys that are not valid breakpoints, they are just ignored.
// todo: throw an error when there is invalid breakpoints specified in the received object.
export default function breakpointsMedia(breakpointCss) {
  const cssRules = [];
  const breakpointsToConsider = Object.keys(breakpointCss).filter(
    (breakpoint) => breakpoint in breakpoints,
  );
  breakpointsToConsider.forEach((breakpoint) => {
    cssRules.push(css`
      @media screen and (min-width: ${breakpoints[breakpoint]}px) {
        ${breakpointCss[breakpoint]}
      }
    `);
  });
  return cssRules;
}
