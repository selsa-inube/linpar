import { aidBudgetsFormInvitation } from "@mocks/apps/privileges/invitations/aidBudgetsForm.mock";
import { branchesFormInvitation } from "@mocks/apps/privileges/invitations/branchesForm.mock";
import { eventsFormInvitation } from "@mocks/apps/privileges/invitations/eventsForm.mock";
import { invitationEntriesDataMock } from "@mocks/apps/privileges/invitations/invitations.mock";
import { payrollsFormInvitation } from "@mocks/apps/privileges/invitations/payrollsForm.mock";
import { projectsFormInvitation } from "@mocks/apps/privileges/invitations/projectsForm.mock";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { stepsRegisterUserConfig } from "./config/completeInvitation.config";
import { CompleteInvitationUI } from "./interface";
import {
  IFormsInvitation,
  IAssignmentFormEntry,
  IGeneralInformationEntry,
} from "../types/forms.types";

function CompleteInvitation() {
  const { invitation_id } = useParams<{ invitation_id: string }>();

  const [currentStep, setCurrentStep] = useState<number>(
    stepsRegisterUserConfig.generalInformation.id
  );

  const [invitationData, setInvitationData] = useState<IFormsInvitation>({
    generalInformation: { entries: getInvitationInformation() },
    branches: { entries: branchesFormInvitation },
    projects: { entries: projectsFormInvitation },
    events: { entries: eventsFormInvitation },
    aidBudgetUnits: { entries: aidBudgetsFormInvitation },
    payrolls: { entries: payrollsFormInvitation },
  });

  function getInvitationInformation() {
    const invitation = invitationEntriesDataMock.find(
      (invitation) => invitation.id === invitation_id
    );

    if (!invitation) {
      throw new Error();
    }

    return invitation;
  }

  const handleSubmit = (
    values: IGeneralInformationEntry | IAssignmentFormEntry
  ) => {
    const stepKey = Object.entries(stepsRegisterUserConfig).find(
      ([, config]) => config.id === currentStep
    )?.[0];

    if (stepKey) {
      setInvitationData((prevInvitationData) => ({
        ...prevInvitationData,
        [stepKey]: { entries: values },
      }));
    }
  };

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  return (
    <CompleteInvitationUI
      invitationData={invitationData}
      handleSubmit={handleSubmit}
      handleStepChange={handleStepChange}
      currentStep={currentStep}
    />
  );
}

export { CompleteInvitation };
