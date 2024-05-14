import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { aidBudgetsFormInvitation } from "@mocks/apps/privileges/invitations/aidBudgetsForm.mock";
import { branchesFormInvitation } from "@mocks/apps/privileges/invitations/branchesForm.mock";
import { eventsFormInvitation } from "@mocks/apps/privileges/invitations/eventsForm.mock";
import { invitationEntriesDataMock } from "@mocks/apps/privileges/invitations/invitations.mock";
import { payrollsFormInvitation } from "@mocks/apps/privileges/invitations/payrollsForm.mock";
import { getAll } from "@mocks/utils/dataMock.service";
import { projectsFormInvitation } from "@mocks/apps/privileges/invitations/projectsForm.mock";
import { IVerificationData } from "@pages/privileges/outlets/users/complete-invitation/interface";
import { InitializerForm } from "@pages/privileges/outlets/forms/InitializerForm";

import { EMessageType } from "@src/types/messages.types";

import {
  IAssignmentFormEntry,
  IFormsInvitation,
  IGeneralInformationEntry,
} from "../types/forms.types";
import { stepsRegisterUserConfig } from "./config/completeInvitation.config";
import { CompleteInvitationUI } from "./interface";
import { GeneralInformationForm } from "./GeneralInformation";

function CompleteInvitation() {
  const { invitation_id } = useParams<{ invitation_id: string }>();

  const [positionsOptions, setPositionsOptions] = useState<
    Record<string, unknown>[]
  >([]);

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

  useEffect(() => {
    getAll("linix-positions")
      .then((data) => {
        if (data !== null) {
          setPositionsOptions(data as Record<string, unknown>[]);
        }
      })
      .catch((error) => {
        console.error("Error fetching web-options:", error.message);
      });
  }, []);

  function getInvitationInformation() {
    return invitationEntriesDataMock.find(
      (invitation) => invitation.customerId === invitation_id
    );
  }

  const handleSubmit = (
    values: IGeneralInformationEntry | IAssignmentFormEntry[]
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

  const handleNextStep = (step: number) => {
    setCurrentStep(step + 1);
  };

  const handlePrevStep = (step: number) => {
    setCurrentStep(step - 1);
  };

  const handleCompleteInvitation = () => {
    if (invitationData.generalInformation.entries) {
      navigate("/privileges/users", {
        state: {
          messageType: EMessageType.SUCCESS,
          username: invitationData.generalInformation.entries.userName,
          tab: "privileges-invitations",
        },
      });
    }
  };

  const handleToggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const verificationData: { [key: string]: IVerificationData } = {
    generalInformation: {
      id: "generalInformation",
      title: "General",
      content: invitationData.generalInformation.entries && (
        <GeneralInformationForm
          currentInformation={invitationData.generalInformation.entries}
          readOnly
          handleSubmit={() => {}}
          positionsOptions={[]}
        />
      ),
      fullwidth: true,
    },
    branches: {
      id: "branches",
      title: "Sucursales",
      content: (
        <InitializerForm
          dataOptionsForms={invitationData.branches.entries}
          readOnly
          handleSubmit={() => {}}
        />
      ),
    },
    projects: {
      id: "projects",
      title: "Proyectos",
      content: (
        <InitializerForm
          dataOptionsForms={invitationData.projects.entries}
          readOnly
          handleSubmit={() => {}}
        />
      ),
    },
    events: {
      id: "events",
      title: "Eventos",
      content: (
        <InitializerForm
          dataOptionsForms={invitationData.events.entries}
          readOnly
          handleSubmit={() => {}}
        />
      ),
    },
    aidBudgets: {
      id: "aidBudgets",
      title: "Unidades de ayuda",
      content: (
        <InitializerForm
          dataOptionsForms={invitationData.aidBudgetUnits.entries}
          readOnly
          handleSubmit={() => {}}
        />
      ),
    },
    payrolls: {
      id: "payrolls",
      title: "Nómina",
      content: (
        <InitializerForm
          dataOptionsForms={invitationData.payrolls.entries}
          readOnly
          handleSubmit={() => {}}
        />
      ),
    },
  };

  return (
    <CompleteInvitationUI
      invitationData={invitationData}
      handleSubmit={handleSubmit}
      handlePrevStep={handlePrevStep}
      handleNextStep={handleNextStep}
      currentStep={currentStep}
      handleToggleModal={handleToggleModal}
      handleCompleteInvitation={handleCompleteInvitation}
      showModal={showModal}
      verificationData={verificationData}
      positionsOptions={positionsOptions}
    />
  );
}

export { CompleteInvitation };
