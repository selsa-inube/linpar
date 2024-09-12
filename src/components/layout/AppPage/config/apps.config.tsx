import { MdBuild, MdPerson, MdVpnKey } from "react-icons/md";

const appsConfig = [
  {
    id: 1,
    label: "Privilegios",
    description: "Modifica las propiedades y permisos de tu cuenta",
    icon: <MdVpnKey />,
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
        isActive: true,
      },
    ],
    url: "/privileges",
  },
  {
    id: 2,
    label: "Catálogos Generales",
    description: "Opciones de configuración de catálogos generales.",
    icon: <MdBuild />,
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
        isActive: true,
      },
    ],
    url: "/catalogs",
  },
  {
    id: 3,
    label: "Personas",
    description:
      "Opciones de configuración relacionadas con el portal de clientes.",
    icon: <MdPerson />,
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/",
        isActive: false,
      },
      {
        path: "/people",
        label: "Personas",
        id: "/people",
        isActive: true,
      },
    ],
    url: "/people",
  },
];

const removeBussinessUnit = ["catalogs"];
const bussinessUnitOptionTotal = ["sistemasenlinea"];

const navigationConfig = {
  title: "MENU",
  sections: {
    administrate: {
      name: "",
      links: {
        privileges: {
          id: "privileges",
          label: "Privilegios",
          icon: <MdVpnKey />,
          path: "/privileges",
        },
        catalogs: {
          id: "catalogs",
          label: "Catálogos Generales",
          icon: <MdBuild />,
          path: "/catalogs",
        },
        people: {
          id: "people",
          label: "Personas",
          icon: <MdPerson />,
          path: "/people",
        },
      },
    },
  },
};

const logoutConfig = {
  logoutPath: "/logout",
  logoutTitle: "Cerrar sesión",
};

export {
  appsConfig,
  navigationConfig,
  logoutConfig,
  removeBussinessUnit,
  bussinessUnitOptionTotal,
};
