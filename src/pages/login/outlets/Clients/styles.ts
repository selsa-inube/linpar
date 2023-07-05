import styled from "styled-components";

interface StyledClientsListProps {
  scroll?: boolean;
}

const StyledClients = styled.div`
  & form {
    margin: 48px auto 0px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 532px) {
      width: auto;
    }
  }

  & button {
    margin-top: 24px;
  }
`;

const StyledClientsList = styled.ul<StyledClientsListProps>`
  list-style: none;
  min-height: 300px;
  max-height: 430px;
  width: inherit;
  padding: 0px 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  overflow-y: ${({ scroll }) => (scroll ? "scroll" : "visible")};

  @media screen and (max-height: 1000px) {
    min-height: 200px;
  }
`;

const StyledNoResults = styled.div`
  margin: 16px 0;
`;

const StyledClientsItem = styled.li`
  width: 100%;
`;

export { StyledClients, StyledClientsList, StyledNoResults, StyledClientsItem };
