import { Table } from "@inube/design-system";

import { StyledContainerActions } from "./styles";
import { usersBreakPointsConfig } from "../config/usersTable.config";
import {
  MdDelete,
  MdModeEdit,
  MdOutlineAssignmentTurnedIn,
} from "react-icons/md";

const actionsMuck = [
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
    id: "Deleten ",
    actionName: "Eliminar",
    content: () => (
      <StyledContainerActions>
        <MdDelete />
      </StyledContainerActions>
    ),
    type: "remove",
  },
];
const titlesMuck = [
  {
    id: "code",
    titleName: "Code",
    priority: 1,
  },

  {
    id: "username",
    titleName: "Nombre",
    priority: 2,
  },

  {
    id: "Guy",
    titleName: "Tipo",
    priority: 0,
  },
];

const entries = [
  {
    id: "11",
    username: "David Leonardo Garzón",
    code: 1121212,
    Guy: "d.garzon@sistemasenliena.com.co",
    position: "Credit Analyst",
  },
  {
    id: "12",
    username: "Angie Pinilla",
    code: 23123213,
    Guy: "d.garzon@sistemasenliena.com.co",
    position: "Adviser",
  },
  {
    id: "13",
    username: "Cristian Rojas",
    code: 3123213,
    Guy: "d.garzon@sistemasenliena.com.co",
    position: "Credit Analyst",
  },
  {
    id: "14",
    username: "Johan Nova",
    code: 1233123,
    Guy: "d.garzon@sistemasenliena.com.co",
    position: "Adviser",
  },
];
function UsersCaseLinixTabs() {
  return (
    <Table
      id="portal"
      titles={titlesMuck}
      actions={actionsMuck}
      entries={entries}
      breakpoints={usersBreakPointsConfig}
      modalTitle="Caso de uso"
    />
  );
}

export { UsersCaseLinixTabs };
