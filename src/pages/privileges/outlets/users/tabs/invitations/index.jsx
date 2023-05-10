import { Table } from "../../../../../../components/data/Table";
import { invitationEntriesDataMock } from "../../../../../../mocks/apps/privileges/users.mock";
import {
  invitationActionsConfig,
  invitationBreakpointsConfig,
  invitationTitlesConfig,
} from "../../config/dataTableInvitations.config";

export default function InvitationsTab(props) {
  const { searchText } = props;

  return (
    <Table
      titles={invitationTitlesConfig}
      entries={invitationEntriesDataMock}
      actions={invitationActionsConfig}
      breakPoints={invitationBreakpointsConfig}
      filter={searchText}
    />
  );
}
