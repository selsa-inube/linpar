import { EAppearance } from "@src/types/colors.types";
import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";

const stepsRegisterUserConfig = {
  generalInformation: {
    id: 1,
    label: "Información general",
    description:
      "Ver la información general del usuario y si es necesario editarla",
  },
  branches: {
    id: 2,
    label: "Sucursales",
    description: "Asigna las sucursales que el usuario administrará",
  },
  projects: {
    id: 3,
    label: "Proyectos",
    description: "Agrega los proyectos que el usuario administrará.",
  },
  events: {
    id: 4,
    label: "Eventos",
    description: "Agrega los Eventos que el usuario administrará.",
  },
  aidBudgetUnits: {
    id: 5,
    label: "Unidades de ayuda",
    description:
      "Configura las unidades presupuestarias de ayuda que el usuario administrará.",
  },
  payrolls: {
    id: 6,
    label: "Nómina",
    description:
      "Configura la nómina del usuario, incluyendo detalles como el salario base, deducciones y beneficios.",
  },
  verification: {
    id: 7,
    label: "Verificación",
    description: "Proceso final de verificacion",
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
        label: "Completar registro de usuario",
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
  appearance: EAppearance.SUCCESS,
};

const finishAssistedMessagesConfig = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "Activación exitosa",
    description: (value: string) =>
      `Hemos activado con éxito el usuario ${value}.`,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "¡Uy, algo ha salido mal!",
    description: (value: string) =>
      `Hemos presentado problemas activando el usuario  ${value}.`,
    appearance: EAppearance.ERROR,
  },
};

export {
  CompleteInvitationUserConfig,
  completeInvitationSubjectCardLabels,
  finishAssistedMessagesConfig,
  finishAssistedModalConfig,
  stepsRegisterUserConfig,
};
