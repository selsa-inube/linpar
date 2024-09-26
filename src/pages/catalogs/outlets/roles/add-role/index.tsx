import { useEffect, useRef, useState } from "react";
import { FormikProps } from "formik";
import { useAuth0 } from "@auth0/auth0-react";
import { dataToAssignmentFormEntry } from "@pages/catalogs/outlets/linixUseCase/adding-linix-use-case";
import { getRolFormats } from "@services/roles/tipoDeMovimientoPorRol";
import { getBusinessRulesByRoleFormats } from "@services/roles/businessRulesByRole";
import { getUseCaseByRole } from "@services/roles/useCasesByRole";
import { getAplicationRoles } from "@services/roles/aplicationRoles";
import {
  IFormAddRole,
  IFormAddRoleRef,
  IGeneralInformationForm,
  IInitialiceFormRole,
} from "../types";
import { addRoleStepsRules } from "./utils";
import { stepsAddRol } from "./config/addRol.config";

import { IAncillaryAccountsForm } from "../components/AncillaryAccountsForm";
import { AddRolUI } from "./interface";
import { initialValuesAddRol } from "./config/initialValues";
import { SortableItem } from "./types";

const steps = Object.values(stepsAddRol);

export function AddRol() {
  const [currentStep, setCurrentStep] = useState<number>(
    stepsAddRol.generalInformation.id
  );

  const [isAddRoleFormValid, setIsAddRoleFormValid] = useState(false);

  const handleAddRoleFormValid = (isValid: boolean) => {
    setIsAddRoleFormValid(isValid);
  };
  const [loading, setLoading] = useState(false);
  const [transactionTypes, setTypesOfmovement] = useState<
    Record<string, unknown>[]
  >([]);
  const [businessRules, setBusinessRules] = useState<Record<string, unknown>[]>(
    []
  );

  const [useCases, setUseCases] = useState<Record<string, unknown>[]>([]);
  const [linixRoles, setLinixRoles] = useState<Record<string, unknown>[]>([]);

  const { user } = useAuth0();

  const [dataAddRoleLinixForm, setDataAddRoleLinixForm] =
    useState<IFormAddRole>({
      generalInformation: {
        isValid: true,
        values: {
          n_Rol: initialValuesAddRol.generalInformation.values.n_Rol.trim(),
          description:
            initialValuesAddRol.generalInformation.values.description.trim(),
          application:
            initialValuesAddRol.generalInformation.values.application.trim(),
          applicationId:
            initialValuesAddRol.generalInformation.values.applicationId.trim(),
        },
      },
      ancillaryAccounts: {
        isValid: false,
        values: {
          officialSector:
            initialValuesAddRol.ancillaryAccounts.values.officialSector.trim(),
          commercialSector:
            initialValuesAddRol.ancillaryAccounts.values.commercialSector.trim(),
          solidaritySector:
            initialValuesAddRol.ancillaryAccounts.values.solidaritySector.trim(),
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
    Promise.all([
      typesOfMovements(),
      businessRulesFull(),
      rolesuseCases(),
      aplication(),
    ]).then(() => {
      setLoading(false);
    });
  }, []);

  const typesOfMovements = () => {
    if (!user) return;
    if (transactionTypes.length === 0) {
      getRolFormats("1")
        .then((data) => {
          if (data !== null) {
            setTypesOfmovement(data as Record<string, unknown>[]);
            setDataAddRoleLinixForm((prevFormData: IFormAddRole) => ({
              ...prevFormData,
              transactionTypes: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "CODIGO",
                  valueLabel: "NOMBRE",
                  isActiveLabel: "i_Privi",
                }),
              },
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching web options:", error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const businessRulesFull = () => {
    if (!user) return;
    if (businessRules.length === 0) {
      getBusinessRulesByRoleFormats("1")
        .then((data) => {
          if (data !== null) {
            setBusinessRules(data as Record<string, unknown>[]);
            setDataAddRoleLinixForm((prevFormData: IFormAddRole) => ({
              ...prevFormData,
              businessRules: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "k_Regla",
                  valueLabel: "n_Regla",
                  isActiveLabel: "i_Privi",
                }),
              },
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching web options:", error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const aplication = () => {
    if (!user) return;
    if (linixRoles.length === 0) {
      setLoading(true);
      getAplicationRoles()
        .then((newUsers) => {
          setLinixRoles(newUsers);
        })
        .catch((error) => {
          console.info(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const rolesuseCases = () => {
    if (!user) return;
    if (useCases.length === 0) {
      getUseCaseByRole("1")
        .then((data) => {
          if (data !== null) {
            setUseCases(data as Record<string, unknown>[]);
            setDataAddRoleLinixForm((prevFormData: IFormAddRole) => ({
              ...prevFormData,
              useCases: {
                isValid: true,
                values: dataToAssignmentFormEntry({
                  dataOptions: data as Record<string, unknown>[],
                  idLabel: "k_Usecase",
                  valueLabel: "n_Usecase",
                  isActiveLabel: "i_Privi",
                }),
              },
            }));
          }
        })
        .catch((error) => {
          console.error("Error fetching web options:", error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
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
      dataAddRoleLinixForm,
      formReferences,
      isAddRoleFormValid
    );

    setDataAddRoleLinixForm(newCreditDestinationRequest);

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

    setIsAddRoleFormValid(stepId >= 2);
  };

  const handleNextStep = () => {
    if (currentStep + 1 <= steps.length && isAddRoleFormValid) {
      handleStepChange(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    handleStepChange(currentStep - 1);
  };

  const handleUpdateDataSwitchstep = (values: IInitialiceFormRole[]) => {
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

  const sortByIsActive = (arrays: SortableItem[][]) => {
    arrays.forEach((array) =>
      array.sort((a, b) =>
        b.isActive === a.isActive ? 0 : b.isActive ? 1 : -1
      )
    );
  };

  sortByIsActive([
    dataAddRoleLinixForm.transactionTypes.values as SortableItem[],
    dataAddRoleLinixForm.businessRules.values as SortableItem[],
    dataAddRoleLinixForm.useCases.values as SortableItem[],
  ]);

  return (
    <AddRolUI
      loading={loading}
      linixRoles={linixRoles}
      steps={steps}
      addRoleFormValid={dataAddRoleLinixForm}
      currentStep={currentStep}
      isAddRoleFormValid={isAddRoleFormValid}
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
      handleAddRoleFormValid={handleAddRoleFormValid}
      formReferences={formReferences}
      handleUpdateDataSwitchstep={handleUpdateDataSwitchstep}
      setCurrentStep={setCurrentStep}
    />
  );
}
