import { StyledStep, StyledLine } from "./styles";

function StepBar(props) {
  const { stepNumber, actualStep, isVerification } = props;
  const isActualStep = actualStep === stepNumber;
  const isPreviousStep = stepNumber < actualStep;
  const inVerification = isActualStep && isVerification;
  return (
    <>
      <StyledLine
        isFirstStep={stepNumber === 1}
        isActualStep={isActualStep}
        isPreviousStep={isPreviousStep || inVerification}
      />
      <StyledStep
        isActualStep={isActualStep}
        isPreviousStep={isPreviousStep || inVerification}
      ></StyledStep>
    </>
  );
}

export { StepBar };
