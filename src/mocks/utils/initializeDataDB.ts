import localforage from "localforage";

import { intializedData } from "@src/mocks/utils/dataMock.service";
import { intializedTokenData } from "@mocks/themeService/themeService.mock";
import { DocumentsServiceMock } from "@mocks/privileges/documents/DocumentsServiceMock.mock";
import { clientServerMock } from "@mocks/privileges/client-server/client-serverServiceMock.mock";
import { buttonOptionsMock } from "@mocks/privileges/button/buttonOptionsMock.mock";
import { webOptionsMock } from "@mocks/privileges/web/webOptionsMock.mock";
import { linixUseCases } from "@mocks/privileges/linixUseCases/LinixUseCases.mock";
import { mockRoles } from "@mocks/privileges/roles/Roles.mock";
import { mockActions } from "@mocks/privileges/actions/Actions.mock";
import { MockPositions } from "@mocks/privileges/positions/Positions.mock";
import { userEntriesDataMock } from "@mocks/apps/privileges/users/users.mock";
import { invitationEntriesDataMock } from "@mocks/apps/privileges/invitations/invitations.mock";
import { branchesFormEditUser } from "@mocks/apps/privileges/users/branchesForm.mock";
import { projectsFormEditUser } from "@mocks/apps/privileges/users/projectsForm.mock";
import { eventsFormEditUser } from "@mocks/apps/privileges/users/eventsForm.mock";
import { aidBudgetsFormEditUser } from "@mocks/apps/privileges/users/aidBudgetsForm.mock";
import { payrollsFormEditUser } from "@mocks/apps/privileges/users/payrollsForm.mock";
import { branchesFormInvitation } from "@mocks/apps/privileges/invitations/branchesForm.mock";
import { projectsFormInvitation } from "@mocks/apps/privileges/invitations/projectsForm.mock";
import { eventsFormInvitation } from "@mocks/apps/privileges/invitations/eventsForm.mock";
import { aidBudgetsFormInvitation } from "@mocks/apps/privileges/invitations/aidBudgetsForm.mock";
import { payrollsFormInvitation } from "@mocks/apps/privileges/invitations/payrollsForm.mock";
import { invitationUserEntriesDataMock } from "@mocks/apps/privileges/invitations/invitationUsers.mock";

export function initializeDataDB() {
  localforage.clear();

  intializedTokenData();
  intializedData<typeof DocumentsServiceMock[number]>(
    "documents",
    DocumentsServiceMock
  );

  intializedData<typeof clientServerMock[number]>(
    "clients-server",
    clientServerMock
  );

  intializedData<typeof buttonOptionsMock[number]>(
    "button-options",
    buttonOptionsMock
  );
  intializedData<typeof webOptionsMock[number]>("web-options", webOptionsMock);
  intializedData<typeof linixUseCases[number]>(
    "linix-use-cases",
    linixUseCases
  );
  intializedData<typeof mockRoles[number]>("linix-roles", mockRoles);
  intializedData<typeof MockPositions[number]>(
    "linix-positions",
    MockPositions
  );
  intializedData<typeof invitationEntriesDataMock[number]>(
    "linix-invitations",
    invitationEntriesDataMock
  );
  intializedData<typeof mockActions[number]>("linix-actions", mockActions);
  intializedData<typeof userEntriesDataMock[number]>(
    "linix-users",
    userEntriesDataMock
  );
  intializedData<typeof branchesFormEditUser[number]>(
    "linix-users-branches",
    branchesFormEditUser
  );
  intializedData<typeof projectsFormEditUser[number]>(
    "linix-users-projects",
    projectsFormEditUser
  );
  intializedData<typeof eventsFormEditUser[number]>(
    "linix-users-events",
    eventsFormEditUser
  );
  intializedData<typeof aidBudgetsFormEditUser[number]>(
    "linix-users-aidBudgetUnits",
    aidBudgetsFormEditUser
  );
  intializedData<typeof payrollsFormEditUser[number]>(
    "linix-users-payrolls",
    payrollsFormEditUser
  );
  intializedData<typeof branchesFormInvitation[number]>(
    "linix-invitation-branches",
    branchesFormInvitation
  );
  intializedData<typeof projectsFormInvitation[number]>(
    "linix-invitation-projects",
    projectsFormInvitation
  );
  intializedData<typeof eventsFormInvitation[number]>(
    "linix-invitation-events",
    eventsFormInvitation
  );
  intializedData<typeof aidBudgetsFormInvitation[number]>(
    "linix-invitation-aidBudgetUnits",
    aidBudgetsFormInvitation
  );
  intializedData<typeof payrollsFormInvitation[number]>(
    "linix-invitation-payrolls",
    payrollsFormInvitation
  );
  intializedData<typeof invitationUserEntriesDataMock[number]>(
    "linix-invitation-users",
    invitationUserEntriesDataMock
  );
}
