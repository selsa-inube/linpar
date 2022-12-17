import { createGlobalStyle } from "styled-components";

import { typography } from "./typography";

const GlobalStyles = createGlobalStyle`

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0
  }

  body {
    margin: 0;
    padding: 0;

    ${typography}
  }
`;

export { GlobalStyles };
