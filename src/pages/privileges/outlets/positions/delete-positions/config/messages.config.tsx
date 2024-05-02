import { MdOutlineSentimentNeutral, MdThumbUpOffAlt } from "react-icons/md";
import { EAppearance } from "@src/types/colors.types";

export const generalMessage = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "Cambios guardados con éxito!",
    description: "Hemos guardado los cambios correctamente ",
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdOutlineSentimentNeutral size={18} />,
    title: "Algo salio mal!",
    description: "Tuvimos problemas para guardar cambios",
    appearance: EAppearance.ERROR,
  },
};
