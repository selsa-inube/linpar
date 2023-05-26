import { MdThumbUpOffAlt, MdErrorOutline } from "react-icons/md";

const activateUserModal = {
  activation: {
    title: "Activate user",
    description: ({ code }) =>
      `Are you sure you want to activate  the user ${code}? `,
    textAction: "Activate",
    appearance: "confirm",
  },

  deactivation: {
    title: "Deactivate user",
    description: ({ code }) =>
      `Are you sure you want to deactivate  the user ${code}? `,
    textAction: "Deactivate",
    appearance: "remove",
  },
};

const activateUserMessages = {
  activate: {
    id: 1,
    icon: <MdThumbUpOffAlt size={18} />,
    title: "Successful  forwarding!",
    description: ({ username }) => `User ${username} is Activated `,
    appearance: "confirm",
  },
  deactivate: {
    id: 2,
    icon: <MdErrorOutline size={18} />,
    title: "Oops, something has gone wrong!",
    description: ({ username }) => `User ${username} is Deactivated `,
    appearance: "confirm",
  },
};
export { activateUserModal, activateUserMessages };
