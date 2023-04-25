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

  const isActive = stepNumber < actualStep || (isActualStep && isVerification);

  const getAppearance = () => {
    if (isActualStep) {
      if (isVerification) {
        return "light";
      }
      return "primary";
    }
    if (isActive) {
      return "light";
    }
    return "disabled";
  };

  const getLabelAppearance = () => {
    if (isActualStep) {
      return "hover";
    }
    if (isActive) {
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
        <StyledStepNumber isActualStep={isActualStep} isActive={isActive}>
          <StyledLeftLine
            isFirstStep={stepNumber === 1}
            isActualStep={isActualStep}
            isActive={isActive}
          />

          <Text typo="titleSmall" appearance={getAppearance()}>
            {isVerification ? <MdCheckCircleOutline size={30} /> : stepNumber}
          </Text>
          <StyledRightLine isLastStep={isVerification} isActive={isActive} />
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
