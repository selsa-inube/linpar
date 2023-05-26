import { Table } from "../../../../../../components/data/Table";
import { userEntriesDataMock } from "../../../../../../mocks/apps/privileges/users.mock";
import { MdModeEdit, MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import {
  usersBreakPointsConfig,
  usersTitlesConfig,
} from "../../config/usersTable.config";
import { ActivateUser } from "./ActivateUser";
import { SectionMessage } from "../../../../../../components/feedback/SectionMessage";
import { activateUserMessages } from "../../config/activateUser.config";

const initialMessageState = {
  show: false,
  title: "",
  description: "",
  icon: "",
  appearance: "",
};

export default function UsersTab(props) {
  const { searchText } = props;
  const [message, setMessage] = useState(initialMessageState);
  const [users] = useState(userEntriesDataMock);

  const actions = [
    {
      id: 1,
      actionName: "Activate",
      content: (user) => (
        <ActivateUser
          user={user}
          handleActivateUser={(active) => handleActivateUser(user, active)}
        />
      ),
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
      content: <MdOutlineDelete />,
      type: "remove",
    },
  ];
  const handleActivateUser = (user, active) => {
    let messageType = "activate";
    if (active) {
      messageType = "deactivate";
    }

    const { title, description, icon, appearance } =
      activateUserMessages[messageType];

    handleShowMessage(title, description(user), icon, appearance);
    return !active;
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

  const handleCloseMessage = () => {
    setMessage(initialMessageState);
  };

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
          duration={2000}
          closeSectionMessage={handleCloseMessage}
        />
      )}
    </>
  );
}
