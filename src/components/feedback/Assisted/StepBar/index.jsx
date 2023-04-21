import { StyledStep, StyledLine } from "./styles";

function StepBar(props) {
  const { stepNumber, actualStep, isVerification } = props;
  const isActualStep = actualStep === stepNumber;
  const isActive = stepNumber < actualStep || (isActualStep && isVerification);
  return (
    <>
      <StyledLine
        isFirstStep={stepNumber === 1}
        isActualStep={isActualStep}
        isActive={isActive}
      />
      <StyledStep isActualStep={isActualStep} isActive={isActive}></StyledStep>
    </>
  );
}

export { StepBar };
