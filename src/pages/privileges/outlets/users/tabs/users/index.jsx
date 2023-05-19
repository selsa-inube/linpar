import { Table } from "../../../../../../components/data/Table";
import { userEntriesDataMock } from "../../../../../../mocks/apps/privileges/users.mock";
import { SectionMessage } from "../../../../../../components/feedback/SectionMessage";
import { sectionMessageConfig } from "../../config/deleteUser.config";
import { MdModeEdit, MdToggleOff } from "react-icons/md";
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

  const handleDeleteUser = (user) => {
    let MessageType = "success";

    try {
      setUsers((prevUsers) =>
        prevUsers.filter((oldUser) => user.id !== oldUser.id)
      );
    } catch (error) {
      MessageType = "failed";
    }

    const { icon, title, description, appearance } =
      sectionMessageConfig[MessageType];

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
      content: <MdToggleOff size={32} />,
      type: "secondary",
    },
    {
      id: 2,
      actionName: "Edit",
      content: <MdModeEdit />,
      type: "primary",
    },
    {
      id: 3,
      actionName: "Delete",
      content: (user) => (
        <DeleteUser user={user} handleDeleteUser={handleDeleteUser} />
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
