interface IAction {
  id: number;
  actionName: string;
  content:
    | JSX.Element
    | ((entry: Record<string, string | number>) => JSX.Element);
  type: string;
}

interface ITitles {
  id: string;
  titleName: string;
  priority: number;
}

export type { IAction, ITitles };
