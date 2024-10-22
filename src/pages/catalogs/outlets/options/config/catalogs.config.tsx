import { FaUserGear } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";

const catalogsOptionsConfig = [
  {
    id: 1,
    icon: <TfiMenuAlt size={"20px"} />,
    label: "Casos de uso Linix",
    description: "Completa la información para agregar el caso de uso Linix",
    url: "/catalogs/linixUseCase",
    domain: "catalogs",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/",
        isActive: false,
      },
      {
        path: "/catalogs",
        label: "Catálogos Generales",
        id: "/catalogs",
        isActive: false,
      },
      {
        path: "/catalogs/linixUseCase",
        label: "Casos de uso Linix",
        id: "/catalogs/linixUseCase",
        isActive: true,
      },
    ],
  },
  {
    id: 2,
    icon: <FaUserGear />,
    label: "Roles Linix",
    description: "Crear, editar, activar y eliminar roles de Linix",
    url: "/catalogs/roles",
    domain: "catalogs",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/",
        isActive: false,
      },
      {
        path: "/catalogs",
        label: "Catálogos Generales",
        id: "/catalogs",
        isActive: false,
      },
      {
        path: "/catalogs/roles",
        label: "Roles Linix",
        id: "/catalogs/roles",
        isActive: true,
      },
    ],
  },
];

export { catalogsOptionsConfig };
