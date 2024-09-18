import { EAppearance } from "@src/types/colors.types";
import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";

const stepsAddingLinixUseCase = {
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
    label: "Opción de menú web Linix",
    description: "Asigna las opciones web.",
  },
  clientServerReports: {
    id: 6,
    label: "Reportes cliente servidor",
    description: "Asigna los reportes cliente servidor.",
  },
  clientServerOptions: {
    id: 7,
    label: "Opción de menú cliente servidor Linix",
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

const CrateLinixUseCaseConfig = [
  {
    id: 1,
    title: "Agregar un caso de uso",
    description: "Completa la información para agregar un caso de uso",
    route: "/catalogs/linixUseCase/adding-linix-use-case",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/home",
        isActive: false,
      },
      {
        path: "/catalogs",
        label: "Catálogos Generales",
        id: "/catalogs",
        isActive: false,
      },
      {
        path: "/catalogs/linixUseCase",
        label: "Casos de uso Linix",
        id: "/catalogs/linixUseCase",
        isActive: false,
      },
      {
        path: "/catalogs/linixUseCase/adding-linix-use-case",
        label: "Agregar un caso de uso",
        id: "/catalogs/linixUseCase/adding-linix-use-case",
        isActive: true,
      },
    ],
  },
];

const finishAssistedModalConfig = {
  title: "Finalizar registro",
  description: "¿Está seguro de que desea finalizar el proceso de creación?",
  actionText: "Finalizar",
  appearance: EAppearance.SUCCESS,
};

const finishAssistedMessagesConfig = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "Creación exitosa",
    description: (value: string) =>
      `Hemos creado el caso de uso ${value} exitosamente.`,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo ha salido mal!",
    description: (value: string) =>
      `Hemos presentado creando el caso de uso  ${value}.`,
    appearance: EAppearance.ERROR,
  },
};

export {
  CrateLinixUseCaseConfig,
  finishAssistedMessagesConfig,
  finishAssistedModalConfig,
  stepsAddingLinixUseCase,
};
