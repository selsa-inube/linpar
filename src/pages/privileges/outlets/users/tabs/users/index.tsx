import { useEffect, useState } from "react";

import {
  Table,
  useMediaQuery,
  SectionMessage,
  Stack,
} from "@inube/design-system";
import {
  usersBreakPointsConfig,
  usersTitlesConfig,
} from "@pages/privileges/outlets/users/config/usersTable.config";
import { deleteUserModal } from "@pages/privileges/outlets/users/config/deleteUser.config";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { EAppearance } from "@src/types/colors.types";
import { IMessage } from "@src/types/messages.types";
import { DeleteFormOptions } from "@pages/privileges/outlets/forms/DeleteModal";
import { IGeneralInformationEntry } from "@src/services/users/users.types";
import { getAll } from "@mocks/utils/dataMock.service";

import { EditUser } from "./EditUser";
import { StyledMessageContainer } from "./styles";
import { ActivateUsers } from "./ActivateFormOptions";
import { activateUsersModal } from "./ActivateFormOptions/config/activateUsers.config";

const initialMessageState: IMessage = {
  show: false,
  title: "",
  description: "",
  icon: <></>,
  appearance: "" as EAppearance,
};

interface UsersTabProps {
  searchText: string;
}

function UsersTab(props: UsersTabProps) {
  const { searchText } = props;
  const [users, setUsers] = useState<IGeneralInformationEntry[]>([]);
  const [message, setMessage] = useState(initialMessageState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAll("linix-users")
      .then((data) => {
        if (data !== null) {
          setUsers(data as IGeneralInformationEntry[]);
        }
      })
      .catch((error) => {
        console.info(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [users]);

  const onCloseMessage = () => {
    setMessage(initialMessageState);
  };

  const smallScreen = useMediaQuery("(max-width: 850px)");
  const selectedData = (k_Usuari: string) =>
    users.find((user) => user.k_Usuari === k_Usuari);

  const actions = [
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
      id: "3",
      actionName: "Eliminar",
      content: ({ k_Usuari }: { k_Usuari: string }) => {
        const user = selectedData(k_Usuari);
        const adjusteduser = {
          id: user?.k_Usuari || "",
        };

        return (
          <DeleteFormOptions
            data={adjusteduser}
            showComplete={false}
            modalConfig={deleteUserModal}
          />
        );
      },
      type: "error",
    },
  ];

  return (
    <>
      {loading ? (
        <LoadingApp />
      ) : (
        <Table
          id="portal"
          titles={usersTitlesConfig}
          actions={actions}
          entries={users}
          breakpoints={usersBreakPointsConfig}
          filter={searchText}
          modalTitle="Usuario"
        />
      )}
      {message.show && (
        <StyledMessageContainer>
          <Stack justifyContent="flex-end" width="100%">
            <SectionMessage
              title={message.title}
              description={message.description}
              icon={message.icon}
              appearance={message.appearance}
              duration={4000}
              closeSectionMessage={onCloseMessage}
            />
          </Stack>
        </StyledMessageContainer>
      )}
    </>
  );
}

export { UsersTab };
