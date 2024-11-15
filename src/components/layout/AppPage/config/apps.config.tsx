import { MdLogout, MdVpnKey } from "react-icons/md";
import catalogs from "@assets/images/catalogs.svg";
import { useAuth0 } from "@auth0/auth0-react";
import { ICardData } from "@src/pages/home/types";

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
const bussinessUnitOptionTotal = ["860514047"];

const createNavLink = (
  option: ICardData | undefined,
  defaultIcon: JSX.Element
) => ({
  id: option?.id || "",
  label: option?.label || "",
  icon: option?.icon || defaultIcon,
  path: option?.url || "",
});

const navigationConfig = (options: ICardData[]) => {
  const linkNav = options.reduce<
    Record<string, ReturnType<typeof createNavLink>>
  >((acc, option) => {
    const navLink = createNavLink(option, <MdVpnKey />);
    acc[navLink.id] = navLink;
    return acc;
  }, {});

  const nav = {
    items: {
      title: "MENU",
      sections: {
        administrate: {
          name: "",
          links: linkNav,
        },
      },
    },
    breakpoint: "600px",
  };

  return nav;
};

const userMenu = [
  {
    id: "section",
    title: "",
    links: [
      {
        id: "logout",
        title: "Cerrar sesión",
        path: "/logout",
        iconBefore: <MdLogout />,
      },
    ],
    divider: true,
  },
];
export {
  AppsConfig,
  userMenu,
  navigationConfig,
  removeBussinessUnit,
  bussinessUnitOptionTotal,
};
