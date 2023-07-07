interface IStep {
  id: string;
  stepName: string;
  isVerification?: boolean;
  stepDescription: string;
}

export type { IStep };
