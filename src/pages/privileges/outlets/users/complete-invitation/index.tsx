import { aidBudgetsFormInvitation } from "@mocks/apps/privileges/invitations/aidBudgetsForm.mock";
import { branchesFormInvitation } from "@mocks/apps/privileges/invitations/branchesForm.mock";
import { eventsFormInvitation } from "@mocks/apps/privileges/invitations/eventsForm.mock";
import { invitationEntriesDataMock } from "@mocks/apps/privileges/invitations/invitations.mock";
import { payrollsFormInvitation } from "@mocks/apps/privileges/invitations/payrollsForm.mock";
import { projectsFormInvitation } from "@mocks/apps/privileges/invitations/projectsForm.mock";
import { IVerificationData } from "@src/components/feedback/Assisted/types";
import { EMessageType } from "@src/types/messages.types";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AidBudgetsForm } from "../edit-user/forms/AidBudgetsForm";
import { BranchesForm } from "../edit-user/forms/BranchesForm";
import { GeneralInformationForm } from "../edit-user/forms/GeneralInfoForm";
import {
  IAssignmentFormEntry,
  IFormsInvitation,
  IGeneralInformationEntry,
} from "../types/forms.types";
import { stepsRegisterUserConfig } from "./config/completeInvitation.config";
import { CompleteInvitationUI } from "./interface";

function CompleteInvitation() {
  const { invitation_id } = useParams<{ invitation_id: string }>();

  const [currentStep, setCurrentStep] = useState<number>(
    stepsRegisterUserConfig.generalInformation.id
  );
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

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

    if (!invitation)
      return {
        id: "",
        userID: "",
        username: "",
        email: "",
        invitationDate: "",
        status: "",
        phone: "",
      };

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

  const handleCompleteInvitation = () => {
    navigate("/privileges/users", {
      state: {
        messageType: EMessageType.SUCCESS,
        username: invitationData.generalInformation.entries.username,
        tab: "privileges-invitations",
      },
    });
  };

  const handleToggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const verificationData: Record<string, IVerificationData> = {
    generalInformation: {
      id: "generalInformation",
      title: "General",
      content: (
        <GeneralInformationForm
          currentInformation={invitationData.generalInformation.entries}
          readOnly
        />
      ),
      isFullWidth: true,
    },
    branches: {
      id: "branches",
      title: "Sucursales",
      content: (
        <BranchesForm
          currentBranches={invitationData.branches.entries}
          readOnly
        />
      ),
    },
    aidBudgets: {
      id: "aidBudgets",
      title: "Unidades de ayuda",
      content: (
        <AidBudgetsForm
          currentAidBudgetUnits={invitationData.aidBudgetUnits.entries}
          readOnly
        />
      ),
    },
  };

  return (
    <CompleteInvitationUI
      invitationData={invitationData}
      handleSubmit={handleSubmit}
      handleStepChange={handleStepChange}
      currentStep={currentStep}
      handleToggleModal={handleToggleModal}
      handleCompleteInvitation={handleCompleteInvitation}
      showModal={showModal}
      verificationData={verificationData}
    />
  );
}

export { CompleteInvitation };
