import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";

import { Icon } from "@inubekit/icon";
import { IGeneralInformationUsersForm } from "@services/users/users.types";
import { deleteItemData } from "@mocks/utils/dataMock.service";
import { Text } from "@inubekit/text";
import { deleteLinixUsersModal } from "../DeleteModal/config/deleteLinixUsers.config";
import { ActivateUsers } from "../ActivateFormOptions";
import { activateUsersModal } from "../ActivateFormOptions/config/activateUsers.config";
import { DeleteLinixUsers } from "../DeleteModal";
import { IDeleteForMessage } from "../types";
import {
  CenteredTd,
  StyledContainerEdit,
  StyledContainerIcon,
} from "../styles";
import { IEntry } from "@src/components/data/TableLinpar/types";

export const actionsConfigUsers = (
  smallScreen: boolean,
  users: IGeneralInformationUsersForm[],
  setIdDeleted: (show: IDeleteForMessage) => void
) => {
  const invitationsTableActions = [
    {
      id: "i_Activo",
      actionName: "Activo",
      content: (entry: IEntry) => (
        <CenteredTd>
          <ActivateUsers
            handleActivate={() => {}}
            data={{
              id: entry.k_Usuari || "",
              active: entry.i_Activo,
              name: entry.n_Usuario,
            }}
            showComplete={false}
            activateModalConfig={activateUsersModal}
          />
        </CenteredTd>
      ),
      type: "secondary",
    },
    {
      id: "Edit",
      actionName: "Editar",
      content: (entry: IEntry) => (
        <StyledContainerEdit>
          <Link to={`edit/${entry.k_Usuari}`}>
            <StyledContainerIcon>
              <Icon
                appearance="dark"
                cursorHover
                icon={<MdModeEdit />}
                size="16px"
              />
            </StyledContainerIcon>
            <Text size="small" type="body">
              Editar
            </Text>
          </Link>
        </StyledContainerEdit>
      ),
      type: "primary",
    },
    {
      id: "Delete",
      actionName: "Eliminar",
      content: (entry: IEntry) => (
        <DeleteLinixUsers
          linixUsers={entry.k_Usuari}
          deleteLinixUsersModal={deleteLinixUsersModal}
          handleDeleteLinixUser={deleteItemData}
          setIdDeleted={setIdDeleted}
          nameLinixuser={entry.k_Usuari}
        />
      ),
      type: "remove",
    },
  ];
  return invitationsTableActions;
};
