import { Text, Stack } from "@inube/design-system";
import {
  MdKeyboardArrowDown,
  MdCheckCircle,
  MdCheckCircleOutline,
} from "react-icons/md";
import {
  StyledStep,
  StyledStepNumber,
  StyledLeftLine,
  StyledRightLine,
} from "./styles";

function StepIndicator(props) {
  const { stepNumber, stepActual, stepName, isActive, isVerification } = props;

  const renderStepNumber = () => {
    if (isVerification) {
      return stepActual || isActive ? (
        <MdCheckCircle size={30} />
      ) : (
        <MdCheckCircleOutline size={30} />
      );
    }
    return stepNumber;
  };

  const getAppearance = () => {
    if (stepActual) {
      return "primary";
    }
    if (isActive) {
      return "light";
    }
    return "disabled";
  };

  const getLabelAppearance = () => {
    if (stepActual) {
      return "hover";
    }
    if (isActive) {
      return "dark";
    }
    return "disabled";
  };

  return (
    <StyledStep stepActual={stepActual}>
      <Stack direction="column" alignItems="center">
        <MdKeyboardArrowDown size={24} />
        <StyledStepNumber stepActual={stepActual} isActive={isActive}>
          <StyledLeftLine
            isFirstStep={stepNumber === 1}
            stepActual={stepActual}
            isActive={isActive}
          />
          <Text typo="titleSmall" appearance={getAppearance()}>
            {renderStepNumber()}
          </Text>
          <StyledRightLine isLastStep={isVerification} isActive={isActive} />
        </StyledStepNumber>
        <Text
          typo="labelMedium"
          appearance={getLabelAppearance()}
          align="center"
          padding="8px"
        >
          {stepName}
        </Text>
      </Stack>
    </StyledStep>
  );
}

export { StepIndicator };
