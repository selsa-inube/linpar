interface PopupProps {
  title: string;
  closeModal: () => void;
  children: React.ReactNode;
  category: string;
}

export type { PopupProps };
