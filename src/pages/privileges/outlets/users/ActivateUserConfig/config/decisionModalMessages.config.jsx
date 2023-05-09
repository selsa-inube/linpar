const activateUserDecisionConfig = {
  activation: {
    title: "Activate user",
    description: ({ code }) =>
      `Are you sure you want to activate the user  ${code}?`,
    textAction: "Activate",
    appearance: "confirm",
  },

  desactivation: {
    title: "Deactivate user",
    description: ({ code }) =>
      `Are you sure you want to desactivate the user  ${code}?`,
    textAction: "Deactivate",
    appearance: "remove",
  },
};

export { activateUserDecisionConfig };
