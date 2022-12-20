import styled from "styled-components";

const StyledClients = styled.div`
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 500px;
    margin-top: 32px;

    @media screen and (max-width: 532px) {
      width: auto;
    }
  }

  & button {
    margin-top: 24px;
  }
`;

export { StyledClients };
