import { AssistedUI } from "./interface";
import { IStep } from "./types";

interface IAssistedProps {
  steps: IStep[];
  currentStep: string;
  handleStepChange: (stepId: string) => void;
}

function Assisted(props: IAssistedProps) {
  const { steps, currentStep, handleStepChange } = props;

  const handleNextStep = () => {
    const currentStepIndex = steps.findIndex((step) => step.id === currentStep);
    if (currentStepIndex === steps.length - 1) return;
    handleStepChange(steps[currentStepIndex + 1].id);
  };

  const handlePreviousStep = () => {
    const currentStepIndex = steps.findIndex((step) => step.id === currentStep);
    if (currentStepIndex === 0) return;
    handleStepChange(steps[currentStepIndex - 1].id);
  };

  const currentStepInfo = steps.find((step) => step.id === currentStep);

  return (
    <AssistedUI
      currentStep={currentStep}
      currentStepInfo={currentStepInfo}
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
      steps={steps}
    />
  );
}

export { Assisted };
export type { IAssistedProps };
