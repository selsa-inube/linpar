import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";

import { EAppearance } from "@src/types/colors.types";
import { IGeneralInformationEntry } from "@src/services/users/users.types";

const activateUserModal = {
  activation: {
    title: "Activate",
    description: (id: string) =>
      `Esta seguro de activar el usuario con id ${id}? `,
    textAction: "Activate",
    appearance: EAppearance.SUCCESS,
  },
  deactivation: {
    title: "Deactivate",
    description: (id: string) =>
      `Esta seguro de desactivar el usuario con id ${id}? `,
    textAction: "Deactivate",
    appearance: EAppearance.ERROR,
  },
};

const activateUserMessages = {
  activation: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Activación exitosa!",
    description: ({ n_Usuari }: IGeneralInformationEntry) =>
      `El Usuario ${n_Usuari} esta activado `,
    appearance: EAppearance.SUCCESS,
  },
  deactivation: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Desactivación exitosa!",
    description: ({ n_Usuari }: IGeneralInformationEntry) =>
      `El Usuario ${n_Usuari} esta desactivado `,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo salió mal!",
    description: ({ k_Usuari }: IGeneralInformationEntry) =>
      `Hemos presentado problemas eliminando al usuario ${k_Usuari}.`,
    appearance: EAppearance.ERROR,
  },
};
export { activateUserMessages, activateUserModal };
