import { StyledStep, StyledLine } from "./styles";

interface IStepBarProps {
  stepNumber: number;
  actualStep: number;
  isVerification: boolean;
}

function StepBar(props: IStepBarProps) {
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
export type { IStepBarProps };
