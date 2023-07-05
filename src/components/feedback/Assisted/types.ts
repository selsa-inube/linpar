interface IStep {
  id: string;
  stepName: string;
  isVerification: boolean;
  stepDescription: string;
}

interface IAssistedProps {
  steps: IStep[];
  currentStep: string;
  handleStepChange: (stepId: string) => void;
}

interface IAssistedUIProps {
  currentStep: string;
  currentStepInfo: IStep | undefined;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  steps: IStep[];
}

export type { IStep, IAssistedProps, IAssistedUIProps };
