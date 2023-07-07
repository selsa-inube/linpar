import { StyledStep, StyledLine } from "./styles";

interface StepBarProps {
  stepNumber: number;
  actualStep: number;
  isVerification: boolean;
}

function StepBar(props: StepBarProps) {
  const { stepNumber, actualStep, isVerification } = props;
  const isActualStep: boolean = actualStep === stepNumber;
  const isPreviousStep: boolean = stepNumber < actualStep;
  const inVerification: boolean = isActualStep && isVerification;

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
      />
    </>
  );
}

export { StepBar };
export type { StepBarProps };
