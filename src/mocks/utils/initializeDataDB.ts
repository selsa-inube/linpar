import localforage from "localforage";

import { intializedData } from "@src/mocks/utils/dataMock.service";
import { intializedTokenData } from "@mocks/themeService/themeService.mock";

import { userEntriesDataMock } from "@mocks/apps/privileges/users/users.mock";
import { invitationEntriesDataMock } from "@mocks/apps/privileges/invitations/invitations.mock";
import { branchesFormEditUser } from "@mocks/apps/privileges/users/branchesForm.mock";

import { aidBudgetsFormEditUser } from "@mocks/apps/privileges/users/aidBudgetsForm.mock";

import { projectsFormInvitation } from "@mocks/apps/privileges/invitations/projectsForm.mock";

export function initializeDataDB() {
  localforage.clear();

  intializedTokenData();

  intializedData<typeof invitationEntriesDataMock[number]>(
    "linix-invitations",
    invitationEntriesDataMock
  );

  intializedData<typeof userEntriesDataMock[number]>(
    "linix-users",
    userEntriesDataMock
  );
  intializedData<typeof branchesFormEditUser[number]>(
    "linix-users-branches",
    branchesFormEditUser
  );

  intializedData<typeof aidBudgetsFormEditUser[number]>(
    "linix-users-aidBudgetUnits",
    aidBudgetsFormEditUser
  );

  intializedData<typeof projectsFormInvitation[number]>(
    "linix-invitation-projects",
    projectsFormInvitation
  );
}
