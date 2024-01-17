import { EAppearance } from "@src/types/colors.types";
import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";

const surfaceFormsConfig = {
  primary: {
    description:
      "Las superficies de tipo primario se utilizan en componentes que están relacionados a acciones principales o comunican relación a la marca.",
    status: {
      regular: {
        title: "Regular",
        description:
          "La superficie tomará este color para resaltar acciones principales o el color de marca.",
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
      },
      disabled: {
        title: "Disabled",
        description:
          "El texto tomará este color cuando el texto se encuentre deshabilitado.",
      },
    },
  },
  error: {
    description:
      " Los textos de tipo error se utilizan en textos cortos, textos de botones y enlaces. Tiene como propósito resaltar un texto aprovechando el color principal de la marca (empresa)",
    status: {
      regular: {
        title: "Regular",
        description:
          "La superficie tomará este color para resaltar acciones principales o el color de marca.",
      },
      hover: {
        title: "Hover",
        description:
          "La superficie tomará este color cuando el cursor esté ubicado sobre el elemento.",
      },
      clear: {
        title: "Clear",
        description:
          "La superficie tomará este color cuando se quiera hacer un contraste de colores.",
      },
      disabled: {
        title: "Disabled",
        description:
          "El texto tomará este color cuando el texto se encuentre deshabilitado.",
      },
    },
  },
  warning: {
    description:
      "Los textos de tipo advertencia se utilizan en textos cortos, textos de botones y enlaces. Tiene como propósito resaltar un texto aprovechando el color principal de la marca (empresa)",
    status: {
      regular: {
        title: "Regular",
        description:
          "La superficie tomará este color para resaltar acciones principales o el color de marca.",
      },
      hover: {
        title: "Hover",
        description:
          "La superficie tomará este color cuando el cursor esté ubicado sobre el elemento.",
      },
      clear: {
        title: "Clear",
        description:
          "La superficie tomará este color cuando se quiera hacer un contraste de colores.",
      },
      disabled: {
        title: "Disabled",
        description:
          "El texto tomará este color cuando el texto se encuentre deshabilitado.",
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

export { surfaceFormsConfig, surfaceMessagesConfig };
