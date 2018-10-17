import { css } from 'styled-components';
import { colour } from './tokens';

export const linkColours = ({
  normal = colour.link,
  hover = colour.linkHover,
  active = colour.linkActive,
  visited = colour.linkVisited,
  focus = normal,
} = {}) => css`
  color: ${normal};
  &:visited {
    color: ${visited};
  }
  &:hover {
    color: ${hover};
  }
  &:focus {
    color: ${focus};
  }
  &:active {
    color: ${active};
  }
`;
