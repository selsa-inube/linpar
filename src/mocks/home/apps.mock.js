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

const mockApps = [
  {
    id: 1,
    label: "Privilegios",
    description: "Modifica las propiedades y permisos de tu cuenta",
    icon: <MdVpnKey />,
  },
  {
    id: 2,
    label: "Contabilidad",
    description: "Registra ingresos y gastos económicos de la compañía",
    icon: <MdMoney />,
  },
  {
    id: 3,
    label: "Contactos",
    description: "Registra tus contactos y almacénalos de manera óptima",
    icon: <MdContacts />,
  },
  {
    id: 4,
    label: "CRM",
    description:
      "Administra las relaciones con tus clientes, buscando su satisfacción",
    icon: <MdSupervisedUserCircle />,
  },
  {
    id: 5,
    label: "Documentos",
    description: "Administra toda la documentación de tu compañía",
    icon: <MdFolder />,
  },
  {
    id: 6,
    label: "Marketing",
    description:
      "Crea campañas para la presentación de tus productos o servicios",
    icon: <MdOutlineDesignServices />,
  },
  {
    id: 7,
    label: "Inventario",
    description: "Relaciona detalladamente los bienes de tu compañía",
    icon: <MdInventory />,
  },
  {
    id: 8,
    label: "Flujos de trabajo",
    description: "Estandariza las tareas que se realizan en tu compañía",
    icon: <MdLineStyle />,
  },
  {
    id: 9,
    label: "Gestión de proyectos",
    description: "Administra los proyectos establecidos para cumplir objetivos",
    icon: <MdTableView />,
  },
];

export { mockApps };
