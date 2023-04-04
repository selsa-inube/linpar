import { useState } from "react";
import { Button, Text, Stack, useMediaQuery } from "@inube/design-system";
import { StepIndicator } from "./StepIndicator";
import { StepBar } from "./StepBar";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdCheckCircle,
} from "react-icons/md";
import {
  StyledAssisted,
  StyledSteps,
  StyledStepsMobile,
  StyledStepsMobileId,
} from "./styles";

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

  function renderStep(step) {
    const Step = isAssistedResponsive ? StepBar : StepIndicator;
    return (
      <Step
        key={step.id}
        id={step.id}
        stepName={step.stepName}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        stepActual={currentStep === step.id}
        isActive={currentStep > step.id}
        isVerification={isLastStep === step.id}
      />
    );
  }

  function renderSteps() {
    return steps.map(renderStep);
  }

  const currentStepInfo = steps.find((step) => step.id === currentStep);

  return (
    <Stack direction="column" gap="8px" alignItems="center">
      <StyledAssisted>
        <Button
          variant="none"
          iconBefore={<MdKeyboardArrowLeft size={20} />}
          handleClick={handlePreviousStep}
          isDisabled={currentStep === isFirstStep}
        >
          <Text
            typo="labelLarge"
            appearance={currentStep === isFirstStep ? "disabled" : "primary"}
          >
            {!isAssistedResponsive && "Prev"}
          </Text>
        </Button>

        {isAssistedResponsive ? (
          <StyledStepsMobile>
            <Stack gap="8px" alignItems="center">
              <StyledStepsMobileId>
                <Text typo="labelMedium" appearance="primary">
                  {isLastStep === currentStep ? (
                    <MdCheckCircle size={16} />
                  ) : (
                    currentStep
                  )}
                </Text>
              </StyledStepsMobileId>
              <Text typo="labelMedium" appearance="dark">
                {currentStepInfo.stepName}
              </Text>
            </Stack>
            <StyledSteps>{renderSteps()}</StyledSteps>
          </StyledStepsMobile>
        ) : (
          <StyledSteps>{renderSteps()}</StyledSteps>
        )}

        <Button
          variant="none"
          iconAfter={<MdKeyboardArrowRight size={20} />}
          handleClick={handleNextStep}
        >
          <Text typo="labelLarge" appearance="primary">
            {!isAssistedResponsive && "Next"}
          </Text>
        </Button>
      </StyledAssisted>

      <Text typo="labelLarge" appearance="secondary">
        {!isAssistedResponsive && currentStepInfo.stepDescription}
      </Text>
    </Stack>
  );
}

export { Assisted };
