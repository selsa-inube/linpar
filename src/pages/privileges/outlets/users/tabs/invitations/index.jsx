import { Table } from "@src/components/data/Table";
import { invitationEntriesDataMock } from "@mocks/apps/privileges/invitations.mock";
import {
  invitationActionsConfig,
  invitationBreakpointsConfig,
  invitationTitlesConfig,
} from "../../config/invitationsTable.config";

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
