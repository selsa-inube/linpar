import { EAppearance } from "@src/types/colors.types";
import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";

const stepsRegisterUserConfig = {
  generalInformation: {
    id: 1,
    stepName: "Información general",
    stepDescription:
      "Ver la información general del usuario y si es necesario editarla",
  },
  branches: {
    id: 2,
    stepName: "Sucursales",
    stepDescription: "Asigna las sucursales que el usuario administrará",
  },
  projects: {
    id: 3,
    stepName: "Proyectos",
    stepDescription: "Agrega los proyectos que el usuario administrará.",
  },
  events: {
    id: 4,
    stepName: "Eventos",
    stepDescription: "Agrega los Eventos que el usuario administrará.",
  },
  aidBudgetUnits: {
    id: 5,
    stepName: "Unidades de ayuda",
    stepDescription:
      "Configura las unidades presupuestarias de ayuda que el usuario administrará.",
  },
  payrolls: {
    id: 6,
    stepName: "Nómina",
    stepDescription:
      "Configura la nómina del usuario, incluyendo detalles como el salario base, deducciones y beneficios.",
  },
  verification: {
    id: 7,
    stepName: "Verificación",
    stepDescription: "Proceso final de verificacion",
    isVerification: true,
  },
};

const CompleteInvitationUserConfig = [
  {
    id: 1,
    title: "Completar registro de usuario",
    description:
      "Complete la información para finalizar el proceso de registro.",
    route: "/privileges/users/Complete user registration",
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
        path: "/users",
        label: "Usuarios",
        id: "/users",
        isActive: false,
      },
      {
        path: "/completeUserRegistration",
        label: "Complete user registration",
        id: "/completeUserRegistration",
        isActive: true,
      },
    ],
  },
];

const completeInvitationSubjectCardLabels = [
  {
    id: "username",
    titleName: "Nombre",
    priority: 0,
  },
  {
    id: "userID",
    titleName: "Identificación",
    priority: 1,
  },
  {
    id: "email",
    titleName: "Email",
    priority: 2,
  },
  {
    id: "invitationDate",
    titleName: "Fecha de invitación",
    priority: 3,
  },
];

const finishAssistedModalConfig = {
  title: "Finalizar registro",
  description: "¿Está seguro de que desea finalizar el proceso de registro?",
  actionText: "Finalizar",
  appearance: EAppearance.CONFIRM,
};

const finishAssistedMessagesConfig = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "Activación exitosa",
    description: (value: string) =>
      `Hemos activado con éxito el usuario ${value}.`,
    appearance: EAppearance.CONFIRM,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo ha salido mal!",
    description: (value: string) =>
      `Hemos presentado problemas activando el usuario  ${value}.`,
    appearance: EAppearance.REMOVE,
  },
};

export {
  CompleteInvitationUserConfig,
  completeInvitationSubjectCardLabels,
  finishAssistedMessagesConfig,
  finishAssistedModalConfig,
  stepsRegisterUserConfig,
};
