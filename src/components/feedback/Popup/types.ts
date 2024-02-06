import React from "react";
interface PopupProps {
  title: string;
  closeModal: () => void;
  children: React.ReactNode;
  fieldsetRef?: React.MutableRefObject<HTMLFieldSetElement>;
}

export type { PopupProps };
