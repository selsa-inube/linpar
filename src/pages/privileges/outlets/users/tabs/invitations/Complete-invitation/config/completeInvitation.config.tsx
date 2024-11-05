import { EAppearance } from "@src/types/colors.types";
import {
  MdErrorOutline,
  MdOutlineSentimentNeutral,
  MdThumbUpOffAlt,
} from "react-icons/md";

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
  projectsEvents: {
    id: 3,
    label: "Proyectos y eventos",
    description: "Asigna los proyectos y eventos que el usuario administrará.",
  },
  aidBudgetUnits: {
    id: 4,
    label: "Unidades presupuestales de auxilios",
    description:
      "Configura las unidades presupuestarias de ayuda que el usuario administrará.",
  },
  payrolls: {
    id: 5,
    label: "Nómina",
    description:
      "Configura la nómina del usuario, incluyendo detalles como el salario base, deducciones y beneficios.",
  },
  verification: {
    id: 6,
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
        path: "/privileges/users",
        label: "Usuarios",
        id: "/privileges/users",
        isActive: false,
      },
      {
        path: "/privileges/users/complete-invitation/:invitation_id",
        label: "Completar registro de usuario",
        id: "/privileges/users/complete-invitation",
        isActive: true,
      },
    ],
  },
];

const completeInvitationSubjectCardLabels = [
  {
    id: "userName",
    titleName: "Nombre",
    priority: 0,
  },
  {
    id: "userIdentification",
    titleName: "Identificación",
    priority: 1,
  },
  {
    id: "email",
    titleName: "Email",
    priority: 2,
  },
  {
    id: "dateStart",
    titleName: "Fecha de invitación",
    priority: 3,
  },
];

const generalInfoMessages = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "¡Los cambios se guardaron exitosamente!",
    description: (userName: string) =>
      `Hemos guardado los cambios correctamente para el usuario ${userName}`,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdOutlineSentimentNeutral size={18} />,
    title: "¡Ups, algo ha salido mal!",
    description: (userName: string) =>
      `Tuvimos problemas para guardar cambios para el usuario ${userName}`,
    appearance: EAppearance.ERROR,
  },
};

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
  generalInfoMessages,
};
