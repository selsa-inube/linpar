import styled, { css } from "styled-components";
import { colors } from "../../../styles/colors";

const StyledTable = styled.table`
  box-sizing: border-box;
  border-collapse: collapse;
  table-layout: auto;
  width: 100%;
`;

const StyledThead = styled.thead`
  border-bottom: solid 1px ${colors.ref.palette.neutral.n40};
  background-color: ${colors.ref.palette.neutral.n0};

  & > tr > th:nth-last-child(4) {
    ${(props) =>
      props.size === "desktopMedium" &&
      css`
        display: none;
      `}
  }

  & > tr > th:nth-last-child(5),
  & > tr > th:nth-last-child(4) {
    ${(props) =>
      props.size === "desktopSmall" &&
      css`
        display: none;
      `}
  }

  & > tr > th:nth-last-child(2) {
    ${(props) =>
      props.size === "tabletMedium" &&
      css`
        display: none;
      `}
  }

  & > tr > th:nth-last-child(2),
  & > tr > th:nth-last-child(3) {
    ${(props) =>
      props.size === "tabletSmall" &&
      css`
        display: none;
      `}
  }

  & > tr > th:nth-last-child(2),
  & > tr > th:nth-last-child(3),
  & > tr > th:nth-last-child(4) {
    ${(props) =>
      props.size === "mobile" &&
      css`
        display: none;
      `}
  }
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

  &:nth-last-child(4) {
    ${(props) =>
      props.size === "desktopMedium" &&
      css`
        display: none;
      `}
  }

  &:nth-last-child(5),
  &:nth-last-child(4) {
    ${(props) =>
      props.size === "desktopSmall" &&
      css`
        display: none;
      `}
  }

  &:nth-last-child(2) {
    ${(props) =>
      props.size === "tabletMedium" &&
      css`
        display: none;
      `}
  }

  &:nth-last-child(2),
  &:nth-last-child(3) {
    ${(props) =>
      props.size === "tabletSmall" &&
      css`
        display: none;
      `}
  }

  &:nth-last-child(2),
  &:nth-last-child(3),
  &:nth-last-child(4) {
    ${(props) =>
      props.size === "mobile" &&
      css`
        display: none;
      `}
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
