import { deleteItemData } from "@mocks/utils/dataMock.service";
import { IGeneralInformationEntry } from "@src/services/users/users.types";

import { DeleteLinixUsers } from "../DeleteModal";
import { deleteLinixUsersModal } from "../DeleteModal/config/deleteLinixUsers.config";
import { ActivateUsers } from "../ActivateFormOptions";
import { activateUsersModal } from "../ActivateFormOptions/config/activateUsers.config";
import { EditUser } from "../EditUser";

export const actionsConfigUsers = (
  smallScreen: boolean,
  users: IGeneralInformationEntry[]
) => {
  const selectedData = (k_Usuari: string) =>
    users.find((user) => user.k_Usuari === k_Usuari);
  const invitationsTableActions = [
    {
      id: "i_activo",
      actionName: "Activo",
      content: ({ k_Usuari }: { k_Usuari: string }) => {
        const Users = selectedData(k_Usuari);
        const adjustedUsers = {
          id: Users?.k_Usuari || "",
          active: Users?.i_Activo === "Y" || false,
          name: Users?.n_Usuari || "",
        };
        return (
          <ActivateUsers
            handleActivate={() => {}}
            data={adjustedUsers}
            showComplete={false}
            activateModalConfig={activateUsersModal}
          />
        );
      },
      type: "secondary",
    },
    {
      id: "2",
      actionName: "Editar",
      content: (entry: IGeneralInformationEntry) => (
        <EditUser entry={entry} showComplete={smallScreen} />
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
          handleDeleteLinixUsers={deleteItemData}
        />
      ),
      type: "remove",
    },
  ];
  return invitationsTableActions;
};
