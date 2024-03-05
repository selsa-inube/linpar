import styled from "styled-components";
import {
  MdDelete,
  MdModeEdit,
  MdOutlineAssignmentTurnedIn,
} from "react-icons/md";

import { inube } from "@inube/design-system";

const useCasesBreakPointsConfig = [
  { breakpoint: "(min-width: 1091px)", totalColumns: 4 },
  { breakpoint: "(max-width: 1090px)", totalColumns: 3 },
  { breakpoint: "(max-width: 1002px)", totalColumns: 2 },
  { breakpoint: "(max-width: 837px)", totalColumns: 3 },
  { breakpoint: "(max-width: 550px)", totalColumns: 2 },
  { breakpoint: "(max-width: 360px)", totalColumns: 1 },
];

const titlesOptions = [
  {
    id: "code",
    titleName: "Code",
    priority: 0,
  },

  {
    id: "linixUseCaseName",
    titleName: "Nombre",
    priority: 1,
  },

  {
    id: "Type",
    titleName: "Tipo",
    priority: 2,
  },
];

const actionsConfig = [
  {
    id: "Details",
    actionName: "Detalles",
    content: () => (
      <StyledContainerActions>
        <MdOutlineAssignmentTurnedIn />
      </StyledContainerActions>
    ),
    type: "secondary",
  },
  {
    id: "Edit",
    actionName: "Editar",
    content: () => (
      <StyledContainerActions>
        <MdModeEdit />
      </StyledContainerActions>
    ),
    type: "primary",
  },
  {
    id: "Delete",
    actionName: "Eliminar",
    content: () => (
      <StyledContainerActions>
        <MdDelete />
      </StyledContainerActions>
    ),
    type: "remove",
  },
];

const StyledContainerActions = styled.div`
  > svg {
    width: 16px;
    height: 16px;
    cursor: pointer;
    padding: 2px;
  }

  & :hover {
    color: ${inube.color.stroke.gray.hover};
  }
`;

export { useCasesBreakPointsConfig, titlesOptions, actionsConfig };
