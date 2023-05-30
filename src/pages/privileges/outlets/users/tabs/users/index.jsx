import { Table } from "@components/data/Table";
import { userEntriesDataMock } from "@mocks/apps/privileges/users.mock";
import { SectionMessage } from "@components/feedback/SectionMessage";
import { deleteUserMessages } from "../../config/deleteUser.config";
import { activateUserMessages } from "../../config/activateUser.config";
import { ActivateUser } from "./ActivateUser";
import { EditUser } from "./EditUser";
import { DeleteUser } from "./DeleteUser";
import { useState } from "react";
import {
  usersBreakPointsConfig,
  usersTitlesConfig,
} from "../../config/usersTable.config";

const initialMessageState = {
  show: false,
  title: "",
  description: "",
  icon: "",
  appearance: "",
};

export default function UsersTab(props) {
  const { searchText } = props;
  const [users, setUsers] = useState(userEntriesDataMock);
  const [message, setMessage] = useState(initialMessageState);

  const deleteUser = (user) => {
    let MessageType = "success";

    try {
      setUsers((prevUsers) =>
        prevUsers.filter((oldUser) => user.id !== oldUser.id)
      );
    } catch (error) {
      MessageType = "failed";
    }

    const { icon, title, description, appearance } =
      deleteUserMessages[MessageType];

    handleShowMessage(title, description(user), icon, appearance);
  };

  const activationUser = (actUsers, id) => {
    const activeUsers = actUsers.map((actUser) => {
      if (actUser.id === id) {
        return {
          ...actUser,
          active: !actUser.active,
        };
      }
      return actUser;
    });

    return activeUsers;
  };

  const handleActivateUser = (user) => {
    let messageType = "activate";
    try {
      setUsers((prevUsers) => activationUser(prevUsers, user.id));

      if (user.active) {
        messageType = "deactivate";
      }
    } catch (error) {
      messageType = "failed";
    }

    const { title, description, icon, appearance } =
      activateUserMessages[messageType];

    handleShowMessage(title, description(user), icon, appearance);
  };

  const handleShowMessage = (title, description, icon, appearance) => {
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

  const actions = [
    {
      id: 1,
      actionName: "Activate",
      content: (user) => (
        <ActivateUser
          user={user}
          handleActivateUser={() => handleActivateUser(user)}
        />
      ),
      type: "secondary",
    },
    {
      id: 2,
      actionName: "Edit",
      content: (entry) => <EditUser entry={entry} />,
      type: "primary",
    },
    {
      id: 3,
      actionName: "Delete",
      content: (user) => (
        <DeleteUser user={user} handleDeleteUser={() => deleteUser(user)} />
      ),
      type: "remove",
    },
  ];

  return (
    <>
      <Table
        titles={usersTitlesConfig}
        entries={users}
        actions={actions}
        breakPoints={usersBreakPointsConfig}
        filter={searchText}
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
