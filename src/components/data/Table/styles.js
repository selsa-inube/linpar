import styled from "styled-components";
import { colors } from "@styles/colors";

const StyledTable = styled.table`
  box-sizing: border-box;
  border-collapse: collapse;
  table-layout: auto;
  width: 100%;
`;

const StyledThead = styled.thead`
  border-bottom: solid 1px ${colors.ref.palette.neutral.n40};
  background-color: ${colors.ref.palette.neutral.n0};
`;

const StyledTbody = styled.tbody`
  background-color: ${colors.ref.palette.neutral.n0};
`;

const StyledTr = styled.tr`
  border-bottom: solid 1px ${colors.ref.palette.neutral.n40};
  height: 40px;
`;

const StyledThTitle = styled.th`
  padding: 12px 16px;
`;

const StyledThAction = styled.th`
  background-color: ${colors.ref.palette.neutral.n30};
  width: 80px;
  padding: 12px 0px;
`;

const StyledTd = styled.td`
  padding: 0px 16px;
  text-align: center;

  div {
    justify-content: center;
    gap: 0 !important;
  }
`;

export {
  StyledTable,
  StyledThead,
  StyledTbody,
  StyledTr,
  StyledTd,
  StyledThAction,
  StyledThTitle,
};
