import { useRef, useState } from "react";
import { FormikProps } from "formik";

import { IFormAddRole, IFormAddRoleRef } from "../types";
import { addRoleStepsRules } from "../utils";
import { stepsAddRol } from "./config/addRol.config";
import { IGeneralInformationForm } from "./forms/GeneralInformationForm";
import { IAncillaryAccountsForm } from "./forms/AncillaryAccounts";
import { AddRolUI } from "./interface";
import { initialValuesAddRol } from "./config/initialValues";

const steps = Object.values(stepsAddRol);

export function AddRol() {
  const [currentStep, setCurrentStep] = useState<number>(
    stepsAddRol.generalInformation.id
  );

  const [isAddRoleFormValid, setIsAddRoleFormValid] = useState(false);

  const [dataAddRoleLinix, setataAddRoleLinix] = useState<IFormAddRole>({
    generalInformation: {
      isValid: true,
      values: {
        roleName: initialValuesAddRol.generalInformation.values.roleName,
        description: initialValuesAddRol.generalInformation.values.description,
        aplication: initialValuesAddRol.generalInformation.values.aplication,
      },
    },
    ancillaryAccounts: {
      isValid: false,
      values: {
        officialSector:
          initialValuesAddRol.ancillaryAccounts.values.officialSector,
        commercialSector:
          initialValuesAddRol.ancillaryAccounts.values.commercialSector,
        solidaritySector:
          initialValuesAddRol.ancillaryAccounts.values.solidaritySector,
      },
    },
  });

  const generalInformationRef =
    useRef<FormikProps<IGeneralInformationForm>>(null);
  const ancillaryAccountsRef =
    useRef<FormikProps<IAncillaryAccountsForm>>(null);

  const formReferences: IFormAddRoleRef = {
    generalInformation: generalInformationRef,
    ancillaryAccounts: ancillaryAccountsRef,
  };

  const handleStepChange = (stepId: number) => {
    const newCreditDestinationRequest = addRoleStepsRules(
      currentStep,
      dataAddRoleLinix,
      formReferences,
      isAddRoleFormValid
    );
    setataAddRoleLinix(newCreditDestinationRequest);

    const changeStepKey = Object.entries(stepsAddRol).find(
      ([, config]) => config.id === stepId
    )?.[0];

    if (!changeStepKey) return;

    const changeIsVerification = stepId === steps.length;
    setIsAddRoleFormValid(
      changeIsVerification ||
        newCreditDestinationRequest[changeStepKey as keyof IFormAddRole]
          ?.isValid ||
        false
    );

    setCurrentStep(stepId);

    document.getElementsByTagName("main")[0].scrollTo(0, 0);
  };

  const handleNextStep = () => {
    if (currentStep + 1 <= steps.length) {
      handleStepChange(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    handleStepChange(currentStep - 1);
  };

  const handleUptdateForm = (values: IGeneralInformationForm) => {
    const stepKey = Object.entries(stepsAddRol).find(
      ([, config]) => config.id === currentStep
    )?.[0];

    if (stepKey) {
      setataAddRoleLinix((prevFormData) => ({
        ...prevFormData,
        [stepKey]: { values: values },
      }));
    }
  };

  return (
    <AddRolUI
      steps={steps}
      addRoleFormValid={dataAddRoleLinix}
      currentStep={currentStep}
      isAddRoleFormValid={isAddRoleFormValid}
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
      setAddRoleFormValid={setIsAddRoleFormValid}
      formReferences={formReferences}
      handleUpdateGeneralInformation={handleUptdateForm}
    />
  );
}
