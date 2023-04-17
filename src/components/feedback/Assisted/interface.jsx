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
    currentStep,
    currentStepInfo,
    handleNextStep,
    handlePreviousStep,
    isAssistedResponsive,
    steps,
  } = props;

  function renderStep(step, index) {
    const Step = isAssistedResponsive ? StepBar : StepIndicator;
    return (
      <Step
        key={index}
        stepNumber={index + 1}
        stepName={step.stepName}
        stepActual={currentStep === step.id}
        isActive={currentStep > step.id}
        isVerification={step.isVerification}
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
          isDisabled={currentStep === steps[0].id}
        >
          <Text
            typo="labelLarge"
            appearance={currentStep === steps[0].id ? "disabled" : "primary"}
          >
            {!isAssistedResponsive && "Prev"}
          </Text>
        </Button>
        {isAssistedResponsive ? (
          <StyledStepsMobile>
            <Stack gap="8px" alignItems="center">
              <StyledStepsMobileId>
                <Text typo="labelMedium" appearance="primary">
                  {steps[steps.length - 1].id === currentStep ? (
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
