import { stepsAddPosition } from "./config/addPosition.config";
import { IFormAddPosition, IFormAddPositionRef } from "./types";

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

export { addPositionStepsRules };
