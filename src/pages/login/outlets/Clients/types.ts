interface IClientState {
  ref: (EventTarget & HTMLInputElement) | null;
  value: boolean;
}

interface IClient {
  id: number;
  name: string;
  sigla: string;
  logo: string;
}

export type { IClientState, IClient };
