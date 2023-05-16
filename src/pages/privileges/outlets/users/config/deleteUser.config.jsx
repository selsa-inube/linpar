import { MdThumbUpOffAlt, MdErrorOutline } from "react-icons/md";
const decisionModalConfig = {
  delete: {
    title: "Eliminar Usuario",
    description: ({ code }) =>
      `¿Está seguro de que desea eliminar al usuario ${code}?`,
    actionText: "Eliminar",
    appearance: "remove",
  },
};

const sectionMessageConfig = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Eliminación exitosa!",
    description: (value) => `Hemos eliminado con éxito al usuario ${value}.`,
    appearance: "confirm",
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo salió mal!",
    description: (value) =>
      `Hemos presentado problemas eliminando al usuario ${value}.`,
    appearance: "remove",
  },
};

export { sectionMessageConfig, decisionModalConfig };
