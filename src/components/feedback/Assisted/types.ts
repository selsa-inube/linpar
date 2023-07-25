interface IStep {
  id: number;
  stepName: string;
  isVerification?: boolean;
  stepDescription: string;
}

interface IVerificationData {
  id: string;
  title: string;
  content: React.ReactNode;
  isFullWidth?: boolean;
}

export type { IStep, IVerificationData };
