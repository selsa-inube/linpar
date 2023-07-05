import { Assisted } from "..";
import { IAssistedProps } from "../types";

const story = {
  component: [Assisted],
  title: "components/feedback/Assisted",
};

const stepsMock = [
  {
    id: 1,
    stepName: "Información general",
    stepDescription:
      "Ver la información general del usuario y si es necesario editarla",
  },

  {
    id: 2,
    stepName: "Ramas",
    stepDescription: "Asigna las ramas que el usuario administrará",
  },

  {
    id: 3,
    stepName: "Proyectos",
    stepDescription: "Agrega los proyectos que el usuario administrará.",
  },

  {
    id: 4,
    stepName: "Unidades de ayuda",
    stepDescription:
      "Configura las unidades presupuestarias de ayuda que el usuario administrará.",
  },

  {
    id: 5,
    stepName: "Nómina",
    stepDescription:
      "Configura la nómina del usuario, incluyendo detalles como el salario base, deducciones y beneficios.",
  },

  {
    id: 6,
    stepName: "Verificación",
    stepDescription:
      "Centro de coste para clasificar costes y gastos y aplicarlos a las órdenes de producción",
    isVerification: true,
  },
];

export const Default = (args: IAssistedProps) => <Assisted {...args} />;

Default.args = {
  steps: stepsMock,
  handleStepChange: () => {},
  currentStep: 3,
};

export default story;
