export interface IPosition {
  i_Activo: "Y" | "N";
  k_Grupo: string;
  n_Grupo: string;
  n_Uso: string;
}

export interface IStep {
  id: number;
  label: string;
  description: string;
}
