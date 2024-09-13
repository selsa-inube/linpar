import styled from "styled-components";
import { inube } from "@inube/design-system";

interface StyledBussinessUnitsListProps {
  $scroll?: boolean;
}

const StyledBussinessUnits = styled.div`
  & form {
    & > div {
      margin: ${({ theme }) =>
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
    margin-top: ${({ theme }) =>
      `${theme?.spacing?.s300 || inube.spacing.s300}`};
  }
`;

const StyledBussinessUnitsList = styled.div<StyledBussinessUnitsListProps>`
  & > div {
    list-style: none;
    min-height: 300px;
    max-height: 430px;
    width: inherit;
    overflow-y: ${({ $scroll }) => ($scroll ? "scroll" : "visible")};
    @media screen and (max-height: 1000px) {
      min-height: 200px;
    }
  }
`;

const StyledNoResults = styled.div`
  margin: ${({ theme }) =>
    `${theme?.spacing?.s200 || inube.spacing.s200} ${
      theme?.spacing?.s0 || inube.spacing.s0
    }`};
`;

const StyledBussinessUnitsItem = styled.li`
  width: 100%;
`;

export {
  StyledBussinessUnits,
  StyledBussinessUnitsList,
  StyledNoResults,
  StyledBussinessUnitsItem,
};
