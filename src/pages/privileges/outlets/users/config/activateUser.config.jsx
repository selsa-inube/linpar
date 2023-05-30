import { MdThumbUpOffAlt, MdErrorOutline } from "react-icons/md";

const activateUserModal = {
  activation: {
    title: "Activate user",
    description: ({ code }) => `Esta seguro de Activar el usuario ${code}? `,
    textAction: "Activate",
    appearance: "confirm",
  },

  deactivation: {
    title: "Deactivate user",
    description: ({ code }) => `Esta seguro de Desactivar el usuario ${code}? `,
    textAction: "Deactivate",
    appearance: "remove",
  },
};

const activateUserMessages = {
  activate: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Activación exitosa!",
    description: ({ username }) => `El Usuario ${username} esta activado `,
    appearance: "confirm",
  },
  deactivate: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Desactivación exitosa!",
    description: ({ username }) => `El Usuario ${username} esta desactivado `,
    appearance: "confirm",
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo salió mal!",
    description: ({ code }) =>
      `Hemos presentado problemas eliminando al usuario ${code}.`,
    appearance: "remove",
  },
};
export { activateUserModal, activateUserMessages };
