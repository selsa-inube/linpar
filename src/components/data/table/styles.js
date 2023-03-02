import styled from "styled-components";
import { colors } from "../../../styles/colors";

const StyledContentTable = styled.div`
  box-sizing: border-box;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  table-layout: initial;
  width: 100%;
`;

const StyledTableThead = styled.thead`
  border-bottom: solid 1px ${colors.ref.palette.neutral.n40};
  background-color: ${colors.ref.palette.neutral.n0};
`;

const StyledTableTbody = styled.tbody`
  background-color: ${colors.ref.palette.neutral.n0};
`;

const StyledTableTr = styled.tr``;

const StyledTableTh = styled.th`
  padding: 12px 16px;
  &:nth-last-of-type(-n + 3) {
    background-color: ${colors.ref.palette.neutral.n30};
    width: 80px;
  }
`;

const StyledTableTd = styled.td`
  border-bottom: solid 1px ${colors.ref.palette.neutral.n40};
  padding: 12px 16px;
  text-align: center;

  &:nth-last-of-type(3) > svg {
    color: ${colors.ref.palette.neutral.n200};
  }

  &:nth-last-of-type(-n + 2) > svg {
    color: ${colors.ref.palette.neutral.n900};
  }

  &:nth-last-of-type(1) > svg:hover {
    color: ${colors.ref.palette.red.r300};
  }

  &:nth-last-of-type(2) > svg:hover {
    color: ${colors.ref.palette.blue.b400};
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
