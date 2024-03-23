import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";
import { EAppearance } from "@src/types/colors.types";
import { IGeneralInformationEntry } from "../types/forms.types";

const activateUserModal = {
  activation: {
    title: "Activate",
    description: ({ code }: IGeneralInformationEntry) =>
      `Esta seguro de activar ${code}? `,
    textAction: "Activate",
    appearance: EAppearance.SUCCESS,
  },
  deactivation: {
    title: "Deactivate",
    description: ({ code }: IGeneralInformationEntry) =>
      `Esta seguro de desactivar ${code}? `,
    textAction: "Deactivate",
    appearance: EAppearance.ERROR,
  },
};

const activateUserMessages = {
  activation: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Activación exitosa!",
    description: ({ username }: IGeneralInformationEntry) =>
      `El Usuario ${username} esta activado `,
    appearance: EAppearance.SUCCESS,
  },
  deactivation: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Desactivación exitosa!",
    description: ({ username }: IGeneralInformationEntry) =>
      `El Usuario ${username} esta desactivado `,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo salió mal!",
    description: ({ code }: IGeneralInformationEntry) =>
      `Hemos presentado problemas eliminando al usuario ${code}.`,
    appearance: EAppearance.ERROR,
  },
};
export { activateUserMessages, activateUserModal };
