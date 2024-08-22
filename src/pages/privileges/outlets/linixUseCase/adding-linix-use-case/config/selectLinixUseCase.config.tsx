export interface Option {
  id: string;
  label: string;
  value: string;
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
    label: "Borrar",
    value: "Borrar",
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
    label: "Consultar",
    value: "Consultar",
  },
];
