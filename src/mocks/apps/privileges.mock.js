import {
  MdPerson,
  MdOutlineExplore,
  MdOutlineAddTask,
  MdOutlineSecurity,
  MdOutlinePhonelinkSetup,
  MdOutlinePendingActions,
  MdInventory2,
} from "react-icons/md";

const mockPrivilegeOptions = [
  {
    id: 1,
    icon: <MdPerson />,
    label: "Usuarios",
    description: "invitar, editar, activar y eliminar usuarios de Linix",
    url: "users",
  },
  {
    id: 2,
    icon: <MdOutlineExplore />,
    label: "Roles",
    description: "Crear, editar, activar y eliminar roles de Linix",
    url: "roles",
  },
  {
    id: 3,
    icon: <MdOutlineAddTask />,
    label: "Administración contenido",
    description: "Administrar el contenido de Linix",
    url: "ContentAdministration",
  },
  {
    id: 4,
    icon: <MdOutlineSecurity />,
    label: "Seguridad",
    description: "Administrar la configuración de seguridad de Linix",
    url: "Security",
  },
  {
    id: 5,
    icon: <MdOutlinePhonelinkSetup />,
    label: "Dispositivos",
    description: "dispositivos vinculados",
    url: "devices",
  },
  {
    id: 6,
    icon: <MdOutlinePendingActions />,
    label: "Administración versiones",
    description: "Administrar versiones de Linix",
    url: "versionAdm",
  },
  {
    id: 7,
    icon: <MdInventory2 />,
    label: "Gestion productos",
    description: "Gestionar productos Linix",
    url: "products",
  },
];

export { mockPrivilegeOptions };
