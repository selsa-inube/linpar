interface Option {
  id: string;
  label: string;
  disabled: boolean;
}

export const OptionSelect: Option[] = [
  {
    id: "Insertar",
    label: "Insertar",
    disabled: false,
  },
  {
    id: "Modificar",
    label: "Modificar",
    disabled: false,
  },
  {
    id: "Eliminar",
    label: "Eliminar",
    disabled: false,
  },
];
