import { useMediaQuery } from "@inube/design-system";
import { AssistedUI } from "./interface";

function Assisted(props) {
  const { steps, currentStep, handleStepChange } = props;

  const smallScreen = useMediaQuery("(max-width: 1100px)");

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
      smallScreen={smallScreen}
      steps={steps}
    />
  );
}

export { Assisted };
