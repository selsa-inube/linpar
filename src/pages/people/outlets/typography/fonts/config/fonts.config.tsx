import { EAppearance } from "@src/types/colors.types";
import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";

const fontMessagesConfig = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "Actualizacion para los tokens de fuentes ha sido exitosa",
    description: `Los tokens de fuentes han sido actualizados con exito`,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo ha salido mal!",
    description: `Hemos presentado problemas actualizando los tokens de fuentes.`,
    appearance: EAppearance.ERROR,
  },
};

const fontOptions = [
  {
    id: "2",
    label: "Arial",
    disable: false,
  },
  {
    id: "3",
    label: "Courrier New",
    disable: false,
  },
  {
    id: "4",
    label: "Helvetica",
    disable: false,
  },
  {
    id: "5",
    label: "Open Sans",
    disable: false,
  },
  {
    id: "6",
    label: "Roboto",
    disable: false,
  },
  {
    id: "7",
    label: "Times New Roman",
    disable: false,
  },
];

export { fontMessagesConfig, fontOptions };
