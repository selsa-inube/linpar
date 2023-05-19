import { Table } from "../../../../../../components/data/Table";
import { userEntriesDataMock } from "../../../../../../mocks/apps/privileges/users.mock";
import { MdModeEdit, MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import {
  usersBreakPointsConfig,
  usersTitlesConfig,
} from "../../config/usersTable.config";
import { ActivateUser } from "./ActivateUser";

export default function UsersTab(props) {
  const { searchText } = props;

  const [users, setUsers] = useState(userEntriesDataMock);

  const handleActivateUser = (active) => {
    return !active;
  };

  const actions = [
    {
      id: 1,
      actionName: "Activate",
      content: (user) => (
        <ActivateUser user={user} handleActivateUser={handleActivateUser} />
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

  return (
    <>
      <Table
        titles={usersTitlesConfig}
        entries={users}
        actions={actions}
        breakPoints={usersBreakPointsConfig}
        filter={searchText}
      />
    </>
  );
}
