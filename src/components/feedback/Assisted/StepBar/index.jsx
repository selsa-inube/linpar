import { StyledStep, StyledLeftLine, StyledRightLine } from "./styles";

function StepBar(props) {
  const { id, stepActual, isActive, isFirstStep, isLastStep } = props;

  return (
    <>
      <StyledLeftLine
        isFirstStep={isFirstStep === id}
        stepActual={stepActual}
        isActive={isActive}
      />
      <StyledStep stepActual={stepActual} isActive={isActive}></StyledStep>
      <StyledRightLine isLastStep={isLastStep === id} isActive={isActive} />
    </>
  );
}

export { StepBar };
