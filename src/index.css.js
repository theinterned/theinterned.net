import { injectGlobal } from 'styled-components';
import { colour, font } from './style/tokens.js';

injectGlobal`
html { font-size: 62.5%; } /* =10px */
body {
  background-color: ${colour.background};
  font-size: 1.6rem; /* =16px */
  line-height: 2rem;
  font-family: ${font.family.sans};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${colour.text};
  max-width: 84rem;
  margin: 0 auto;
  padding: 2rem;
  @media screen and (min-width:478px) {
    padding: 4rem 6rem;
  }
}
`;
