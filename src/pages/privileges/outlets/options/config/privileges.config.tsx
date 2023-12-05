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
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/",
        isActive: false,
      },
      {
        path: "/privileges",
        label: "Privilegios",
        id: "/privileges",
        isActive: false,
      },
      {
        path: "/users",
        label: "Usuarios",
        id: "/users",
        isActive: true,
      },
    ],
  },
];

export { privilegeOptionsConfig, privilegeConfig };
