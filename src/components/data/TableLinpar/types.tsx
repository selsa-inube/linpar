interface ITitle {
  id: string;
  titleName: string;
  priority: number;
}

interface IEntry {
  id: string | number;
  [key: string]: any;
}

interface IAction {
  id: string;
  actionName: string;
  content: (entry: IEntry) => React.ReactNode;
  mobilePriority?: boolean;
}

interface IBreakpoint {
  breakpoint: string;
  totalColumns: number;
}

export type { ITitle, IAction, IEntry, IBreakpoint };
