import { MdThumbUpOffAlt, MdErrorOutline } from "react-icons/md";
const decisionModalConfig = {
  delete: {
    title: "Eliminar invitación",
    description: "¿Está seguro de que desea eliminar la invitación?",
    actionText: "Eliminar",
    appearance: "remove",
  },
};

const sectionMessageConfig = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Eliminación exitosa!",
    description: "Hemos eliminado con éxito la invitación del usuario.",
    appearance: "confirm",
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo salió mal!",
    description:
      "Hemos presentado problemas eliminando la invitación del usuario.",
    appearance: "remove",
  },
};

export { sectionMessageConfig, decisionModalConfig };
