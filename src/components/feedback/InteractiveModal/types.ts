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
  closeModal: () => void;
  infoData: { [key: string]: string } | Record<string, string | number>;
  portalId: string;
  title: string;
  actionsTitle?: string;
  actions?: Action[];
  divider?: boolean;
  id?: string;
  idLabel?: string;
  infoTitle?: string;
  label?: string;
  labels?: Field[];
  name?: string;
  nameLabel?: string;
  onClick?: any;
  placeholder?: string;
  searchData?:
    | { [key: string]: string }
    | Record<string, string | number | unknown>[];
  selectedItem?: string;
  setValidateCardRemoved?: React.Dispatch<React.SetStateAction<boolean>>;
  type?: ModalTypes;
}

export type { Field, Action, InteractiveModalProps, ModalTypes };
