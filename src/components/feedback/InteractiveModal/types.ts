interface ILabel {
  id: string;
  titleName: string;
  priority: number;
}

interface IAction {
  id: number;
  actionName: string;
  content:
    | JSX.Element
    | ((entry: Record<string, string | number>) => JSX.Element);
  type: string;
}

export type { IAction, ILabel };
