import { MdOutlineAssignmentTurnedIn } from "react-icons/md";

const stepsRegisterUserConfig = [
  {
    id: 1,
    stepName: "Información general",
    stepDescription:
      "Ver la información general del usuario y si es necesario editarla",
  },

  {
    id: 2,
    stepName: "Sucursales",
    stepDescription: "Asigna las sucursales que el usuario administrará",
  },

  {
    id: 3,
    stepName: "Proyectos",
    stepDescription: "Agrega los proyectos que el usuario administrará.",
  },

  {
    id: 4,
    stepName: "Eventos",
    stepDescription: "Agrega los Eventos que el usuario administrará.",
  },

  {
    id: 5,
    stepName: "Unidades de ayuda",
    stepDescription:
      "Configura las unidades presupuestarias de ayuda que el usuario administrará.",
  },

  {
    id: 6,
    stepName: "Nómina",
    stepDescription:
      "Configura la nómina del usuario, incluyendo detalles como el salario base, deducciones y beneficios.",
  },

  {
    id: 7,
    stepName: "Verificación",
    stepDescription: "Proceso final de verificacion",
    isVerification: true,
  },
];

const CompleteInvitationUserConfig = [
  {
    id: 1,
    icon: <MdOutlineAssignmentTurnedIn />,
    title: "Completar registro de usuario",
    description:
      "Complete la información para finalizar el proceso de registro.",
    route: "/privileges/users/Complete user registration",
  },
];

export { stepsRegisterUserConfig, CompleteInvitationUserConfig };
