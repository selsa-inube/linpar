interface PopupProps {
  portalId: string;
  title: string;
  closeModal: () => void;
  children: React.ReactNode;
}

export type { PopupProps };
