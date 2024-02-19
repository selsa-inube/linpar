import styled from "styled-components";
import { inube } from "@inube/design-system";

interface StyledClientsListProps {
  scroll?: boolean;
}

interface IStyledClientsUI {
  theme?: typeof inube;
}
const StyledClients = styled.div`
  & form {
    & > div {
      margin: ${({ theme }: IStyledClientsUI) =>
        `${theme?.spacing?.s600 || inube.spacing.s600} auto ${
          theme?.spacing?.s0 || inube.spacing.s0
        }`};
      width: 500px;
      @media screen and (max-width: 532px) {
        width: auto;
      }
    }
  }

  & button {
    margin-top: ${({ theme }: IStyledClientsUI) =>
      `${theme?.spacing?.s300 || inube.spacing.s300}`};
  }
`;

const StyledClientsList = styled.div<StyledClientsListProps>`
  & > div {
    list-style: none;
    min-height: 300px;
    max-height: 430px;
    width: inherit;
    overflow-y: ${({ scroll }) => (scroll ? "scroll" : "visible")};
    @media screen and (max-height: 1000px) {
      min-height: 200px;
    }
  }
`;

const StyledNoResults = styled.div`
  margin: ${({ theme }: IStyledClientsUI) =>
    `${theme?.spacing?.s200 || inube.spacing.s200} ${
      theme?.spacing?.s0 || inube.spacing.s0
    }`};
`;

const StyledClientsItem = styled.li`
  width: 100%;
`;

export { StyledClients, StyledClientsList, StyledNoResults, StyledClientsItem };
