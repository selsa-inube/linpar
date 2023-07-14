interface IMessageConfig {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
  appearance: string;
}

interface IFormValues {
  name: string;
  id: string;
  phone: string;
  email: string;
}

export type { IFormValues, IMessageConfig };
