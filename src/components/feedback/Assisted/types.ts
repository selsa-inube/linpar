interface IStep {
  id: number;
  stepName: string;
  isVerification?: boolean;
  stepDescription: string;
}

export type { IStep };
