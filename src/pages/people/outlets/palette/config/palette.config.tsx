import { EAppearance } from "@src/types/colors.types";
import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";

type CategoryTranslations = {
  [key: string]: string;
};

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
const paletteConfig = {
  neutral: {
    description:
      "Se recomienda que los colores Neutrales estén en una escala a grises, ya que se usan para realizar contraste respecto a otro colores.",
  },

  neutralAlpha: {
    description:
      "Se recomienda que los colores Neutrales Alpha tenga un aumento progresivo en la cantidad de transparencia.",
  },
};

const categoryTranslations: CategoryTranslations = {
  neutral: "Neutral",
  neutralAlpha: "Neutral Alfa",
  red: "Rojo",
  yellow: "Amarillo",
  green: "Verde",
  blue: "Azul",
  teal: "Verde Azulado",
  purple: "Púrpura",
};

export { paletteMessagesConfig, categoryTranslations, paletteConfig };
