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

const appsConfig = [
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

const navigationConfig = {
  title: "Menú",
  sections: {
    administrate: {
      name: "Administrar",
      links: {
        privileges: {
          id: "privileges",
          label: "Privilegios",
          icon: <MdVpnKey />,
          path: "/privileges",
        },
        accounting: {
          id: "accounting",
          label: "Contabilidad",
          icon: <MdMoney />,
          path: "/accounting",
        },
        contacts: {
          id: "contacts",
          label: "Contactos",
          icon: <MdContacts />,
          path: "/contacts",
        },
        crm: {
          id: "crm",
          label: "CRM",
          icon: <MdSupervisedUserCircle />,
          path: "/crm",
        },
        documents: {
          id: "documents",
          label: "Documentos",
          icon: <MdFolder />,
          path: "/documents",
        },
        marketing: {
          id: "marketing",
          label: "Marketing",
          icon: <MdOutlineDesignServices />,
          path: "/marketing",
        },
        inventory: {
          id: "inventory",
          label: "Inventario",
          icon: <MdInventory />,
          path: "/inventory",
        },
        workflows: {
          id: "workflows",
          label: "Flujos de trabajo",
          icon: <MdLineStyle />,
          path: "/workflows",
        },
        projects: {
          id: "projects",
          label: "Gestión de proyectos",
          icon: <MdTableView />,
          path: "/projects",
        },
      },
    },
  },
};

export { appsConfig, navigationConfig };
