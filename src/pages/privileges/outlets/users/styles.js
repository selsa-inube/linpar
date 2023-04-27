import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 32px 64px;

  div > div:last-of-type > div:nth-of-type(2) {
    gap: 8px;
  }

  div > div:last-of-type > div:nth-of-type(2) > div {
    max-width: 282px;
  }

  div:last-of-type > div:nth-of-type(2) > svg {
    display: none;
  }

  @media screen and (max-width: 580px) {
    padding: 16px;

    button {
      display: none;
    }

    div:last-of-type > div:last-of-type > svg {
      display: flex;
    }
  }
`;

export { StyledContainer };
