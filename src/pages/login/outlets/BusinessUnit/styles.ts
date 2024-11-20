import styled from "styled-components";

interface StyledBusinessUnitsListProps {
  $scroll?: boolean;
}

const StyledBusinessUnits = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  & form {
    & > div {
      margin: "48px 0";
      width: 500px;
      @media screen and (max-width: 532px) {
        width: auto;
      }
    }
  }

  & button {
    margin-top: "24px";
  }
`;

const StyledBusinessUnitsText = styled.div`
  @media screen and (max-width: 532px) {
  }
`;

const StyledBusinessUnitsList = styled.div<StyledBusinessUnitsListProps>`
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
  margin: "16px 0";
`;

const StyledBusinessUnitsItem = styled.li`
  width: 100%;
`;

export {
  StyledBusinessUnits,
  StyledBusinessUnitsList,
  StyledNoResults,
  StyledBusinessUnitsItem,
  StyledBusinessUnitsText,
};
