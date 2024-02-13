import { EAppearance } from "@src/types/colors.types";
import {
  MdErrorOutline,
  MdOutlineHouse,
  MdThumbUpOffAlt,
} from "react-icons/md";

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
      },
      clear: {
        title: "Clear",
        description:
          "La superficie tomará este color cuando se quiera hacer un contraste de colores.",
      },
      disabled: {
        title: "Disabled",
        description:
          "La superficie tomará este color cuando se encuentre deshabilitada.",
      },
    },
  },
  error: {
    description:
      "Las superficies de tipo error se utilizan en componentes que están relacionados a acciones principales o comunican relación a la marca.",
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
          "La superficie tomará este color cuando se encuentre deshabilitada.",
      },
    },
  },
  warning: {
    description:
      "Las superficies de tipo advertencia se utilizan en componentes que están relacionados a acciones principales o comunican relación a la marca.",
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
          "La superficie tomará este color cuando se encuentre deshabilitada.",
      },
    },
  },
  success: {
    description:
      "Las superficies de tipo exito se utilizan en componentes que están relacionados a acciones principales o comunican relación a la marca.",
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
          "La superficie tomará este color cuando se encuentre deshabilitada.",
      },
    },
  },
  information: {
    description:
      "Las superficies de tipo informacion se utilizan en componentes que están relacionados a acciones principales o comunican relación a la marca.",
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
          "La superficie tomará este color cuando se encuentre deshabilitada.",
      },
    },
  },
  help: {
    description:
      "Las superficies de tipo ayuda se utilizan en componentes que están relacionados a acciones principales o comunican relación a la marca.",
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
          "La superficie tomará este color cuando se encuentre deshabilitada.",
      },
    },
  },

  nav: {
    description:
      "Las superficies del Nav determinarán el color de fondo del menú de navegación lateral.",
    status: {
      regular: {
        title: "Regular",
        description:
          "La superficie tomará este color para darle contraste a los links de navegación.",
      },
    },
  },
  navLink: {
    description:
      "Las superficies del nav link determinarán el color de fondo en los diferentes cambios de comportamiento del componente",
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
      selected: {
        title: "Selected",
        description:
          "La superficie tomará este color para acentuar la selección de una opción mediante un clic.",
      },
    },
  },
  blanket: {
    description:
      "Las superficies del blanket determinarán el color de las mantas que se superponen al resto de la pagina, este color debe ser neutral alfa ya que debe poseer transparencia.",
    status: {
      regular: {
        title: "Regular",
        description:
          "La superficie tomará este color para resaltar acciones principales o el color de marca.",
      },
    },
  },
  dark: {
    description:
      "Las superficies de tipo oscuro se utilizan en componentes que están relacionados a acciones principales o comunican relación a la marca.",
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
          "La superficie tomará este color cuando se encuentre deshabilitada.",
      },
    },
  },
  gray: {
    description:
      "Las superficies de tipo gris se utilizan en componentes que están relacionados a acciones principales o comunican relación a la marca.",
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
          "La superficie tomará este color cuando se encuentre deshabilitada.",
      },
    },
  },
  light: {
    description:
      "Las superficies de tipo claro se utilizan en componentes que están relacionados a acciones principales o comunican relación a la marca.",
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
          "La superficie tomará este color cuando se encuentre deshabilitada.",
      },
    },
  },
};

const mockNav = {
  title: "MENU",
  sections: {
    administrate: {
      links: {
        privileges: {
          id: "privileges",
          label: "Link name",
          icon: <MdOutlineHouse />,
        },
        accounting: {
          id: "accounting",
          label: "Link name",
          icon: <MdOutlineHouse />,
        },
        contacts: {
          id: "contacts",
          label: "Link name",
          icon: <MdOutlineHouse />,
        },
        documents: {
          id: "documents",
          label: "Link name",
          icon: <MdOutlineHouse />,
        },
        marketing: {
          id: "marketing",
          label: "Link name",
          icon: <MdOutlineHouse />,
        },
        savings: {
          id: "savings",
          label: "Link name",
          icon: <MdOutlineHouse />,
        },
      },
    },
  },
};

const surfaceMessagesConfig = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "Actualizacion para los tokens de superficies ha sido exitosa",
    description: `Los tokens de superficies han sido actualizados con exito`,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo ha salido mal!",
    description: `Hemos presentado problemas actualizando los tokens de superficie.`,
    appearance: EAppearance.ERROR,
  },
};

export { surfaceFormsConfig, surfaceMessagesConfig, mockNav };
