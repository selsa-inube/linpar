import { MdThumbUpOffAlt, MdErrorOutline } from "react-icons/md";
import { IActionConfig } from "./types";

const resendInvitationModal = {
  title: "resend  invitation",
  description: ({ username }: IActionConfig) =>
    `Are you sure you want to resend the  invitation ${username} ?`,
  textAction: "Resend",
  appearance: "confirm",
};

const resendInvitationMessages = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "Successful  forwarding!",
    description: ({ username }: IActionConfig) =>
      `We have successfully  forward the invitation  to the user ${username}`,
    appearance: "confirm",
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "Oops, something has gone wrong!",
    description: ({ username }: IActionConfig) =>
      `We have presented problems forwarding the invitation to the user ${username}`,
    appearance: "remove",
  },
};

export { resendInvitationModal, resendInvitationMessages };
