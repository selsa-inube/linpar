import { EAppearance } from "@src/types/colors.types";
import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";

const paletteMessagesConfig = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "Actualizacion de paleta exitosa",
    description: `La paleta de colores ha sido actualizada con exito`,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo ha salido mal!",
    description: `Hemos presentado problemas actualizando la paleta de colores.`,
    appearance: EAppearance.ERROR,
  },
};

const surfaceFormsConfig = {
  primary: {
    description:
      " Las superficies de tipo primario se utilizan en componentes que están relacionados a acciones principales o comunican relación a la marca.",
    status: {
      regular: {
        title: "Regular",
        description:
          "La superficie tomará este color para resaltar acciones principales o el color de marca.",
        tokenName: "B400",
      },
      hover: {
        title: "Hover",
        description:
          "La superficie tomará este color cuando el cursor esté ubicado sobre el elemento.",
        tokenName: "B300",
      },
      clear: {
        title: "Clear",
        description:
          "La superficie tomará este color cuando se quiera hacer un contraste de colores.",
        tokenName: "B50",
      },
      disabled: {
        title: "Disabled",
        description:
          "El texto tomará este color cuando el texto se encuentre deshabilitado.",
        tokenName: "N70",
      },
    },
  },
};
const surfaceMessagesConfig = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "Actualizacion para los tokens de texto ha sido exitosa",
    description: `Los tokens de texto han sido actualizados con exito`,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo ha salido mal!",
    description: `Hemos presentado problemas actualizando los tokens de texto.`,
    appearance: EAppearance.ERROR,
  },
};

export { paletteMessagesConfig, surfaceFormsConfig, surfaceMessagesConfig };
