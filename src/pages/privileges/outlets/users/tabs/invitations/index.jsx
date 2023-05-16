import { Table } from "../../../../../../components/data/Table";
import { invitationEntriesDataMock } from "../../../../../../mocks/apps/privileges/invitations.mock";
import {
  invitationsTableActions,
  invitationsTableBreakpoints,
  invitationsTableTitles,
} from "../../config/invitationsTable.config";

export default function InvitationsTab(props) {
  const { searchText } = props;

  return (
    <Table
      titles={invitationsTableTitles}
      entries={invitationEntriesDataMock}
      actions={invitationsTableActions}
      breakPoints={invitationsTableBreakpoints}
      filter={searchText}
    />
  );
}
