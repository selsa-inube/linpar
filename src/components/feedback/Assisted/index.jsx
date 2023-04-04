import { useState } from "react";
import { AssistedUI } from "./interface";
import { useMediaQuery } from "@inube/design-system";

function Assisted(props) {
  const { steps } = props;
  const isFirstStep = steps[0].id;
  const isLastStep = steps[steps.length - 1].id;

  const [currentStep, setCurrentStep] = useState(isFirstStep);

  const isAssistedResponsive = useMediaQuery("(max-width: 750px)");

  const handleNextStep = () => {
    if (currentStep === isLastStep) return;
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    if (currentStep === isFirstStep) return;
    setCurrentStep(currentStep - 1);
  };

  const currentStepInfo = steps.find((step) => step.id === currentStep);

  return (
    <AssistedUI
      isFirstStep={isFirstStep}
      isLastStep={isLastStep}
      currentStep={currentStep}
      currentStepInfo={currentStepInfo}
      handleNextStep={handleNextStep}
      handlePreviousStep={handlePreviousStep}
      isAssistedResponsive={isAssistedResponsive}
      steps={steps}
    />
  );
}

export { Assisted };
