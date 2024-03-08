import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";
import { IGeneralInformationEntry } from "../types/forms.types";
import { EAppearance } from "@src/types/colors.types";

const deleteUserModal = {
  delete: {
    title: "Eliminar Usuario",
    description: ({ code }: IGeneralInformationEntry) =>
      `¿Está seguro de que desea eliminar al usuario ${code}?`,
    actionText: "Eliminar",
    appearance: EAppearance.ERROR,
  },
};

const deleteUserMessages = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Eliminación exitosa!",
    description: ({ code }: IGeneralInformationEntry) =>
      `Hemos eliminado con éxito al usuario ${code}.`,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo salió mal!",
    description: ({ code }: IGeneralInformationEntry) =>
      `Hemos presentado problemas eliminando al usuario ${code}.`,
    appearance: EAppearance.ERROR,
  },
};

export { deleteUserMessages, deleteUserModal };
