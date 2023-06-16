interface IAction {
  id: number;
  actionName: string;
  content: JSX.Element | ((entry: Record<string, any>) => JSX.Element);
  type: string;
}

interface ILabel {
  id: string;
  titleName: string;
  priority: number;
}

export type { IAction, ILabel };
