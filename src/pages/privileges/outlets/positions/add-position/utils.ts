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
  addLinixPositions: IFormAddPosition
) => {
  const {
    generalInformation: { values: generalInformation },
    rolesPorCargos: { values: rolesPorCargos },
  } = addLinixPositions;
  const positionsId = Math.floor(Math.random() * 100).toString();
  const normalizeRolesPorCargo = rolesPorCargos
    .filter((rolesPorCargos) => rolesPorCargos.isActive === true)
    .map((rolesPorCargos) => ({
      k_Grupo: positionsId,
      k_Rol: Number(rolesPorCargos.id),
    }));
  const newLinixPosition: IPosition = {
    n_Grupo: generalInformation.n_Grupo,
    n_Uso: generalInformation.n_Uso,
    k_Grupo: positionsId,
    rolesPorCargo: normalizeRolesPorCargo,
  };
  let confirmationType = true;
  try {
    await addPositions(newLinixPosition);
  } catch (error) {
    confirmationType = false;
    throw error;
  }

  return confirmationType;
};

export { addPositionStepsRules };
