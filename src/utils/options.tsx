import { MdPerson, MdSync, MdVpnKey } from "react-icons/md";
import catalogs from "@assets/images/catalogs.svg";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaUserGear } from "react-icons/fa6";
const options = [
  {
    publicCode: "catalogosgeneraleslinix",
    icon: <img src={catalogs} alt="catalogs" width="25" height="25" />,
    url: "/catalogs",
  },
  {
    publicCode: "gestionprivilegios",
    icon: <MdVpnKey />,
    url: "/privileges",
  },
];

const subOptions = [
  {
    publicCode: "catalogosgeneraleslinix",
    publicCodeOption: "casosdeusolinix",
    icon: <TfiMenuAlt size={"20px"} />,
    url: "/catalogs/linixUseCase",
    domain: "catalogs",
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
        isActive: false,
      },
      {
        path: "/catalogs/linixUseCase",
        label: "Casos de uso Linix",
        id: "/catalogs/linixUseCase",
        isActive: true,
      },
    ],
  },
  {
    publicCode: "catalogosgeneraleslinix",
    publicCodeOption: "roleslinix",
    icon: <FaUserGear />,
    url: "/catalogs/roles",
    domain: "catalogs",
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
        isActive: false,
      },
      {
        path: "/catalogs/roles",
        label: "Roles Linix",
        id: "/catalogs/roles",
        isActive: true,
      },
    ],
  },
  {
    publicCode: "gestionprivilegios",
    publicCodeOption: "cargoslinix",
    icon: <MdSync />,
    url: "/privileges/positions",
    domain: "privileges",
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
        isActive: false,
      },
      {
        path: "/privileges/positions",
        label: "Cargos Linix",
        id: "/privileges/positions",
        isActive: true,
      },
    ],
  },
  {
    publicCode: "gestionprivilegios",
    publicCodeOption: "usuarioslinix",
    icon: <MdPerson />,
    url: "/privileges/users",
    domain: "privileges",
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
        isActive: false,
      },
      {
        path: "/privileges/users",
        label: "Usuarios Linix",
        id: "/privileges/users",
        isActive: true,
      },
    ],
  },
];

const normalizeOptionsByPublicCode = (publicCode: string) =>
  options.find((data) => data.publicCode === publicCode);

const normalizesubOptionsByPublicCode = (
  publicCode: string,
  publicCodeSubOption: string
) =>
  subOptions.find(
    (data) =>
      data.publicCode === publicCode &&
      data.publicCodeOption === publicCodeSubOption
  );
export {
  options,
  normalizeOptionsByPublicCode,
  normalizesubOptionsByPublicCode,
};
