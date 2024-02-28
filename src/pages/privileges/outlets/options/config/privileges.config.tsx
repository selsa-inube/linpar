import { MdPerson } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";

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
    icon: <TfiMenuAlt />,
    label: "Casos de uso Linix",
    description: "Completa la información para agregar el caso de uso Linix",
    url: "/privileges/linixUseCase",
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
        path: "/privileges/linixUseCase",
        label: "Casos de uso Linix",
        id: "/privileges/linixUseCase",
        isActive: true,
      },
    ],
  },
];

export { privilegeOptionsConfig };
