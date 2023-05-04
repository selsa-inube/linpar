import {
  MdPerson,
  MdOutlineExplore,
  MdOutlineAddTask,
  MdOutlineSecurity,
  MdOutlinePhonelinkSetup,
  MdOutlinePendingActions,
  MdInventory2,
} from "react-icons/md";

const privilegeOptionsConfig = [
  {
    id: 1,
    icon: <MdPerson />,
    label: "Usuarios",
    description: "invitar, editar, activar y eliminar usuarios de Linix",
    url: "/privileges/users",
  },
  {
    id: 2,
    icon: <MdOutlineExplore />,
    label: "Roles",
    description: "Crear, editar, activar y eliminar roles de Linix",
    url: "/privileges/roles",
  },
  {
    id: 3,
    icon: <MdOutlineAddTask />,
    label: "Administración contenido",
    description: "Administrar el contenido de Linix",
    url: "/privileges/ContentAdministration",
  },
  {
    id: 4,
    icon: <MdOutlineSecurity />,
    label: "Seguridad",
    description: "Administrar la configuración de seguridad de Linix",
    url: "/privileges/Security",
  },
  {
    id: 5,
    icon: <MdOutlinePhonelinkSetup />,
    label: "Dispositivos",
    description: "dispositivos vinculados",
    url: "/privileges/devices",
  },
  {
    id: 6,
    icon: <MdOutlinePendingActions />,
    label: "Administración versiones",
    description: "Administrar versiones de Linix",
    url: "/privileges/versionAdm",
  },
  {
    id: 7,
    icon: <MdInventory2 />,
    label: "Gestion productos",
    description: "Gestionar productos Linix",
    url: "/privileges/products",
  },
];

export { privilegeOptionsConfig };
