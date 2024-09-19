import { MdVpnKey } from "react-icons/md";

import { ICardData } from "@pages/home/types";
import catalogs from "@assets/images/catalogs.svg";

const mockAppCards: ICardData[] = [
  {
    id: "privilegios",
    label: "Privilegios",
    description: "Modifica las propiedades y permisos de tu cuenta.",
    icon: <MdVpnKey />,
    url: "/privileges",
  },
  {
    id: "catalogs",
    label: "Catálogos Generales",
    description: "Modifica los catálogos generales.",
    icon: <img src={catalogs} alt="catalogs" width="25" height="25" />,
    url: "/catalogs",
  },
];

export { mockAppCards };
