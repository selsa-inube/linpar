import { MdPerson, MdSync } from "react-icons/md";

const privilegeOptionsConfig = [
  {
    id: 1,
    icon: <MdPerson />,
    label: "Usuarios Linix",
    description: "invitar, editar, activar y eliminar usuarios de Linix",
    url: "/privileges/users",
    domain: "privileges",
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
        path: "/privileges/users",
        label: "Usuarios Linix",
        id: "/privileges/users",
        isActive: true,
      },
    ],
  },
  {
    id: 2,
    icon: <MdSync />,
    label: "Cargos Linix",
    description: "Crear, editar, activar y eliminar cargos de Linix",
    url: "/privileges/positions",
    domain: "privileges",
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
        path: "/privileges/positions",
        label: "Cargos Linix",
        id: "/privileges/positions",
        isActive: true,
      },
    ],
  },
];

export { privilegeOptionsConfig };
