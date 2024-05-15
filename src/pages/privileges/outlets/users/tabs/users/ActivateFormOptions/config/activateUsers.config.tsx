import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";
import { EAppearance } from "@src/types/colors.types";

const activateUsersModal = {
  activation: {
    title: "Activar",
    description: (id: string) =>
      `Esta seguro de activar el cargo con código ${id}? `,
    textAction: "Activar",
    appearance: EAppearance.SUCCESS,
  },
  deactivation: {
    title: "Desactivar",
    description: (id: string) =>
      `Esta seguro de desactivar el cargo con código ${id}? `,
    textAction: "Desactivar",
    appearance: EAppearance.ERROR,
  },
};

const activateUsersMessages = {
  activation: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Activación exitosa!",
    description: (n_Grupo: string) => `El cargo ${n_Grupo} esta activado `,
    appearance: EAppearance.SUCCESS,
  },
  deactivation: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Desactivación exitosa!",
    description: (n_Grupo: string) => `El cargo ${n_Grupo} esta desactivado `,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo salió mal!",
    description: (n_Grupo: string) =>
      `Hemos presentado problemas eliminando al cargo ${n_Grupo}.`,
    appearance: EAppearance.ERROR,
  },
};
export { activateUsersMessages, activateUsersModal };
