import { useEffect, useState } from "react";

import { stepsAddRol } from "./config/addRol.config";
import { IGeneralInformationForm } from "./forms/GeneralInformationForm";
import { AddRolUI } from "./interface";
import { IFormAddRole } from "../types";
import { getData } from "@src/mocks/utils/dataMock.service";
import { dataToAssignmentFormEntry } from "../../linixUseCase/adding-linix-use-case";

export function AddRol() {
  const [currentStep, setCurrentStep] = useState<number>(
    stepsAddRol.generalInformation.id
  );
  const [showModal, setShowModal] = useState(false);

  const [dataAddRoleLinixForm, setDataAddRoleLinixForm] =
    useState<IFormAddRole>({
      generalInformation: {
        isValid: true,
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
      transactionTypes: {
        values: [],
      },
      businessRules: {
        values: [],
      },
      useCases: {
        values: [],
      },
    });

  useEffect(() => {
    getData("documents").then((documentsFetch) => {
      setDataAddRoleLinixForm((prevFormData) => ({
        ...prevFormData,
        transactionTypes: {
          values: dataToAssignmentFormEntry({
            dataOptions: documentsFetch as Record<string, unknown>[],
            idLabel: "CODIGO",
            valueLabel: "NOMBRE",
            isActiveLabel: "asignado",
          }),
        },
      }));
    });

    getData("linix-roles").then((linixRolesFetch) => {
      setDataAddRoleLinixForm((prevFormData) => ({
        ...prevFormData,
        useCases: {
          values: dataToAssignmentFormEntry({
            dataOptions: linixRolesFetch as Record<string, unknown>[],
            idLabel: "k_rol",
            valueLabel: "n_rol",
            isActiveLabel: "asignado",
          }),
        },
      }));
    });
  }, []);

  const handleUptdateForm = (values: IGeneralInformationForm) => {
    const stepKey = Object.entries(stepsAddRol).find(
      ([, config]) => config.id === currentStep
    )?.[0];

    if (stepKey) {
      setDataAddRoleLinixForm((prevFormData) => ({
        ...prevFormData,
        [stepKey]: { values: values },
      }));
    }
  };

  const handleUpdateTransactionTypes = (
    values: { [key: string]: string | boolean }[]
  ) => {
    const stepKey = Object.entries(stepsAddRol).find(
      ([, config]) => config.id === currentStep
    )?.[0];

    if (stepKey) {
      setDataAddRoleLinixForm((prevFormData) => ({
        ...prevFormData,
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
      dataForm={dataAddRoleLinixForm}
      handleUpdateGeneralInformation={handleUptdateForm}
      handleUpdateTransactionTypes={handleUpdateTransactionTypes}
    />
  );
}
