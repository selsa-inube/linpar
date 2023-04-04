import { Button, Text, Stack } from "@inube/design-system";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdCheckCircle,
} from "react-icons/md";
import { StepIndicator } from "./StepIndicator";
import { StepBar } from "./StepBar";
import {
  StyledAssisted,
  StyledSteps,
  StyledStepsMobile,
  StyledStepsMobileId,
} from "./styles";

function AssistedUI(props) {
  const {
    isFirstStep,
    isLastStep,
    currentStep,
    currentStepInfo,
    handleNextStep,
    handlePreviousStep,
    isAssistedResponsive,
    steps,
  } = props;

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

  return (
    <Stack direction="column" gap="8px" alignItems="center">
      <StyledAssisted isAssistedResponsive={isAssistedResponsive}>
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
            <StyledSteps>{steps.map(renderStep)}</StyledSteps>
          </StyledStepsMobile>
        ) : (
          <StyledSteps>{steps.map(renderStep)}</StyledSteps>
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

export { AssistedUI };
