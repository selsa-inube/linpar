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
  searchData: { [key: string]: string } | Record<string, string | number> | any;
  selectedItem?: string;
  actions?: Action[];
  labels?: Field[];
  infoTitle?: string;
  actionsTitle?: string;
  id?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  type?: ModalTypes;
  divider?: boolean;
  onClick?: any;
  idLabel?: string;
  nameLabel?: string;
  setValidateCardRemoved?: React.Dispatch<React.SetStateAction<boolean>>;
  message?: string;
  status?: string;
}

export type { Field, Action, InteractiveModalProps, ModalTypes };
