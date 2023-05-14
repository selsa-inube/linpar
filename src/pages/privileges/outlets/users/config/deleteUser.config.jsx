import { MdThumbUpOffAlt, MdErrorOutline } from "react-icons/md";
const decisionModalConfig = {
  delete: {
    title: "Eliminar Usuario",
    description: ({ username }) =>
      `¿Está seguro de que desea eliminar al usuario ${username}?`,
    actionText: "Eliminar",
    appearance: "remove",
  },
};

const sectionMessageConfig = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Eliminación exitosa!",
    description: `Hemos eliminado con éxito al usuario.`,
    appearance: "confirm",
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo salió mal!",
    description: `Hemos presentado problemas eliminando al usuario.`,
    appearance: "remove",
  },
};

export { sectionMessageConfig, decisionModalConfig };
