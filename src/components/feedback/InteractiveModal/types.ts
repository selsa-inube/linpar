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
  infoData: { [key: string]: string };
  actions?: Action[];
  labels?: Field[];
  infoTitle?: string;
  actionsTitle?: string;
}

export type { Field, Action, InteractiveModalProps };
