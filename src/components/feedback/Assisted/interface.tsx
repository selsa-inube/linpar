import { Button, Stack, Text, useMediaQuery } from "@inube/design-system";
import { MdArrowBack, MdArrowForward, MdCheckCircle } from "react-icons/md";
import { StepBar } from "./StepBar";
import { StepIndicator } from "./StepIndicator";
import { VerificationStep } from "./VerificationStep";
import {
  StyledButton,
  StyledDesktopContainer,
  StyledMobile,
  StyledSteps,
  StyledStepsContent,
  StyledStepsMobile,
  StyledStepsMobileId,
} from "./styles";
import { IStep, IVerificationData } from "./types";

interface IAssistedUIProps {
  currentStep: number;
  currentStepInfo?: IStep;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleStepChange: (stepId: number) => void;
  steps: IStep[];
  verificationData: Record<string, IVerificationData>;
}

const MAX_STEPS_PER_VIEW = 7;

function AssistedUI(props: IAssistedUIProps) {
  const {
    currentStep,
    currentStepInfo,
    handleNextStep,
    handlePreviousStep,
    handleStepChange,
    steps,
    verificationData,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 1100px)");

  const renderStep = (step: IStep, index: number) => {
    const Step = smallScreen ? StepBar : StepIndicator;
    const totalGroup = Math.ceil(steps.length / MAX_STEPS_PER_VIEW);
    const currentGroup = Math.ceil(currentStep / MAX_STEPS_PER_VIEW);
    const startIndex = (currentGroup - 1) * MAX_STEPS_PER_VIEW + 1;
    const endIndex = currentGroup * MAX_STEPS_PER_VIEW;

    const marginToLeft = totalGroup === currentGroup && step.id === startIndex;
    const marginToRight = currentGroup === 1 && step.id === endIndex;

    if (step.id >= startIndex && step.id <= endIndex) {
      return (
        <Step
          key={index}
          stepNumber={index + 1}
          stepName={step.stepName}
          actualStep={currentStep}
          isVerification={step.isVerification ?? false}
          marginToLeft={marginToLeft}
          marginToRight={marginToRight}
          handleStepChange={handleStepChange}
        />
      );
    }
    return null;
  };

  if (smallScreen) {
    return (
      <Stack direction="column" alignItems="center" gap="24px">
        <StyledMobile>
          <StyledButton>
            <Button
              variant="none"
              iconBefore={<MdArrowBack size={20} />}
              onClick={handlePreviousStep}
              disabled={currentStep === steps[0].id}
            />
          </StyledButton>
          <StyledStepsMobile>
            <Stack gap="8px" alignItems="center" justifyContent="center">
              <StyledStepsMobileId>
                <Text size="medium" type="label" appearance="primary">
                  {currentStep === steps[steps.length - 1].id ? (
                    <MdCheckCircle size={16} />
                  ) : (
                    currentStep
                  )}
                </Text>
              </StyledStepsMobileId>
              <Text type="label" size="medium" appearance="dark">
                {currentStepInfo?.stepName}
              </Text>
            </Stack>
            <StyledSteps>{steps.map(renderStep)}</StyledSteps>
          </StyledStepsMobile>
          <StyledButton>
            <Button
              variant="none"
              iconAfter={<MdArrowForward size={20} />}
              onClick={handleNextStep}
            />
          </StyledButton>
        </StyledMobile>
        {currentStepInfo?.isVerification && (
          <VerificationStep smallScreen verificationData={verificationData} />
        )}
      </Stack>
    );
  }

  return (
    <Stack direction="column" justifyContent="center" gap="48px">
      <StyledDesktopContainer>
        <Stack alignItems="center" justifyContent="center">
          <Button
            variant="none"
            iconBefore={<MdArrowBack size={18} />}
            onClick={handlePreviousStep}
            disabled={currentStep === steps[0].id}
          >
            <Text
              type="label"
              appearance={"primary"}
              disabled={currentStep === steps[0].id}
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
            onClick={handleNextStep}
          >
            <Text type="label" appearance="primary">
              Next
            </Text>
          </Button>
        </Stack>
        <Text type="label" appearance="gray" textAlign="center">
          {currentStepInfo?.stepDescription}
        </Text>
      </StyledDesktopContainer>
      {currentStepInfo?.isVerification && (
        <VerificationStep verificationData={verificationData} />
      )}
    </Stack>
  );
}

export { AssistedUI };
