import { Text, Stack } from "@inube/design-system";
import { MdKeyboardArrowDown, MdCheckCircleOutline } from "react-icons/md";
import {
  StyledStep,
  StyledStepNumber,
  StyledLeftLine,
  StyledRightLine,
  StyledArrowDown,
  StyledStepCircle,
} from "./styles";

interface StepIndicatorProps {
  stepNumber: number;
  actualStep: number;
  stepName: string;
  isVerification?: boolean;
  marginToLeft?: boolean;
  marginToRight?: boolean;
  handleStepChange: (stepId: number) => void;
}

function StepIndicator(props: StepIndicatorProps) {
  const {
    stepNumber,
    actualStep,
    stepName,
    isVerification,
    marginToLeft,
    marginToRight,
    handleStepChange,
  } = props;

  const isActualStep = actualStep === stepNumber;
  const isPreviousStep = stepNumber < actualStep;
  const inVerification = isActualStep && isVerification;

  const getAppearance = () => {
    if (isActualStep && !inVerification) {
      return "primary";
    }
    if (isPreviousStep || inVerification) {
      return "light";
    }
    return "gray";
  };

  const getLabelAppearance = () => {
    if (isActualStep) {
      return "hover";
    }
    if (isPreviousStep) {
      return "dark";
    }
    return "gray";
  };

  function handleClickStep() {
    if (stepNumber <= actualStep + 1) {
      handleStepChange(stepNumber);
    }
  }

  return (
    <StyledStep marginToLeft={marginToLeft} marginToRight={marginToRight}>
      <Stack direction="column" alignItems="center">
        <StyledArrowDown isActualStep={isActualStep}>
          <MdKeyboardArrowDown size={24} />
        </StyledArrowDown>
        <StyledStepNumber>
          <StyledLeftLine
            isFirstStep={stepNumber === 1}
            isActualStep={isActualStep}
            isPreviousStep={isPreviousStep || inVerification}
          />
          <StyledStepCircle
            isActualStep={isActualStep}
            isPreviousStep={isPreviousStep || inVerification}
            onClick={handleClickStep}
          >
            {!isVerification ? (
              <Text type="title" size="small" appearance={getAppearance()}>
                {stepNumber}
              </Text>
            ) : (
              <MdCheckCircleOutline size={30} />
            )}
          </StyledStepCircle>

          <StyledRightLine
            isLastStep={isVerification}
            isPreviousStep={isPreviousStep || inVerification}
          />
        </StyledStepNumber>
        <Text
          type="label"
          size="medium"
          appearance={getLabelAppearance()}
          padding="8px"
          textAlign="center"
        >
          {stepName}
        </Text>
      </Stack>
    </StyledStep>
  );
}

export { StepIndicator };
export type { StepIndicatorProps };
