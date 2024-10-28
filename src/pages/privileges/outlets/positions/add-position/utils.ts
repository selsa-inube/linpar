import { addPositions } from "@services/positions/postPositions";
import { stepsAddPosition } from "./config/addPosition.config";
import { IFormAddPosition, IFormAddPositionRef, IPosition } from "./types";

const addPositionStepsRules = (
  currentStep: number,
  currentDataAddPositionLinixForm: IFormAddPosition,
  formReferences: IFormAddPositionRef,
  isCurrentFormValid: boolean
) => {
  let newDataAddPositionLinixForm = {
    ...currentDataAddPositionLinixForm,
  };

  const stepKey = Object.entries(stepsAddPosition).find(
    ([, config]) => config.id === currentStep
  )?.[0];

  if (!stepKey) return currentDataAddPositionLinixForm;

  if (stepKey !== "generalInformation") return currentDataAddPositionLinixForm;

  const values = formReferences[stepKey]?.current?.values;

  return (newDataAddPositionLinixForm = {
    ...newDataAddPositionLinixForm,
    [stepKey]: { isValid: isCurrentFormValid, values: values! },
  });
};

export const saveLinixPositions = async (
  addLinixPositions: IFormAddPosition,
  businessUnitPublicCode: string
) => {
  const {
    generalInformation: { values: generalInformation },
    rolesPorCargos: { values: rolesPorCargos },
  } = addLinixPositions;

  const normalizeRolesPorCargo = rolesPorCargos
    .filter((rolesPorCargos) => rolesPorCargos.isActive === true)
    .map((rolesPorCargos) => ({
      k_Rol: Number(rolesPorCargos.id),
    }));
  const newLinixPosition: IPosition = {
    n_Grupo: generalInformation.n_Grupo,
    n_Uso: generalInformation.n_Uso,
    rolesPorCargo: normalizeRolesPorCargo,
  };
  let confirmationType = true;
  try {
    await addPositions(newLinixPosition, businessUnitPublicCode);
  } catch (error) {
    confirmationType = false;
    throw error;
  }

  return confirmationType;
};

export { addPositionStepsRules };
