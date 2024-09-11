import { MdMoney, MdVpnKey } from "react-icons/md";

import { ICardData } from "@pages/home/types";

const mockAppCards: ICardData[] = [
  {
    id: "1",
    label: "Privilegios",
    description: "Modifica las propiedades y permisos de tu cuenta.",
    icon: <MdVpnKey />,
    url: "/privileges",
  },
  {
    id: "2",
    label: "Catálogos Generales",
    description: "Modifica los catálogos generales.",
    icon: <MdMoney />,
    url: "/catalogs",
  },
];

export { mockAppCards };
