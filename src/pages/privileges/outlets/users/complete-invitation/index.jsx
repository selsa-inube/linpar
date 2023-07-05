import { aidBudgetsFormInvitation } from "@src/mocks/apps/privileges/invitations/aidBudgetsForm.mock";
import { branchesFormInvitation } from "@mocks/apps/privileges/invitations/branchesForm.mock";
import { eventsFormInvitation } from "@mocks/apps/privileges/invitations/eventsForm.mock";
import { invitationEntriesDataMock } from "@mocks/apps/privileges/invitations/invitations.mock";
import { payrollsFormInvitation } from "@mocks/apps/privileges/invitations/payrollsForm.mock";
import { projectsFormInvitation } from "@mocks/apps/privileges/invitations/projectsForm.mock";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { stepsRegisterUserConfig } from "./config/completeInvitation.config";
import { CompleteInvitationUI } from "./interface";

function CompleteInvitation() {
  const { invitation_id } = useParams();

  const [currentStep, setCurrentStep] = useState(
    stepsRegisterUserConfig.generalInformation.id
  );

  const [invitationData, setInvitationData] = useState({
    generalInformation: { entries: getInvitationInformation() },
    branches: { entries: branchesFormInvitation },
    projects: { entries: projectsFormInvitation },
    events: { entries: eventsFormInvitation },
    aidBudgetUnits: { entries: aidBudgetsFormInvitation },
    payrolls: { entries: payrollsFormInvitation },
  });

  function getInvitationInformation() {
    return invitationEntriesDataMock.find(
      (invitation) => invitation.id === invitation_id
    );
  }

  const handleSubmit = (values) => {
    const stepKey = Object.keys(stepsRegisterUserConfig).find(
      (key) => stepsRegisterUserConfig[key].id === currentStep
    );

    setInvitationData((prevInvitationData) => ({
      ...prevInvitationData,
      [stepKey]: { entries: values },
    }));
  };

  const handleStepChange = (step) => {
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
