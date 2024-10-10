import { Icon } from "@inube/design-system";
import { FaUserGear } from "react-icons/fa6";

export const menuInvitationLinks = [
  {
    id: "Create-role",
    label: "Agregar Roles",
    path: "/catalogs/roles/add-role",
    icon: <Icon icon={<FaUserGear />} size="16px" appearance="dark" />,
  },
];
