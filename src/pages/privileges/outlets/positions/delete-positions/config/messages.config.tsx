import { MdOutlineSentimentNeutral, MdThumbUpOffAlt } from "react-icons/md";
import { EAppearance } from "@src/types/colors.types";

export const generalMessage = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "Hemos eliminado correctamente el cargo!",
    description: "Hemos eliminado correctamente los Cargos",
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdOutlineSentimentNeutral size={18} />,
    title: "Algo salio mal!",
    description: "Tuvimos problemas para eliminar los Cargos",
    appearance: EAppearance.ERROR,
  },
};
