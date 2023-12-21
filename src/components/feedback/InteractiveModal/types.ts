type ModalTypes = "fields" | "search";

interface Field {
  id: string;
  titleName: string;
}

interface Action {
  id: string;
  content: string | ((data: { [key: string]: any }) => JSX.Element);
}

interface InteractiveModalProps {
  portalId: string;
  title: string;
  closeModal: () => void;
  infoData: { [key: string]: string } | Record<string, string | number>;
  actions?: Action[];
  labels?: Field[];
  infoTitle?: string;
  actionsTitle?: string;
  searchData?:
    | { [key: string]: string }
    | Record<string, string | number>
    | any;
  type?: ModalTypes;
  divider?: boolean;
}

export type { Field, Action, InteractiveModalProps, ModalTypes };
