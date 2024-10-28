import { MdLogout, MdVpnKey } from "react-icons/md";
import catalogs from "@assets/images/catalogs.svg";
import { useAuth0 } from "@auth0/auth0-react";

const AppsConfig = () => {
  const { logout } = useAuth0();
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
      icon: <img src={catalogs} alt="catalogs" width="25" height="25" />,
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
  ];
  const actionConfig = [
    {
      id: "logout",
      label: "Cerrar sesión",
      icon: <MdLogout />,
      action: () => {
        logout();
        window.location.href = window.location.origin;
      },
    },
  ];
  return { appsConfig, actionConfig };
};
const removeBussinessUnit = ["catalogs"];
const bussinessUnitOptionTotal = ["1"];

const navigationConfig = {
  items: {
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
            icon: <img src={catalogs} alt="catalogs" width="25" height="25" />,
            path: "/catalogs",
          },
        },
      },
    },
  },
};

export {
  AppsConfig,
  navigationConfig,
  removeBussinessUnit,
  bussinessUnitOptionTotal,
};
