import { MdPerson, MdSync } from "react-icons/md";
import { FaUserGear } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";

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
  {
    id: 3,
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
  {
    id: 4,
    icon: <FaUserGear />,
    label: "Roles Linix",
    description: "Crear, editar, activar y eliminar roles de Linix",
    url: "/privileges/roles",
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
        path: "/privileges/roles",
        label: "Roles Linix",
        id: "/privileges/roles",
        isActive: true,
      },
    ],
  },
];

export { privilegeOptionsConfig };
