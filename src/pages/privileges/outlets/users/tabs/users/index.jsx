import { Table } from "@components/data/Table";
import { SectionMessage } from "@components/feedback/SectionMessage";
import { userEntriesDataMock } from "@mocks/apps/privileges/users.mock";
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

const initialMessageState = {
  show: false,
  title: "",
  description: "",
  icon: "",
  appearance: "",
};

function UsersTab(props) {
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

  const handleActivateUser = (user) => {
    let messageType = "activate";

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
      messageType = "deactivate";
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

export { UsersTab }
