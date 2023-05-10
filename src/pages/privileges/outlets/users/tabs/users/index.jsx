import { Table } from "../../../../../../components/data/Table";
import { userEntriesDataMock } from "../../../../../../mocks/apps/privileges/users.mock";
import {
  usersActionsConfig,
  usersBreakPointsConfig,
  usersTitlesConfig,
} from "../../config/usersTable.config";

export default function UsersTab(props) {
  const { searchText } = props;

  return (
    <Table
      titles={usersTitlesConfig}
      entries={userEntriesDataMock}
      actions={usersActionsConfig}
      breakPoints={usersBreakPointsConfig}
      filter={searchText}
    />
  );
}
