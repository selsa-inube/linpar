import localforage from "localforage";
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

export const saveLinixPositions = (addLinixPositions: IFormAddPosition) => {
  const {
    generalInformation: { values: generalInformation },
    rolesPorCargos: { values: roles },
  } = addLinixPositions;

  const normalizeRoles = roles
    .filter((rol) => rol.isActive === true)
    .map((rol) => ({
      k_Rol: rol.value,
    }));

  const newLinixPosition: IPosition = {
    k_Grupo: "",
    n_Grupo: generalInformation.n_Grupo,
    i_Activo: "Y",
    n_Uso: generalInformation.n_Uso,
    rolesPorCargo: normalizeRoles,
  };
  localforage.getItem("linix-positions").then((data) => {
    if (data) {
      localforage.setItem("linix-positions", [
        ...(data as IFormAddPosition[]),
        newLinixPosition,
      ]);
    } else {
      localforage.setItem("linix-positions", [newLinixPosition]);
    }
  });
};

export { addPositionStepsRules };
