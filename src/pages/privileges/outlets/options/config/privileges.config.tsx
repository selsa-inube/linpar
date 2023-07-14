import { MdPerson } from "react-icons/md";

const privilegeConfig = {
  label: "Usuarios",
  description: "invitar, editar, activar y eliminar usuarios de Linix",
};

const privilegeOptionsConfig = [
  {
    id: 1,
    icon: <MdPerson />,
    label: "Usuarios",
    description: "invitar, editar, activar y eliminar usuarios de Linix",
    url: "/privileges/users",
  },
];

export { privilegeOptionsConfig, privilegeConfig };
