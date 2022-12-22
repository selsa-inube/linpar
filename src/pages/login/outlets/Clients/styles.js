import styled from "styled-components";

const StyledClients = styled.div`
  & button {
    margin-top: 24px;
  }
`;

const StyledClientsList = styled.ul`
  list-style: none;
  margin: 32px auto 0;
  width: 500px;
  max-height: 430px;
  padding: 0px 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  overflow-y: ${({ scroll }) => (scroll ? "scroll" : "visible")};

  @media screen and (max-width: 532px) {
    width: auto;
  }
`;

const StyledClientsItem = styled.li``;

export { StyledClients, StyledClientsList, StyledClientsItem };
