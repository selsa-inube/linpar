import { AssistedUI } from "./interface";
import { IStep, IVerificationData } from "./types";

interface AssistedProps {
  steps: IStep[];
  currentStep: number;
  handleStepChange: (stepId: number) => void;
  handleFinishAssisted: () => void;
  verificationData: Record<string, IVerificationData>;
}

function Assisted(props: AssistedProps) {
  const {
    steps,
    currentStep,
    handleStepChange,
    handleFinishAssisted,
    verificationData,
  } = props;

  const handleNextStep = () => {
    const currentStepIndex = steps.findIndex((step) => step.id === currentStep);
    if (currentStepIndex === steps.length - 1) {
      handleFinishAssisted();
      return;
    }
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
      handleStepChange={handleStepChange}
      steps={steps}
      verificationData={verificationData}
    />
  );
}

export { Assisted };
export type { AssistedProps };
