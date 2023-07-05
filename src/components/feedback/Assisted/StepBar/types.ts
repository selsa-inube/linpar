interface IStepProps {
  isPreviousStep?: boolean;
  isActualStep?: boolean;
  isFirstStep?: boolean;
}

interface IStepBarProps {
  stepNumber: number;
  actualStep: number;
  isVerification: boolean;
}

export type { IStepProps, IStepBarProps };
