import { MdVpnKey } from "react-icons/md";

const appsConfig = [
  {
    id: 1,
    label: "Privilegios",
    description: "Modifica las propiedades y permisos de tu cuenta",
    icon: <MdVpnKey />,
    url: "/privileges",
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
      },
    },
  },
};

export { appsConfig, navigationConfig };
