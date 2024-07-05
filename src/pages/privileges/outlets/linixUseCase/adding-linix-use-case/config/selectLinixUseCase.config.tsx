export interface Option {
  id: string;
  label: string;
}

export const OptionSelect: Option[] = [
  {
    id: "I",
    label: "Insertar",
  },
  {
    id: "U",
    label: "Actualizar",
  },
  {
    id: "D",
    label: "Borrar",
  },

  {
    id: "E",
    label: "Ejecutar",
  },

  {
    id: "O",
    label: "Otros",
  },

  {
    id: "Q",
    label: "Consultar",
  },
];
