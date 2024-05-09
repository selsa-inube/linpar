import { useState } from "react";
import {
  Table,
  useMediaQuery,
  SectionMessage,
  Stack,
} from "@inube/design-system";

import { userEntriesDataMock } from "@mocks/apps/privileges/users/users.mock";
import {
  usersBreakPointsConfig,
  usersTitlesConfig,
} from "@pages/privileges/outlets/users/config/usersTable.config";
import { ActivateFormOptions } from "@pages/privileges/outlets/forms/ActivateFormOptions";
import { deleteUserModal } from "@pages/privileges/outlets/users/config/deleteUser.config";
import { activateUserMessages } from "@pages/privileges/outlets/users/config/activateUser.config";
import { activateUserModal } from "@pages/privileges/outlets/users/config/activateUser.config";

import { EAppearance } from "@src/types/colors.types";
import { EMessageType, IMessage } from "@src/types/messages.types";
import { DeleteFormOptions } from "@pages/privileges/outlets/forms/DeleteModal";

import { EditUser } from "./EditUser";
import { StyledMessageContainer } from "./styles";
import { IGeneralInformationEntry } from "@src/services/users/users.types";

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
  const [users, setUsers] = useState(userEntriesDataMock);
  const [message, setMessage] = useState(initialMessageState);

  const handleActivateUser = (user: IGeneralInformationEntry) => {
    let messageType = EMessageType.ACTIVATION;

    const newUsers = users.map((actUser) => {
      if (actUser.k_Usuari === user.k_Usuari) {
        return {
          ...actUser,
          active: !actUser.i_Activo,
        };
      }
      return actUser;
    });

    setUsers(newUsers);

    if (user.i_Activo) {
      messageType = EMessageType.DEACTIVATION;
    }

    const { title, description, icon, appearance } =
      activateUserMessages[messageType];

    handleShowMessage({
      title,
      description: description(user),
      icon,
      appearance,
    });
  };

  const handleShowMessage = (message: IMessage) => {
    const { title, description, icon, appearance } = message;
    setMessage({
      show: true,
      title,
      description,
      icon,
      appearance,
    });
  };

  const onCloseMessage = () => {
    setMessage(initialMessageState);
  };

  const smallScreen = useMediaQuery("(max-width: 850px)");
  const selectedData = (k_Usuari: string) =>
    users.find((user) => user.k_Usuari === k_Usuari);

  const actions = [
    {
      id: "1",
      actionName: "Activar",
      content: (user: IGeneralInformationEntry) => (
        <ActivateFormOptions<IGeneralInformationEntry>
          data={user}
          handleActivate={() => handleActivateUser(user)}
          showComplete={smallScreen}
          activateModalConfig={activateUserModal}
        />
      ),
      type: "gray",
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
      <Table
        id="portal"
        titles={usersTitlesConfig}
        actions={actions}
        entries={users}
        breakpoints={usersBreakPointsConfig}
        filter={searchText}
        modalTitle="Usuario"
      />
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
