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
    description: ({ code }) => `Hemos eliminado con éxito al usuario ${code}.`,
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

export { sectionMessageConfig, decisionModalConfig };
