import { StoryFn } from "@storybook/react";
import {
  MdInventory2,
  MdOutlineAddTask,
  MdOutlineExplore,
  MdOutlinePendingActions,
  MdOutlinePhonelinkSetup,
  MdOutlineSecurity,
  MdPerson,
} from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { AppMenu, AppMenuProps } from "./index";
import { AppMenuGrid } from "@components/layout/AppMenuGrid";

const story = {
  components: [AppMenu],
  title: "layouts/AppMenu",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Privileges = (args: AppMenuProps) => (
  <AppMenu {...args}>
    <AppMenuGrid appOptions={Privileges.args.appOptions} />
  </AppMenu>
);
Privileges.args = {
  appName: "Privilegios",
  appDescription: "Modifica las propiedades y permisos de tu cuenta",
  navigatePage: "/",
  appRoute: [
    {
      path: "/",
      label: "Inicio",
      id: "/",
      isActive: false,
    },
    {
      path: "/users",
      label: "Usuarios",
      id: "/users",
      isActive: false,
    },
  ],
  appOptions: [
    {
      id: 1,
      icon: <MdPerson />,
      label: "Usuarios",
      description: "invitar, editar, activar y eliminar usuarios de Linix",
      url: "privileges/users",
      domain: "privileges",
    },
    {
      id: 2,
      icon: <MdOutlineExplore />,
      label: "Roles",
      description: "Crear, editar, activar y eliminar roles de Linix",
      url: "privileges/roles",
      domain: "privileges",
    },
    {
      id: 3,
      icon: <MdOutlineAddTask />,
      label: "Administración contenido",
      description: "Administrar el contenido de Linix",
      url: "privileges/ContentAdministration",
      domain: "privileges",
    },
    {
      id: 4,
      icon: <MdOutlineSecurity />,
      label: "Seguridad",
      description: "Administrar la configuración de seguridad de Linix",
      url: "privileges/Security",
      domain: "privileges",
    },
    {
      id: 5,
      icon: <MdOutlinePhonelinkSetup />,
      label: "Dispositivos",
      description: "dispositivos vinculados",
      url: "privileges/devices",
      domain: "privileges",
    },
    {
      id: 6,
      icon: <MdOutlinePendingActions />,
      label: "Administración versiones",
      description: "Administrar versiones de Linix",
      url: "privileges/users",
      domain: "privileges",
    },
    {
      id: 7,
      icon: <MdInventory2 />,
      label: "Gestion productos",
      description: "Gestionar productos Linix",
      url: "privileges/users",
      domain: "privileges",
    },
  ],
};

export default story;

export { Privileges };
