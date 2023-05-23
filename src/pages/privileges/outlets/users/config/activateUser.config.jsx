const activateUserConfig = {
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

export { activateUserConfig };
