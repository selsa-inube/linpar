import { MdThumbUpOffAlt, MdOutlineSentimentNeutral } from "react-icons/md";
import { EAppearance } from "@src/types/colors.types";

const generalMessage = {
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
    title: "Ups, algo ha salido mal!",
    description:
      "Tuvimos problemas para guardar cambios para el caso de uso edita algun campo de Opción de menú ",
    appearance: EAppearance.ERROR,
  },
};

export { generalMessage };
