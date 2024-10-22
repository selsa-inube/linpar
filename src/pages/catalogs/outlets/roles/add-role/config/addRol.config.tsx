import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";

import { EAppearance } from "@src/types/colors.types";

export const stepsAddRol = {
  generalInformation: {
    id: 1,
    label: "Información general",
    description: "Por favor completa la información general.",
  },
  ancillaryAccounts: {
    id: 2,
    label: "Cuentas Mayores",
    description: "Por favor completa la información de cuentas mayores.",
  },
  transactionTypes: {
    id: 3,
    label: "Tipos de movimiento",
    description: "Asigna los tipos de movimiento para este rol.",
  },
  businessRules: {
    id: 4,
    label: "Reglas de Negocio",
    description: "Asigna las reglas de negocio para este rol.",
  },
  useCases: {
    id: 5,
    label: "Casos de uso",
    description: "Asigna los casos de uso para este rol.",
  },
  summary: {
    id: 6,
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
    route: "/catalogs/roles/add-role",
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
        path: "/catalogs/roles",
        label: "roles",
        id: "/catalogs/roles",
        isActive: false,
      },
      {
        path: "/catalogs/roles/add-role",
        label: "Agregar rol",
        id: "/catalogs/roles/add-role",
        isActive: true,
      },
    ],
  },
];

export const finishAssistedRoleModalConfig = {
  title: "Finalizar registro",
  description: "¿Está seguro de que desea finalizar el proceso de creación?",
  actionText: "Finalizar",
  appearance: EAppearance.SUCCESS,
};

export const finishAssistedRoleMessagesConfig = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "Cambios guardados con éxito!",
    description: (value: string) =>
      `Hemos creado el Rol '${value}' exitosamente.`,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo ha salido mal!",
    description: (value: string) =>
      `Hemos presentado un error creando el Rol'${value}', por favor contacte a soporte.`,
    appearance: EAppearance.ERROR,
  },
};
