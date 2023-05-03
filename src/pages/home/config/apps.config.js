import {
  MdVpnKey,
  MdMoney,
  MdContacts,
  MdSupervisedUserCircle,
  MdFolder,
  MdOutlineDesignServices,
  MdInventory,
  MdLineStyle,
  MdTableView,
} from "react-icons/md";

const mockAppsConfig = [
  {
    id: 1,
    label: "Privilegios",
    description: "Modifica las propiedades y permisos de tu cuenta",
    icon: <MdVpnKey />,
    url: "/privileges",
  },
  {
    id: 2,
    label: "Contabilidad",
    description: "Registra ingresos y gastos económicos de la compañía",
    icon: <MdMoney />,
    url: "/accounting",
  },
  {
    id: 3,
    label: "Contactos",
    description: "Registra tus contactos y almacénalos de manera óptima",
    icon: <MdContacts />,
    url: "/contacts",
  },
  {
    id: 4,
    label: "CRM",
    description:
      "Administra las relaciones con tus clientes, buscando su satisfacción",
    icon: <MdSupervisedUserCircle />,
    url: "/crm",
  },
  {
    id: 5,
    label: "Documentos",
    description: "Administra toda la documentación de tu compañía",
    icon: <MdFolder />,
    url: "/documents",
  },
  {
    id: 6,
    label: "Marketing",
    description:
      "Crea campañas para la presentación de tus productos o servicios",
    icon: <MdOutlineDesignServices />,
    url: "/marketing",
  },
  {
    id: 7,
    label: "Inventario",
    description: "Relaciona detalladamente los bienes de tu compañía",
    icon: <MdInventory />,
    url: "/inventory",
  },
  {
    id: 8,
    label: "Flujos de trabajo",
    description: "Estandariza las tareas que se realizan en tu compañía",
    icon: <MdLineStyle />,
    url: "/workflows",
  },
  {
    id: 9,
    label: "Gestión de proyectos",
    description: "Administra los proyectos establecidos para cumplir objetivos",
    icon: <MdTableView />,
    url: "/projects",
  },
];

export { mockAppsConfig };
