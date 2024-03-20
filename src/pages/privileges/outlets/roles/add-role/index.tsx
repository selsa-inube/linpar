import { FormikProps } from "formik";
import { useRef, useState } from "react";

import { IFormAddRoleRef } from "../types";
import { stepsAddRol } from "./config/addRol.config";
import { IGeneralInformationForm } from "./forms/GeneralInformationForm";
import { IAncillaryAccountsForm } from "./forms/AncillaryAccounts";
import { AddRolUI } from "./interface";

const initialValuesAddRol: IFormAddRole = {
  generalInformation: {
    isValid: false,
    values: {
      roleName: "",
      description: "",
      aplication: "",
    },
  },
  ancillaryAccounts: {
    isValid: false,
    values: {
      officialSector: "",
      commercialSector: "",
      solidaritySector: "",
    },
  },
};

const creditDestinationStepsRules = (
  currentStep: number,
  addLinixRole: IFormAddRole,
  formReferences: IFormAddRoleRef,
  isCurrentFormValid: boolean
) => {
  let newAddLinixRole = { ...addLinixRole };

  switch (currentStep) {
    case stepsAddRol.generalInformation.id: {
      const values = formReferences.generalInformation.current?.values;

      if (!values) return addLinixRole;

      newAddLinixRole.generalInformation = {
        isValid: isCurrentFormValid,
        values,
      };

      if (
        JSON.stringify(values) !==
        JSON.stringify(addLinixRole.generalInformation.values)
      ) {
        newAddLinixRole.generalInformation = {
          isValid: false,
          values: {
            ...initialValuesAddRol.generalInformation,
            roleName: values.roleName,
            description: values.description,
            aplication: values.aplication,
          },
        };
      }

      return newAddLinixRole;
    }
    case stepsAddRol.auxiliaryAccounts.id: {
      const values = formReferences.ancillaryAccounts.current?.values;

      if (!values) return addLinixRole;

      newAddLinixRole.ancillaryAccounts = {
        isValid: isCurrentFormValid,
        values,
      };

      if (
        JSON.stringify(values) !==
        JSON.stringify(addLinixRole.generalInformation.values)
      ) {
        newAddLinixRole.ancillaryAccounts = {
          isValid: false,
          values: {
            ...initialValuesAddRol.ancillaryAccounts,
            officialSector: values.officialSector,
            commercialSector: values.commercialSector,
            solidaritySector: values.solidaritySector,
          },
        };
      }

      return newAddLinixRole;
    }
  }

  const stepKey = Object.entries(stepsAddRol).find(
    ([, config]) => config.id === currentStep
  )?.[0];

  if (!stepKey) return addLinixRole;

  const values = formReferences[stepKey as keyof IFormAddRole]?.current?.values;

  return (newAddLinixRole = {
    ...newAddLinixRole,
    [stepKey]: { isValid: isCurrentFormValid, values },
  });
};

export interface IFormAddRole {
  generalInformation: {
    isValid: boolean;
    values: IGeneralInformationForm;
  };
  ancillaryAccounts: {
    isValid: boolean;
    values: IAncillaryAccountsForm;
  };
}

const steps = Object.values(stepsAddRol);

export function AddRol() {
  const [currentStep, setCurrentStep] = useState<number>(
    stepsAddRol.generalInformation.id
  );

  const [addRoleFormValid, setAddRoleFormValid] = useState(false);

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
    const newCreditDestinationRequest = creditDestinationStepsRules(
      currentStep,
      dataAddRoleLinix,
      formReferences,
      addRoleFormValid
    );
    setataAddRoleLinix(newCreditDestinationRequest);

    const changeStepKey = Object.entries(stepsAddRol).find(
      ([, config]) => config.id === stepId
    )?.[0];

    if (!changeStepKey) return;

    const changeIsVerification = stepId === steps.length;
    setAddRoleFormValid(
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
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
      setAddRoleFormValid={setAddRoleFormValid}
      formReferences={formReferences}
      handleUpdateGeneralInformation={handleUptdateForm}
    />
  );
}
