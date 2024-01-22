import { EAppearance } from "@src/types/colors.types";
import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";

const linesFormsConfig = {
  primary: {
    description:
      "Las líneas de tipo primario se utilizan en componentes que están relacionados a acciones principales o comunican relación a la marca.",
    status: {
      regular: {
        title: "Regular",
        description:
          "La línea tomará este color para resaltar acciones principales o el color de marca.",
      },
      hover: {
        title: "Hover",
        description:
          "La línea tomará este color cuando el cursor esté ubicado sobre el elemento.",
      },
      focus: {
        title: "Focus",
        description:
          "La línea tomará este color para comunicar el usuario está enfocado en un elemento.",
      },
      disabled: {
        title: "Disabled",
        description:
          "La línea tomará este color cuando se encuentre deshabilitada.",
      },
    },
  },
  error: {
    description:
      "Las líneas de tipo error se utilizan en componentes que están relacionados a acciones principales o comunican relación a la marca.",
    status: {
      regular: {
        title: "Regular",
        description:
          "La línea tomará este color para resaltar acciones principales o el color de marca.",
      },
      hover: {
        title: "Hover",
        description:
          "La línea tomará este color cuando el cursor esté ubicado sobre el elemento.",
      },
      focus: {
        title: "Focus",
        description:
          "La línea tomará este color para comunicar el usuario está enfocado en un elemento.",
      },
      disabled: {
        title: "Disabled",
        description:
          "La línea tomará este color cuando se encuentre deshabilitada.",
      },
    },
  },
  warning: {
    description:
      " Los textos de tipo advertencia se utilizan en textos cortos, textos de botones y enlaces. Tiene como propósito resaltar un texto aprovechando el color principal de la marca (empresa)",
    status: {
      regular: {
        title: "Regular",
        description:
          "La línea tomará este color para resaltar acciones principales o el color de marca.",
      },
      hover: {
        title: "Hover",
        description:
          "La línea tomará este color cuando el cursor esté ubicado sobre el elemento.",
      },
      focus: {
        title: "Focus",
        description:
          "La línea tomará este color para comunicar el usuario está enfocado en un elemento.",
      },
      disabled: {
        title: "Disabled",
        description:
          "La línea tomará este color cuando se encuentre deshabilitada.",
      },
    },
  },
  success: {
    description:
      " Los textos de tipo exito se utilizan en textos cortos, textos de botones y enlaces. Tiene como propósito resaltar un texto aprovechando el color principal de la marca (empresa)",
    status: {
      regular: {
        title: "Regular",
        description:
          "La línea tomará este color para resaltar acciones principales o el color de marca.",
      },
      hover: {
        title: "Hover",
        description:
          "La línea tomará este color cuando el cursor esté ubicado sobre el elemento.",
      },
      focus: {
        title: "Focus",
        description:
          "La línea tomará este color para comunicar el usuario está enfocado en un elemento.",
      },
      disabled: {
        title: "Disabled",
        description:
          "La línea tomará este color cuando se encuentre deshabilitada.",
      },
    },
  },
  information: {
    description:
      " Los textos de tipo informacion se utilizan en textos cortos, textos de botones y enlaces. Tiene como propósito resaltar un texto aprovechando el color principal de la marca (empresa)",
    status: {
      regular: {
        title: "Regular",
        description:
          "La línea tomará este color para resaltar acciones principales o el color de marca.",
      },
      hover: {
        title: "Hover",
        description:
          "La línea tomará este color cuando el cursor esté ubicado sobre el elemento.",
      },
      focus: {
        title: "Focus",
        description:
          "La línea tomará este color para comunicar el usuario está enfocado en un elemento.",
      },
      disabled: {
        title: "Disabled",
        description:
          "La línea tomará este color cuando se encuentre deshabilitada.",
      },
    },
  },
  help: {
    description:
      " Los textos de tipo ayuda se utilizan en textos cortos, textos de botones y enlaces. Tiene como propósito resaltar un texto aprovechando el color principal de la marca (empresa)",
    status: {
      regular: {
        title: "Regular",
        description:
          "La línea tomará este color para resaltar acciones principales o el color de marca.",
      },
      hover: {
        title: "Hover",
        description:
          "La línea tomará este color cuando el cursor esté ubicado sobre el elemento.",
      },
      focus: {
        title: "Focus",
        description:
          "La línea tomará este color para comunicar el usuario está enfocado en un elemento.",
      },
      disabled: {
        title: "Disabled",
        description:
          "La línea tomará este color cuando se encuentre deshabilitada.",
      },
    },
  },
  divisor: {
    description:
      "Las líneas de tipo Spinner son usadas en los estados de carga, para indicarle al usuario que hay un tiempo de espera. Este cambio modificara solo el color de la senda, la línea que realiza la rotación está determinado por los tokens de color definidos en Primario, Error, Advertencia, Éxito, Información y Ayuda.",
    status: {
      regular: {
        title: "Regular",
        description:
          "La línea tomará este color para resaltar acciones principales o el color de marca.",
      },
      transparent: {
        title: "Transparent",
        description:
          "La línea tomará este color cuando el cursor esté ubicado sobre el elemento.",
      },
    },
  },
  spinner: {
    description:
      "Las líneas de tipo Spinner son usadas en los estados de carga, para indicarle al usuario que hay un tiempo de espera. Este cambio modificara solo el color de la senda, la línea que realiza la rotación está determinado por los tokens de color definidos en Primario, Error, Advertencia, Éxito, Información y Ayuda.",
    status: {
      regular: {
        title: "Regular",
        description:
          "La línea tomará este color para resaltar acciones principales o el color de marca.",
      },
      transparent: {
        title: "Transparent",
        description:
          "La línea tomará este color cuando el cursor esté ubicado sobre el elemento.",
      },
    },
  },
  dark: {
    description:
      " Los textos de tipo oscuro se utilizan en textos cortos, textos de botones y enlaces. Tiene como propósito resaltar un texto aprovechando el color principal de la marca (empresa)",
    status: {
      regular: {
        title: "Regular",
        description:
          "La línea tomará este color para resaltar acciones principales o el color de marca.",
      },
      hover: {
        title: "Hover",
        description:
          "La línea tomará este color cuando el cursor esté ubicado sobre el elemento.",
      },
      focus: {
        title: "Focus",
        description:
          "La línea tomará este color para comunicar el usuario está enfocado en un elemento.",
      },
      disabled: {
        title: "Disabled",
        description:
          "La línea tomará este color cuando se encuentre deshabilitada.",
      },
    },
  },
  gray: {
    description:
      " Los textos de tipo gris se utilizan en textos cortos, textos de botones y enlaces. Tiene como propósito resaltar un texto aprovechando el color principal de la marca (empresa)",
    status: {
      regular: {
        title: "Regular",
        description:
          "La línea tomará este color para resaltar acciones principales o el color de marca.",
      },
      hover: {
        title: "Hover",
        description:
          "La línea tomará este color cuando el cursor esté ubicado sobre el elemento.",
      },
      focus: {
        title: "Focus",
        description:
          "La línea tomará este color para comunicar el usuario está enfocado en un elemento.",
      },
      disabled: {
        title: "Disabled",
        description:
          "La línea tomará este color cuando se encuentre deshabilitada.",
      },
    },
  },
  light: {
    description:
      " Los textos de tipo claro se utilizan en textos cortos, textos de botones y enlaces. Tiene como propósito resaltar un texto aprovechando el color principal de la marca (empresa)",
    status: {
      regular: {
        title: "Regular",
        description:
          "La línea tomará este color para resaltar acciones principales o el color de marca.",
      },
      hover: {
        title: "Hover",
        description:
          "La línea tomará este color cuando el cursor esté ubicado sobre el elemento.",
      },
      focus: {
        title: "Focus",
        description:
          "La línea tomará este color para comunicar el usuario está enfocado en un elemento.",
      },
      disabled: {
        title: "Disabled",
        description:
          "La línea tomará este color cuando se encuentre deshabilitada.",
      },
    },
  },
};

const linesMessagesConfig = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "Actualizacion para los tokens de tipo stroke ha sido exitosa",
    description: `Los tokens de texto han sido actualizados con exito`,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo ha salido mal!",
    description: `Hemos presentado problemas actualizando los tokens de tipo stoke.`,
    appearance: EAppearance.ERROR,
  },
};

export { linesFormsConfig, linesMessagesConfig };
