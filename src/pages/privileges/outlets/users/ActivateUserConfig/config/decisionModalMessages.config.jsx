const activateUserDecisionConfig = {
  activation: {
    title: "Activate user",
    description: ({ code, position }) =>
      `Are you sure you want to activate the user  ${code}?`,
    textAction: "Activate",
    appearance: "confirm",
  },

  desactivation: {
    title: "Desactivate user",
    description: ({ code }) =>
      `Are you sure you want to desactivate the user  ${code}?`,
    textAction: "Desactivate",
    appearance: "remove",
  },
};

export { activateUserDecisionConfig };
