export interface Option {
  id: string;
  label: string;
  value: string;
  isActive?: boolean;
}

export const OptionSelect: Option[] = [
  {
    id: "I",
    label: "Insertar",
    value: "Insertar",
  },
  {
    id: "U",
    label: "Actualizar",
    value: "Actualizar",
  },
  {
    id: "D",
    label: "Eliminar",
    value: "Eliminar",
  },

  {
    id: "E",
    label: "Ejecutar",
    value: "Ejecutar",
  },

  {
    id: "O",
    label: "Otros",
    value: "Otros",
  },

  {
    id: "Q",
    label: "Consulta",
    value: "Consulta",
  },
];
