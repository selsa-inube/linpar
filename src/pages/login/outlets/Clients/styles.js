import styled from "styled-components";

const StyledClients = styled.div`
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    margin-top: 32px;
  }

  & button {
    margin-top: 24px;
  }
`;

export { StyledClients };
