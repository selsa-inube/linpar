import { Button, Text, Stack, useMediaQuery } from "@inube/design-system";
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
  StyledStepsContent,
} from "./styles";
import { IStep, IAssistedUIProps } from "./types";

const MAX_STEPS_PER_VIEW = 7;

function AssistedUI(props: IAssistedUIProps) {
  const {
    currentStep,
    currentStepInfo,
    handleNextStep,
    handlePreviousStep,
    steps,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 1100px)");

  const renderStep = (step: IStep, index: number) => {
    const Step = smallScreen ? StepBar : StepIndicator;
    const totalGroup = Math.ceil(steps.length / MAX_STEPS_PER_VIEW);
    const currentGroup = Math.ceil(Number(currentStep) / MAX_STEPS_PER_VIEW);
    const startIndex = (currentGroup - 1) * MAX_STEPS_PER_VIEW + 1;
    const endIndex = currentGroup * MAX_STEPS_PER_VIEW;

    const marginToLeft =
      totalGroup === currentGroup && Number(step.id) === startIndex;
    const marginToRight = currentGroup === 1 && Number(step.id) === endIndex;

    if (Number(step.id) >= startIndex && Number(step.id) <= endIndex) {
      return (
        <Step
          key={index}
          stepNumber={index + 1}
          stepName={step.stepName}
          actualStep={Number(currentStep)}
          isVerification={step.isVerification}
          marginToLeft={marginToLeft}
          marginToRight={marginToRight}
        />
      );
    }
    return null;
  };

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
              {currentStepInfo?.stepName}
            </Text>
          </Stack>
          <StyledSteps>{steps.map(renderStep)}</StyledSteps>
        </StyledStepsMobile>
        <StyledButton>
          <Button
            variant="none"
            iconAfter={<MdArrowForward size={20} />}
            handleClick={handleNextStep}
            isDisabled={currentStep === String(steps.length)}
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
        <StyledStepsContent>
          <StyledSteps>{steps.map(renderStep)}</StyledSteps>
        </StyledStepsContent>
        <Button
          variant="none"
          iconAfter={<MdArrowForward size={18} />}
          handleClick={handleNextStep}
          isDisabled={currentStep === String(steps.length)}
        >
          <Text
            typo="labelLarge"
            appearance={
              currentStep === String(steps.length) ? "disabled" : "primary"
            }
          >
            Next
          </Text>
        </Button>
      </Stack>
      <Text typo="labelLarge" appearance="secondary" align="center">
        {currentStepInfo?.stepDescription}
      </Text>
    </StyledDesktopContainer>
  );
}

export { AssistedUI };
