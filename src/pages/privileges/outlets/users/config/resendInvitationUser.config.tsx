import { MdErrorOutline, MdThumbUpOffAlt } from "react-icons/md";
import { EAppearance } from "@src/types/colors.types";
import { IInvitationsEntry } from "@src/services/users/invitation.types";

const resendInvitationModal = {
  title: "resend  invitation",
  description: ({ userName }: IInvitationsEntry) =>
    `Are you sure you want to resend the  invitation ${userName} ?`,
  textAction: "Resend",
  appearance: EAppearance.SUCCESS,
};

const resendInvitationMessages = {
  success: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "Successful  forwarding!",
    description: ({ userName }: IInvitationsEntry) =>
      `We have successfully  forward the invitation  to the user ${userName}`,
    appearance: EAppearance.SUCCESS,
  },
  failed: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "Oops, something has gone wrong!",
    description: ({ userName }: IInvitationsEntry) =>
      `We have presented problems forwarding the invitation to the user ${userName}`,
    appearance: EAppearance.ERROR,
  },
};

export { resendInvitationMessages, resendInvitationModal };
