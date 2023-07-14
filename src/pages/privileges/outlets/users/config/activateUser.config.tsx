import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";
import { IActionConfig } from "../types";

const activateUserModal = {
  activation: {
    title: "Activate user",
    description: ({ code }: IActionConfig) =>
      `Esta seguro de Activar el usuario ${code}? `,
    textAction: "Activate",
    appearance: "confirm",
  },

  deactivation: {
    title: "Deactivate user",
    description: ({ code }: IActionConfig) =>
      `Esta seguro de Desactivar el usuario ${code}? `,
    textAction: "Deactivate",
    appearance: "remove",
  },
};

const activateUserMessages = {
  activate: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Activación exitosa!",
    description: ({ username }: IActionConfig) =>
      `El Usuario ${username} esta activado `,
    appearance: "confirm",
  },
  deactivate: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Desactivación exitosa!",
    description: ({ username }: IActionConfig) =>
      `El Usuario ${username} esta desactivado `,
    appearance: "confirm",
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo salió mal!",
    description: ({ code }: IActionConfig) =>
      `Hemos presentado problemas eliminando al usuario ${code}.`,
    appearance: "remove",
  },
};
export { activateUserMessages, activateUserModal };
