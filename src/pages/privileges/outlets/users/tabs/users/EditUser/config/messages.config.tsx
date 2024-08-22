import { MdThumbUpOffAlt, MdOutlineSentimentNeutral } from "react-icons/md";
import { EAppearance } from "@src/types/colors.types";
import React from "react";

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
    description: "Tuvimos problemas para guardar cambios  ",
    appearance: EAppearance.ERROR,
  },
};

export { generalMessage };
