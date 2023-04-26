import { Text, Stack } from "@inube/design-system";
import { MdKeyboardArrowDown, MdCheckCircleOutline } from "react-icons/md";
import {
  StyledStep,
  StyledStepNumber,
  StyledLeftLine,
  StyledRightLine,
  StyledArrowDown,
} from "./styles";

function StepIndicator(props) {
  const { stepNumber, actualStep, stepName, isVerification } = props;

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
    return "disabled";
  };

  const getLabelAppearance = () => {
    if (isActualStep) {
      return "hover";
    }
    if (isPreviousStep) {
      return "dark";
    }
    return "disabled";
  };

  return (
    <StyledStep>
      <Stack direction="column" alignItems="center">
        <StyledArrowDown isActualStep={isActualStep}>
          <MdKeyboardArrowDown size={24} />
        </StyledArrowDown>
        <StyledStepNumber
          isActualStep={isActualStep}
          isPreviousStep={isPreviousStep || inVerification}
        >
          <StyledLeftLine
            isFirstStep={stepNumber === 1}
            isActualStep={isActualStep}
            isPreviousStep={isPreviousStep || inVerification}
          />

          <Text typo="titleSmall" appearance={getAppearance()}>
            {isVerification ? <MdCheckCircleOutline size={30} /> : stepNumber}
          </Text>
          <StyledRightLine
            isLastStep={isVerification}
            isPreviousStep={isPreviousStep || inVerification}
          />
        </StyledStepNumber>
        <Text
          typo="labelMedium"
          appearance={getLabelAppearance()}
          padding="8px"
        >
          {stepName}
        </Text>
      </Stack>
    </StyledStep>
  );
}

export { StepIndicator };
