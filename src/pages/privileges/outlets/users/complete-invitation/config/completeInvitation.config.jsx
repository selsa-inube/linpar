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
    titleName: "Invitación",
    priority: 3,
  },
];

export {
  CompleteInvitationUserConfig,
  stepsRegisterUserConfig,
  completeInvitationSubjectCardLabels,
};
