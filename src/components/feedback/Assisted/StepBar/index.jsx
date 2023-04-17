import { StyledStep, StyledLeftLine, StyledRightLine } from "./styles";

function StepBar(props) {
  const { stepNumber, stepActual, isActive, isVerification } = props;

  return (
    <>
      <StyledLeftLine
        isFirstStep={stepNumber === 1}
        stepActual={stepActual}
        isActive={isActive}
      />
      <StyledStep stepActual={stepActual} isActive={isActive}></StyledStep>
      <StyledRightLine isLastStep={isVerification} isActive={isActive} />
    </>
  );
}

export { StepBar };
