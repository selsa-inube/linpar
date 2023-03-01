import styled from "styled-components";
import { colors } from "../../../styles/colors";

const StyledContentTable = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  table-layout: initial;
  width: 100%;
`;

const StyledTableThead = styled.thead`
  background-color: ${colors.ref.palette.neutral.n0};
`;

const StyledTableTbody = styled.tbody`
  background-color: ${colors.ref.palette.neutral.n0};
`;

const StyledTableTr = styled.tr``;

const StyledTableTh = styled.th`
  padding: 12px 16px 12px;
  &:nth-last-of-type(1),
  &:nth-last-of-type(2),
  &:nth-last-of-type(3) {
    background-color: ${colors.ref.palette.neutral.n30};
    width: 30px;
  }
`;

const StyledTableTd = styled.td`
  border-bottom: solid 2px;
  border-color: ${colors.ref.palette.neutral.n30};
  padding: 12px 16px 12px;
  text-align: center;

  & svg {
    width: 32px;
    height: 16px;
  }

  & svg:hover {
    color: ${colors.ref.palette.red.r300};
  }
`;

export {
  StyledContentTable,
  StyledTable,
  StyledTableThead,
  StyledTableTbody,
  StyledTableTr,
  StyledTableTh,
  StyledTableTd,
};
