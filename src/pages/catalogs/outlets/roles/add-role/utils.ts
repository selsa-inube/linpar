import { addRoles } from "@services/roles/postRoles";
import { stepsAddRol } from "./config/addRol.config";
import { initialValuesAddRol } from "./config/initialValues";
import { IFormAddRole, IFormAddRoleRef, IRol } from "../types";

export const addRoleStepsRules = (
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
            n_Rol: values.n_Rol,
            description: values.description,
            application: values.application,
            applicationId: values.applicationId,
          },
        };
      }

      return newAddLinixRole;
    }
    case stepsAddRol.ancillaryAccounts.id: {
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

  if (stepKey !== "generalInformation" && stepKey !== "ancillaryAccounts")
    return addLinixRole;

  const values = formReferences[stepKey]?.current?.values;

  return (newAddLinixRole = {
    ...newAddLinixRole,
    [stepKey]: { isValid: isCurrentFormValid, values },
  });
};

export const saveRole = async (addRoleFormValid: IFormAddRole) => {
  const {
    ancillaryAccounts: { values: ancillaryAccountsValues },
    transactionTypes: { values: transactionTypesValues },
    useCases: { values: useCasesValues },
    businessRules: { values: businessRulesValues },
  } = addRoleFormValid;

  console.log(ancillaryAccountsValues);

  const validateAncillaryAccounts = () => {
    const normalizeAncillaryAccounts = [];

    if (ancillaryAccountsValues.commercialSector)
      normalizeAncillaryAccounts.push({
        i_Tipent: "C",
        k_Codcta: ancillaryAccountsValues.commercialSector,
      });
    if (ancillaryAccountsValues.officialSector)
      normalizeAncillaryAccounts.push({
        i_Tipent: "O",
        k_Codcta: ancillaryAccountsValues.officialSector,
      });
    if (ancillaryAccountsValues.solidaritySector)
      normalizeAncillaryAccounts.push({
        i_Tipent: "S",
        k_Codcta: ancillaryAccountsValues.solidaritySector,
      });

    return normalizeAncillaryAccounts;
  };

  // const normalizeAncillaryAccounts = [
  //   {
  //     i_Tipent: "C",
  //     k_Codcta: ancillaryAccountsValues.commercialSector,
  //   },
  //   {
  //     i_Tipent: "O",
  //     k_Codcta: ancillaryAccountsValues.officialSector,
  //   },
  //   {
  //     i_Tipent: "S",
  //     k_Codcta: ancillaryAccountsValues.solidaritySector,
  //   },
  // ];

  const normalizeTransactionTypes = transactionTypesValues
    .filter((transactionTypesValue) => transactionTypesValue.isActive === true)
    .map((mapNewTransactionType) => ({
      k_Tipmov: mapNewTransactionType.id,
      n_Tipmov: mapNewTransactionType.value,
    }));

  const normalizeUseCases = useCasesValues
    .filter((useCasesValue) => useCasesValue.isActive === true)
    .map((mapNewUseCases) => ({
      k_Usecase: mapNewUseCases.id,
    }));

  const normalizeBusinessRules = businessRulesValues
    .filter((businessRules) => businessRules.isActive === true)
    .map((mapBusinessRules) => ({
      k_Regla: mapBusinessRules.id,
    }));

  const newRole: IRol = {
    i_Activo: "Y",
    k_Tipcon: addRoleFormValid.generalInformation.values.applicationId,
    n_Rol: addRoleFormValid.generalInformation.values.n_Rol,
    n_Uso: addRoleFormValid.generalInformation.values.description,
    k_Aplica: addRoleFormValid.generalInformation.values.applicationId,
    tiposDeMovimientoContablePorRol: normalizeTransactionTypes,
    reglasDeNegocioPorRol: normalizeBusinessRules,
    casosDeUsoPorRol: normalizeUseCases,
    cuentasAuxiliaresPorRol: validateAncillaryAccounts(),
  };

  let confirmationType = true;
  try {
    await addRoles(newRole);
  } catch (error) {
    confirmationType = false;
    throw error;
  }

  return confirmationType;
};
