interface IAction {
  id: number;
  actionName: string;
  content: (entry: Record<string, any>) => JSX.Element | JSX.Element;
  type: string;
}

interface ITitles {
  id: string;
  titleName: string;
  priority: number;
}

export type { IAction, ITitles };
