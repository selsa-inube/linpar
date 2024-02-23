import { MdInventory2, MdPerson } from "react-icons/md";

const privilegeOptionsConfig = [
  {
    id: 1,
    icon: <MdPerson />,
    label: "Usuarios",
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
        label: "Usuarios",
        id: "/privileges/users",
        isActive: true,
      },
    ],
  },
  {
    id: 2,
    icon: <MdInventory2 />,
    label: "Casos de uso",
    description: "Completa la información para agregar el caso de uso",
    url: "/privileges/useCases",
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
        path: "/privileges/useCases",
        label: "Casos de uso",
        id: "/privileges/useCases",
        isActive: true,
      },
    ],
  },
];

export { privilegeOptionsConfig };
