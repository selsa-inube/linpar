import { MdThumbUpOffAlt, MdErrorOutline } from "react-icons/md";
import { EAppearance } from "@src/types/colors.types";

const messageInvitationSentConfig = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Envío exitoso!",
    description: "Hemos enviado con éxito la invitación al usuario",
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo salió mal!",
    description: "Algunos de los campos tienen errores intente nuevamente",
    appearance: EAppearance.ERROR,
  },
};

export { messageInvitationSentConfig };
