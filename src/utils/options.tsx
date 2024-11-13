import { MdVpnKey } from "react-icons/md";
import catalogs from "@assets/images/catalogs.svg";
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

const normalizeOptionsByPublicCode = (publicCode: string) =>
  options.find((data) => data.publicCode === publicCode);

export { options, normalizeOptionsByPublicCode };
