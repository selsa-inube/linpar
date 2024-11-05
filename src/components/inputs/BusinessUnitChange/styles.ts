import styled from "styled-components";
import { inube } from "@inubekit/foundations";
import { tokens } from "@design/tokens";

export const StyledContainer = styled.div`
  box-shadow: 2px 2px 3px 2px
    ${({ theme }) => theme?.palette?.neutral?.N30 || inube.palette.neutral.N30};
  border-radius: ${tokens.spacing.s100};
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
  margin-left: 10px;
  z-index: 3;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${tokens.spacing.s0};
  padding: ${tokens.spacing.s0} ${tokens.spacing.s025} ${tokens.spacing.s0}
    ${tokens.spacing.s025};
`;

export const StyledLi = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  &:hover {
    background-color: ${inube.palette.neutral.N30};
    border-radius: ${tokens.spacing.s100};
  }
`;

export const StyledContainerOption = styled.div`
  cursor: pointer;
`;

export const StyledImg = styled.img`
  position: relative;
  width: 75px;
  height: auto;
  left: 5px;
  padding: ${tokens.spacing.s150} ${tokens.spacing.s150} ${tokens.spacing.s150}
    ${tokens.spacing.s100};
  object-fit: contain;
`;

export const StyledHr = styled.hr`
  position: absolute;
  padding-left: 10px;
  width: 180px;
  border-top: 1px solid;
  border-color: ${({ theme }) =>
    theme?.palette?.neutral?.N40 || inube.palette.neutral.N40};
  margin: ${tokens.spacing.s0};
`;
