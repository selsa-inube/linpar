import { useState } from "react";
import { AssistedUI } from "./interface";
import { useMediaQuery } from "@inube/design-system";

function Assisted(props) {
  const { steps } = props;

  const [currentStep, setCurrentStep] = useState(steps[0].id);

  const smallScreen = useMediaQuery("(max-width: 1100px)");

  const handleNextStep = () => {
    if (currentStep === steps[steps.length - 1].id) return;
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    if (currentStep === steps[0].id) return;
    setCurrentStep(currentStep - 1);
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
