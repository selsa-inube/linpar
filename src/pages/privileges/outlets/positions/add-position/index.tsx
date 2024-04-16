import { useState } from "react";

import { AddPositionUI } from "./interface";
import { stepsAddPosition } from "./config/addPosition.config";

const steps = Object.values(stepsAddPosition);

export function AddPosition() {
  const [currentStep, setCurrentStep] = useState<number>(
    stepsAddPosition.generalInformation.id
  );

  const handleStepChange = (stepId: number) => {
    const changeStepKey = Object.entries(stepsAddPosition).find(
      ([, config]) => config.id === stepId
    )?.[0];

    if (!changeStepKey) return;

    setCurrentStep(stepId);
  };

  const handleNextStep = () => {
    if (currentStep + 1 <= steps.length) {
      handleStepChange(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    handleStepChange(currentStep - 1);
  };

  return (
    <AddPositionUI
      steps={steps}
      currentStep={currentStep}
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
    />
  );
}
