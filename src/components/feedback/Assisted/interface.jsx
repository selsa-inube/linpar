import { Button, Text, Stack } from "@inube/design-system";
import { MdArrowBack, MdArrowForward, MdCheckCircle } from "react-icons/md";
import { StepIndicator } from "./StepIndicator";
import { StepBar } from "./StepBar";
import {
  StyledSteps,
  StyledStepsMobile,
  StyledStepsMobileId,
  StyledButton,
} from "./styles";

function AssistedUI(props) {
  const {
    currentStep,
    currentStepInfo,
    handleNextStep,
    handlePreviousStep,
    smallScreen,
    steps,
  } = props;

  function renderStep(step, index) {
    const Step = smallScreen ? StepBar : StepIndicator;
    return (
      <Step
        key={index}
        stepNumber={index + 1}
        stepName={step.stepName}
        actualStep={currentStep}
        isVerification={step.isVerification}
      />
    );
  }

  if (smallScreen) {
    return (
      <Stack gap="16px" alignItems="center" justifyContent="center">
        <StyledButton>
          <Button
            variant="none"
            iconBefore={<MdArrowBack size={20} />}
            handleClick={handlePreviousStep}
            isDisabled={currentStep === steps[0].id}
          />
        </StyledButton>
        <StyledStepsMobile>
          <Stack gap="8px" alignItems="center" justifyContent="center">
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
        <StyledButton>
          <Button
            variant="none"
            iconAfter={<MdArrowForward size={20} />}
            handleClick={handleNextStep}
          />
        </StyledButton>
      </Stack>
    );
  }

  return (
    <Stack direction="column" gap="8px">
      <Stack alignItems="center" justifyContent="center">
        <Button
          variant="none"
          iconBefore={<MdArrowBack size={18} />}
          handleClick={handlePreviousStep}
          isDisabled={currentStep === steps[0].id}
        >
          <Text
            typo="labelLarge"
            appearance={currentStep === steps[0].id ? "disabled" : "primary"}
          >
            Prev
          </Text>
        </Button>
        <StyledSteps>{steps.map(renderStep)}</StyledSteps>
        <Button
          variant="none"
          iconAfter={<MdArrowForward size={18} />}
          handleClick={handleNextStep}
        >
          <Text typo="labelLarge" appearance="primary">
            Next
          </Text>
        </Button>
      </Stack>
      <Text typo="labelLarge" appearance="secondary" align="center">
        {currentStepInfo.stepDescription}
      </Text>
    </Stack>
  );
}

export { AssistedUI };
