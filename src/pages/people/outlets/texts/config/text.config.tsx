import { EAppearance } from "@src/types/colors.types";
import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";

const textFormsConfig = {
  primary: {
    description:
      " Los textos de tipo primario se utilizan en textos cortos, textos de botones y enlaces. Tiene como propósito resaltar un texto aprovechando el color principal de la marca (empresa)",
    status: {
      regular: {
        title: "Regular",
        description:
          "El texto tendrá este color cuando no tenga cambios por comportamiento o interacción con el usuario.",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
      },
      hover: {
        title: "Hover",
        description:
          "El texto tomará este color cuando el cursor esté ubicado sobre el texto.",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
      },
      disabled: {
        title: "Disabled",
        description:
          "El texto tomará este color cuando el texto se encuentre deshabilitado.",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
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
          "El texto tendrá este color cuando no tenga cambios por comportamiento o interacción con el usuario.",
        tokenName: "R400",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
      },
      hover: {
        title: "Hover",
        description:
          "El texto tomará este color cuando el cursor esté ubicado sobre el texto.",
        tokenName: "R300",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
      },
      disabled: {
        title: "Disabled",
        description:
          "El texto tomará este color cuando el texto se encuentre deshabilitado.",
        tokenName: "N70",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
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
          "El texto tendrá este color cuando no tenga cambios por comportamiento o interacción con el usuario.",
        tokenName: "Y400",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
      },
      hover: {
        title: "Hover",
        description:
          "El texto tomará este color cuando el cursor esté ubicado sobre el texto.",
        tokenName: "Y300",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
      },
      disabled: {
        title: "Disabled",
        description:
          "El texto tomará este color cuando el texto se encuentre deshabilitado.",
        tokenName: "N70",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
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
          "El texto tendrá este color cuando no tenga cambios por comportamiento o interacción con el usuario.",
        tokenName: "G400",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
      },
      hover: {
        title: "Hover",
        description:
          "El texto tomará este color cuando el cursor esté ubicado sobre el texto.",
        tokenName: "G300",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
      },
      disabled: {
        title: "Disabled",
        description:
          "El texto tomará este color cuando el texto se encuentre deshabilitado.",
        tokenName: "N70",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
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
          "El texto tendrá este color cuando no tenga cambios por comportamiento o interacción con el usuario.",
        tokenName: "B400",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
      },
      hover: {
        title: "Hover",
        description:
          "El texto tomará este color cuando el cursor esté ubicado sobre el texto.",
        tokenName: "B300",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
      },
      disabled: {
        title: "Disabled",
        description:
          "El texto tomará este color cuando el texto se encuentre deshabilitado.",
        tokenName: "N70",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
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
          "El texto tendrá este color cuando no tenga cambios por comportamiento o interacción con el usuario.",
        tokenName: "P400",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
      },
      hover: {
        title: "Hover",
        description:
          "El texto tomará este color cuando el cursor esté ubicado sobre el texto.",
        tokenName: "P300",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
      },
      disabled: {
        title: "Disabled",
        description:
          "El texto tomará este color cuando el texto se encuentre deshabilitado.",
        tokenName: "N70",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
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
          "El texto tendrá este color cuando no tenga cambios por comportamiento o interacción con el usuario.",
        tokenName: "N900",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
      },
      hover: {
        title: "Hover",
        description:
          "El texto tomará este color cuando el cursor esté ubicado sobre el texto.",
        tokenName: "N500",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
      },
      disabled: {
        title: "Disabled",
        description:
          "El texto tomará este color cuando el texto se encuentre deshabilitado.",
        tokenName: "N70",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
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
          "El texto tendrá este color cuando no tenga cambios por comportamiento o interacción con el usuario.",
        tokenName: "N300",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
      },
      hover: {
        title: "Hover",
        description:
          "El texto tomará este color cuando el cursor esté ubicado sobre el texto.",
        tokenName: "N200",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
      },
      disabled: {
        title: "Disabled",
        description:
          "El texto tomará este color cuando el texto se encuentre deshabilitado.",
        tokenName: "N70",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
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
          "El texto tendrá este color cuando no tenga cambios por comportamiento o interacción con el usuario.",
        tokenName: "N10",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
      },
      hover: {
        title: "Hover",
        description:
          "El texto tomará este color cuando el cursor esté ubicado sobre el texto.",
        tokenName: "N0",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
      },
      disabled: {
        title: "Disabled",
        description:
          "El texto tomará este color cuando el texto se encuentre deshabilitado.",
        tokenName: "N70",
        example:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor mauris a nisl auctor posuere. In eu metus dapibus, tristique felis sit amet, convallis ligula.",
      },
    },
  },
};

const textMessagesConfig = {
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

export { textFormsConfig, textMessagesConfig };
