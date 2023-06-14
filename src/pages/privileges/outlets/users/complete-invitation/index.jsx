import { invitationEntriesDataMock } from "@mocks/apps/privileges/invitations.mock";
import { aidBudgetsFormEditUser } from "@mocks/apps/privileges/aidBudgetsForm.mock";
import { branchesFormEditUser } from "@mocks/apps/privileges/branchesForm.mock";
import { eventsFormEditUser } from "@mocks/apps/privileges/eventsForm.mock";
import { payrollsFormEditUser } from "@mocks/apps/privileges/payrollsForm.mock";
import { projectsFormEditUser } from "@mocks/apps/privileges/projectsForm.mock";
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
    generalInformation: { entries: {} },
    branches: { entries: branchesFormEditUser },
    projects: { entries: projectsFormEditUser },
    events: { entries: eventsFormEditUser },
    aidBudgetUnits: { entries: aidBudgetsFormEditUser },
    payrolls: { entries: payrollsFormEditUser },
  });

  function getInvitationInformation() {
    return invitationEntriesDataMock.find(
      (invitation) => invitation.id === parseInt(invitation_id)
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

  const invitation = getInvitationInformation();

  return (
    <CompleteInvitationUI
      invitation={invitation}
      invitationData={invitationData}
      handleSubmit={handleSubmit}
      handleStepChange={handleStepChange}
      currentStep={currentStep}
    />
  );
}

export { CompleteInvitation };
