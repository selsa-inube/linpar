import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";
import { EAppearance } from "@src/types/colors.types";
import { IGeneralInformationEntry } from "../types/forms.types";

const resendInvitationModal = {
  title: "resend  invitation",
  description: ({ username }: IGeneralInformationEntry) =>
    `Are you sure you want to resend the  invitation ${username} ?`,
  textAction: "Resend",
  appearance: EAppearance.CONFIRM,
};

const resendInvitationMessages = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "Successful  forwarding!",
    description: ({ username }: IGeneralInformationEntry) =>
      `We have successfully  forward the invitation  to the user ${username}`,
    appearance: EAppearance.CONFIRM,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "Oops, something has gone wrong!",
    description: ({ username }: IGeneralInformationEntry) =>
      `We have presented problems forwarding the invitation to the user ${username}`,
    appearance: EAppearance.REMOVE,
  },
};

export { resendInvitationMessages, resendInvitationModal };
