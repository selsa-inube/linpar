import { useState } from "react";

import { stepsAddRol } from "./config/addRol.config";
import { IGeneralInformationForm } from "./forms/GeneralInformationForm";
import { AddRolUI } from "./interface";

export interface IFormaddRole {
  generalInformation: {
    isValid: boolean;
    values: IGeneralInformationForm;
  };
}

export function AddRol() {
  const [currentStep, setCurrentStep] = useState<number>(
    stepsAddRol.generalInformation.id
  );
  const [showModal, setShowModal] = useState(false);

  const [generalInformationData, setGeneralInformationData] =
    useState<IFormaddRole>({
      generalInformation: {
        isValid: false,
        values: {
          roleName: "",
          description: "",
          aplication: "",
        },
      },
    });

  const handleUpdateGeneralInformation = (values: IGeneralInformationForm) => {
    const stepKey = Object.entries(stepsAddRol).find(
      ([, config]) => config.id === currentStep
    )?.[0];

    if (stepKey) {
      setGeneralInformationData((prevInvitationData) => ({
        ...prevInvitationData,
        [stepKey]: { values: values },
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
    return;
  };

  const handleToggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <AddRolUI
      handlePrevStep={handlePrevStep}
      handleNextStep={handleNextStep}
      currentStep={currentStep}
      handleToggleModal={handleToggleModal}
      handleCompleteInvitation={handleCompleteInvitation}
      showModal={showModal}
      dataFomr={generalInformationData}
      handleUpdateGeneralInformation={handleUpdateGeneralInformation}
    />
  );
}
