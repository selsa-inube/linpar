interface IStepIndicatorProps {
  stepNumber: number;
  actualStep: number;
  stepName: string;
  isVerification: boolean;
  marginToLeft?: boolean;
  marginToRight?: boolean;
}

interface IStepProps {
  marginToRight?: boolean;
  marginToLeft?: boolean;
  isFirstStep?: boolean;
  isLastStep?: boolean;
  isPreviousStep?: boolean;
  isActualStep?: boolean;
}

export type { IStepProps, IStepIndicatorProps };
