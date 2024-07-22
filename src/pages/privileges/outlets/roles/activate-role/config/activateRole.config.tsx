import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";

import { EAppearance } from "@src/types/colors.types";

const activateRoleModal = {
  activation: {
    title: "Activar",
    description: (n_Rol: string) => `Esta seguro de activar el Rol: ${n_Rol}? `,
    textAction: "Activar",
    appearance: EAppearance.SUCCESS,
  },
  deactivation: {
    title: "Desactivar",
    description: (n_Rol: string) =>
      `Esta seguro de desactivar el Rol: ${n_Rol}? `,
    textAction: "Desactivar",
    appearance: EAppearance.ERROR,
  },
};

const activateRoleMessages = {
  activation: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Activación exitosa!",
    description: (n_Rol: string) => `El Rol ${n_Rol} fue activado.`,
    appearance: EAppearance.SUCCESS,
  },
  deactivation: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Desactivación exitosa!",
    description: (n_Rol: string) => `El Rol ${n_Rol} fue desactivado `,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 3,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo salió mal!",
    description: (n_Rol: string) =>
      `Se presentó un error guardando los datos del Rol ${n_Rol}, para mayor informacion contacte a soporte.`,
    appearance: EAppearance.ERROR,
  },
};
export { activateRoleMessages, activateRoleModal };
