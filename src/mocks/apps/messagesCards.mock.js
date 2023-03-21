import { MdThumbUpOffAlt, MdErrorOutline } from "react-icons/md";
const messageInvitationSent = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Envío exitoso!",
    description: "Hemos enviado con éxito la invitación al usuario",
    appearance: "confirm",
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo salió mal!",
    description: "Algunos de los campos tienen errores intente nuevamente",
    appearance: "remove",
  },
};

export { messageInvitationSent };
