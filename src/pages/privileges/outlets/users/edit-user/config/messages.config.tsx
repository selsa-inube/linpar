import { MdOutlineSentimentNeutral, MdThumbUpOffAlt } from "react-icons/md";
import { EAppearance } from "@src/types/colors.types";

const assignmentFormMessages = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Privilegios actualizados!",
    description: "Hemos actualizado correctamente los privilegios",
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdOutlineSentimentNeutral size={18} />,
    title: "¡Uy, algo ha salido mal!",
    description: "Hemos tenido problemas para actualizar los privilegios",
    appearance: EAppearance.ERROR,
  },
};

export { assignmentFormMessages };
