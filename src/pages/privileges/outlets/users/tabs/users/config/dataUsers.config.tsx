import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";

import { Icon } from "@inube/design-system";
import { IGeneralInformationUsersForm } from "@services/users/users.types";
import { deleteItemData } from "@mocks/utils/dataMock.service";

import { deleteLinixUsersModal } from "../DeleteModal/config/deleteLinixUsers.config";
import { ActivateUsers } from "../ActivateFormOptions";
import { activateUsersModal } from "../ActivateFormOptions/config/activateUsers.config";
import { DeleteLinixUsers } from "../DeleteModal";
import { IDeleteForMessage } from "../types";
import { CenteredTd } from "../styles";

export const actionsConfigUsers = (
  smallScreen: boolean,
  users: IGeneralInformationUsersForm[],
  setIdDeleted: (show: IDeleteForMessage) => void
) => {
  const invitationsTableActions = [
    {
      id: "i_Activo",
      actionName: "Activo",
      content: (users: IGeneralInformationUsersForm) => (
        <CenteredTd>
          <ActivateUsers
            handleActivate={() => {}}
            data={{
              id: users.k_Usuari,
              active: users.i_Activo,
              name: users.n_Usuari,
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
      content: ({ k_Usuari }: { k_Usuari: string }) => (
        <Link to={`edit/${k_Usuari}`}>
          <Icon appearance="dark" cursorHover icon={<MdModeEdit />} />
        </Link>
      ),
      type: "primary",
    },
    {
      id: "Delete",
      actionName: "Eliminar",
      content: ({ k_Usuari }: { k_Usuari: string }) => (
        <DeleteLinixUsers
          linixUsers={k_Usuari}
          deleteLinixUsersModal={deleteLinixUsersModal}
          handleDeleteLinixUser={deleteItemData}
          setIdDeleted={setIdDeleted}
          nameLinixuser={k_Usuari}
        />
      ),
      type: "remove",
    },
  ];
  return invitationsTableActions;
};
