import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";
import { Icon } from "@inube/design-system";

import { EAppearance } from "@src/types/colors.types";

export const stepsAddRol = {
  generalInformation: {
    id: 1,
    label: "Información general",
    description: "Por favor completa la información general.",
  },
  auxiliaryAccounts: {
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
  crediboardTasks: {
    id: 5,
    label: "Tareas crediboard",
    description: "Asigna las tareas crediboard para este rol.",
  },
  useCases: {
    id: 6,
    label: "Casos de uso",
    description: "Asigna los casos de uso para este rol.",
  },
  summary: {
    id: 7,
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
    route: "/privileges/roles/add-role",
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
        path: "/privileges/roles",
        label: "roles",
        id: "/privileges/roles",
        isActive: false,
      },
      {
        path: "/privileges/roles/add-role",
        label: "Agregar rol",
        id: "/privileges/roles/add-role",
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
    icon: <Icon appearance="dark" icons={<MdThumbUpOffAlt />} size="18px" />,
    title: "Creación exitosa",
    description: (value: string) =>
      `Hemos creado el Rol '${value}' exitosamente.`,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <Icon appearance="dark" icons={<MdErrorOutline />} size="18px" />,
    title: "¡Uy, algo ha salido mal!",
    description: (value: string) =>
      `Hemos presentado un error creando el Rol'${value}', por favor contacte a soporte.`,
    appearance: EAppearance.ERROR,
  },
};
