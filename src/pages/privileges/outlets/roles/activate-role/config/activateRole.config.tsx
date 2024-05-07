import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";

import { EAppearance } from "@src/types/colors.types";

const activateRoleModal = {
  activation: {
    title: "Activar",
    description: (id: string) =>
      `Esta seguro de activar el Rol con código: ${id}? `,
    textAction: "Activar",
    appearance: EAppearance.SUCCESS,
  },
  deactivation: {
    title: "Desactivar",
    description: (id: string) =>
      `Esta seguro de desactivar el Rol con código: ${id}? `,
    textAction: "Desactivar",
    appearance: EAppearance.ERROR,
  },
};

const activateRoleMessages = {
  activation: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Activación exitosa!",
    description: (n_Rol: string) => `El Usuario ${n_Rol} esta activado `,
    appearance: EAppearance.SUCCESS,
  },
  deactivation: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Desactivación exitosa!",
    description: (n_Rol: string) => `El Usuario ${n_Rol} esta desactivado `,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo salió mal!",
    description: (n_Rol: string) =>
      `Hemos presentado problemas eliminando al rol ${n_Rol}.`,
    appearance: EAppearance.ERROR,
  },
};
export { activateRoleMessages, activateRoleModal };
