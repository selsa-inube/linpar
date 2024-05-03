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
    title: "Se presento un error!",
    description:
      "Se presentó un error guardando los datos, para mayor informacion contacte a soporte.",
    appearance: EAppearance.ERROR,
  },
};

export { generalMessage };
