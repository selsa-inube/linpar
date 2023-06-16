interface IAction {
  id: number;
  actionName: string;
  content: (
    entry: Record<string, string | number>
  ) => JSX.Element | JSX.Element;
  type: string;
}

interface ITitles {
  id: string;
  titleName: string;
  priority: number;
}

export type { IAction, ITitles };
