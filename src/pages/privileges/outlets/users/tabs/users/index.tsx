import {
  SectionMessage,
  SectionMessageProps,
} from "@components/feedback/SectionMessage";
import { Table, useMediaQuery } from "@inube/design-system";
import { userEntriesDataMock } from "@mocks/apps/privileges/users/users.mock";
import { useState } from "react";
import { activateUserMessages } from "../../config/activateUser.config";
import { deleteUserMessages } from "../../config/deleteUser.config";
import {
  usersBreakPointsConfig,
  usersTitlesConfig,
} from "../../config/usersTable.config";
import { ActivateUser } from "./ActivateUser";
import { DeleteUser } from "./DeleteUser";
import { EditUser } from "./EditUser";
import {
  IGeneralInformationEntry,
  IInitialMessage,
} from "../../types/forms.types";
import { EApparence } from "@src/types/colors.types";
import { EMessageType } from "@src/types/messages.types";

const initialMessageState: IInitialMessage = {
  show: false,
  title: "",
  description: "",
  icon: "",
  appearance: "" as EApparence,
};

interface UsersTabProps {
  searchText: string;
}

function UsersTab(props: UsersTabProps) {
  const { searchText } = props;
  const [users, setUsers] = useState(userEntriesDataMock);
  const [message, setMessage] = useState<IInitialMessage>(initialMessageState);

  const deleteUser = (user: IGeneralInformationEntry) => {
    let MessageType = EMessageType.SUCCESS;

    try {
      setUsers((prevUsers) =>
        prevUsers.filter((oldUser) => user.id !== oldUser.id)
      );
    } catch (error) {
      MessageType = EMessageType.FAILED;
    }

    const { icon, title, description, appearance } =
      deleteUserMessages[MessageType];

    handleShowMessage({
      title,
      description: description(user),
      icon,
      appearance,
    });
  };

  const handleActivateUser = (user: IGeneralInformationEntry) => {
    let messageType = EMessageType.ACTIVATION;

    const newUsers = users.map((actUser) => {
      if (actUser.id === user.id) {
        return {
          ...actUser,
          active: !actUser.active,
        };
      }
      return actUser;
    });

    setUsers(newUsers);

    if (user.active) {
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

  const handleShowMessage = (props: IInitialMessage) => {
    const { title, description, icon, appearance } = props;
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

  const actions = [
    {
      id: "1",
      actionName: "Activate",
      content: (user: IGeneralInformationEntry) => (
        <ActivateUser
          user={user}
          handleActivateUser={() => handleActivateUser(user)}
          showComplete={smallScreen}
        />
      ),
      type: "secondary",
    },
    {
      id: "2",
      actionName: "Edit",
      content: (entry: IGeneralInformationEntry) => (
        <EditUser entry={entry} showComplete={smallScreen} />
      ),
      type: "primary",
    },
    {
      id: "3",
      actionName: "Delete",
      content: (user: IGeneralInformationEntry) => (
        <DeleteUser
          user={user}
          handleDeleteUser={() => deleteUser(user)}
          showComplete={smallScreen}
        />
      ),
      type: "remove",
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
        <SectionMessage
          title={message.title}
          description={message.description}
          icon={message.icon}
          appearance={message.appearance}
          duration={1500}
          closeSectionMessage={onCloseMessage}
        />
      )}
    </>
  );
}

export { UsersTab };
