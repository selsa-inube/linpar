import { Button, Text, Stack } from "@inube/design-system";
import { MdArrowBack, MdArrowForward, MdCheckCircle } from "react-icons/md";
import { StepIndicator } from "./StepIndicator";
import { StepBar } from "./StepBar";
import {
  StyledSteps,
  StyledStepsMobile,
  StyledStepsMobileId,
  StyledButton,
  StyledMobile,
  StyledDesktopContainer,
} from "./styles";

const MAX_STEPS_PER_VIEW = 9;
let marginSteps = "";

function AssistedUI(props) {
  const {
    currentStep,
    currentStepInfo,
    handleNextStep,
    handlePreviousStep,
    smallScreen,
    steps,
  } = props;

  const validateStepsPerView = MAX_STEPS_PER_VIEW > steps.length;

  function renderStep(step, index) {
    const Step = smallScreen ? StepBar : StepIndicator;

    const totalGroup = Math.ceil(steps.length / MAX_STEPS_PER_VIEW);

    const currentGroup = Math.ceil(currentStep / MAX_STEPS_PER_VIEW);
    const startIndex = (currentGroup - 1) * MAX_STEPS_PER_VIEW + 1;
    const endIndex = currentGroup * MAX_STEPS_PER_VIEW;

    if (validateStepsPerView) {
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

    if (step.id >= startIndex && step.id <= endIndex) {
      marginSteps =
        currentGroup === 1
          ? "right"
          : currentGroup === totalGroup
          ? "left"
          : "";
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
  }

  if (smallScreen) {
    return (
      <StyledMobile>
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
            isDisabled={currentStep === steps.length}
          />
        </StyledButton>
      </StyledMobile>
    );
  }

  return (
    <StyledDesktopContainer>
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
        <StyledSteps marginSteps={marginSteps}>
          {steps.map(renderStep)}
        </StyledSteps>
        <Button
          variant="none"
          iconAfter={<MdArrowForward size={18} />}
          handleClick={handleNextStep}
          isDisabled={currentStep === steps.length}
        >
          <Text
            typo="labelLarge"
            appearance={currentStep === steps.length ? "disabled" : "primary"}
          >
            Next
          </Text>
        </Button>
      </Stack>
      <Text typo="labelLarge" appearance="secondary" align="center">
        {currentStepInfo.stepDescription}
      </Text>
    </StyledDesktopContainer>
  );
}

export { AssistedUI };
