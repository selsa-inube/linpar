interface PopupProps {
  title: string;
  closeModal: () => void;
  children: React.ReactNode;
  fieldsetRef?: any;
}

export type { PopupProps };
