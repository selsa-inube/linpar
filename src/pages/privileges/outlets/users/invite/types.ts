interface IMessageConfig {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
  appearance: string;
}

interface IInviteFormValues {
  name: string;
  id: string;
  phone: string;
  email: string;
}

export type { IInviteFormValues, IMessageConfig };
