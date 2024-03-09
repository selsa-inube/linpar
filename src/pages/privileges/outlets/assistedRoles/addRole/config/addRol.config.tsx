import { EAppearance } from "@src/types/colors.types";
import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";

import { Icon } from "@inube/design-system";

export const stepsAddRol = {
  generalInformation: {
    id: 1,
    label: "Información general",
    description: "Por favor completa la información general.",
  },
  clientServerButton: {
    id: 2,
    label: "Selección botón cliente servidor",
    description: "Por favor selecciona el botón cliente servidor.",
  },
  downloadableDocuments: {
    id: 3,
    label: "Formatos descargables",
    description: "Asigna los formatos descargables.",
  },
  webReports: {
    id: 4,
    label: "Reportes web",
    description: "Asigna los reportes web.",
  },
  webOptions: {
    id: 5,
    label: "Opciones web",
    description: "Asigna las opciones web.",
  },
  clientServerReports: {
    id: 6,
    label: "Reportes cliente servidor",
    description: "Asigna los reportes cliente servidor.",
  },
  clientServerOptions: {
    id: 7,
    label: "Opciones cliente servidor",
    description: "Asigna las opciones cliente servidor.",
  },
  summary: {
    id: 8,
    label: "Verificación",
    description:
      "Verifica las opciones activadas, si es necesario cámbialas o por el contrario si todo está correcto dale enviar.",
    isVerification: true,
  },
};

export const createRolConfig = [
  {
    id: 1,
    title: "Agregar rol",
    description: "Completa la información para agregar rol",
    route: "/privileges/roles/add-rol",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/home",
        isActive: false,
      },
      {
        path: "/privileges",
        label: "Privilegios",
        id: "/privileges",
        isActive: false,
      },
      {
        path: "/privileges/linixUseCase",
        label: "roles",
        id: "/privileges/roles",
        isActive: false,
      },
      {
        path: "/privileges/linixUseCase/add-rol",
        label: "Agregar un rol",
        id: "/privileges/linixUseCase/add-rol",
        isActive: true,
      },
    ],
  },
];

export const finishAssistedRolModalConfig = {
  title: "Finalizar registro",
  description: "¿Está seguro de que desea finalizar el proceso de creación?",
  actionText: "Finalizar",
  appearance: EAppearance.SUCCESS,
};

export const finishAssistedRolMessagesConfig = {
  success: {
    id: 1,
    icon: <Icon appearance="dark" icons={<MdThumbUpOffAlt />} size="18px" />,
    title: "Creación exitosa",
    description: (value: string) =>
      `Hemos creado el caso de uso ${value} exitosamente.`,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <Icon appearance="dark" icons={<MdErrorOutline />} size="18px" />,
    title: "¡Uy, algo ha salido mal!",
    description: (value: string) =>
      `Hemos presentado un error creando el caso de uso ${value}.`,
    appearance: EAppearance.ERROR,
  },
};
