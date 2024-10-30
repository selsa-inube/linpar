import { inube } from "@inubekit/foundations";
const sistemasenlinea = {
  icon: {
    primary: {
      content: {
        color: {
          regular: inube.palette.blue.B400,
          disabled: inube.palette.neutral.N90,
          hover: inube.palette.blue.B300,
        },
      },
      background: {
        color: {
          regular: inube.palette.blue.B400,
          disabled: inube.palette.neutral.N20,
          hover: inube.palette.blue.B300,
        },
      },
      contrast: {
        color: {
          regular: inube.palette.neutral.N10,
          disabled: inube.palette.neutral.N90,
          hover: inube.palette.neutral.N10,
        },
      },
    },
  },
  button: {
    primary: {
      content: {
        color: {
          regular: inube.palette.blue.B400,
          disabled: inube.palette.neutral.N20,
          hover: inube.palette.blue.B300,
        },
      },
      border: {
        color: {
          regular: inube.palette.blue.B400,
          disabled: inube.palette.neutral.N70,
          hover: inube.palette.blue.B300,
        },
      },
      contrast: {
        appearance: "light",
      },
    },
    success: {
      content: {
        color: {
          regular: inube.palette.green.G400,
          disabled: inube.palette.neutral.N20,
          hover: inube.palette.green.G300,
        },
      },
      border: {
        color: {
          regular: inube.palette.green.G400,
          disabled: inube.palette.neutral.N70,
          hover: inube.palette.green.G300,
        },
      },
      contrast: {
        appearance: "light",
      },
    },
    warning: {
      content: {
        color: {
          regular: inube.palette.yellow.Y400,
          disabled: inube.palette.neutral.N20,
          hover: inube.palette.yellow.Y300,
        },
      },
      border: {
        color: {
          regular: inube.palette.yellow.Y400,
          disabled: inube.palette.neutral.N70,
          hover: inube.palette.yellow.Y300,
        },
      },
      contrast: {
        appearance: "dark",
      },
    },
    danger: {
      content: {
        color: {
          regular: inube.palette.red.R400,
          disabled: inube.palette.neutral.N20,
          hover: inube.palette.red.R300,
        },
      },
      border: {
        color: {
          regular: inube.palette.red.R400,
          disabled: inube.palette.neutral.N70,
          hover: inube.palette.red.R300,
        },
      },
      contrast: {
        appearance: "light",
      },
    },
    help: {
      content: {
        color: {
          regular: inube.palette.purple.P400,
          disabled: inube.palette.neutral.N20,
          hover: inube.palette.purple.P300,
        },
      },
      border: {
        color: {
          regular: inube.palette.purple.P400,
          disabled: inube.palette.neutral.N70,
          hover: inube.palette.purple.P300,
        },
      },
      contrast: {
        appearance: "light",
      },
    },
    dark: {
      content: {
        color: {
          regular: inube.palette.neutral.N900,
          disabled: inube.palette.neutral.N20,
          hover: inube.palette.neutral.N500,
        },
      },
      border: {
        color: {
          regular: inube.palette.neutral.N900,
          disabled: inube.palette.neutral.N70,
          hover: inube.palette.neutral.N500,
        },
      },
      contrast: {
        appearance: "light",
      },
    },
    gray: {
      content: {
        color: {
          regular: inube.palette.neutral.N20,
          disabled: inube.palette.neutral.N20,
          hover: inube.palette.neutral.N30,
        },
      },
      border: {
        color: {
          regular: inube.palette.neutral.N200,
          disabled: inube.palette.neutral.N70,
          hover: inube.palette.neutral.N90,
        },
      },
      contrast: {
        appearance: "gray",
      },
    },
    light: {
      content: {
        color: {
          regular: inube.palette.neutral.N20,
          disabled: inube.palette.neutral.N20,
          hover: inube.palette.neutral.N0,
        },
      },
      border: {
        color: {
          regular: inube.palette.neutral.N20,
          disabled: inube.palette.neutral.N70,
          hover: inube.palette.neutral.N0,
        },
      },
      contrast: {
        appearance: "dark",
      },
    },
  },
  assisted: {
    title: {
      appearance: "dark",
    },
    description: {
      appearance: "gray",
    },
    track: {
      color: inube.palette.neutral.N30,
    },
    bar: {
      color: inube.palette.blue.B400,
    },
    background: {
      color: inube.palette.neutral.N10,
    },
    button: {
      appearance: "primary",
    },
    step: {
      color: inube.palette.blue.B400,
    },
  },
  text: {
    primary: {
      content: {
        color: {
          regular: inube.palette.blue.B400,
          disabled: inube.palette.neutral.N90,
          hover: inube.palette.blue.B300,
        },
      },
    },
  },
  input: {
    border: {
      color: {
        regular: inube.palette.neutral.N40,
        disabled: inube.palette.neutral.N40,
        focus: inube.palette.blue.B300,
        invalid: inube.palette.red.R400,
      },
    },
    background: {
      color: {
        regular: inube.palette.neutral.N0,
        disabled: inube.palette.neutral.N10,
      },
    },
    content: {
      color: {
        regular: inube.palette.neutral.N900,
        disabled: inube.palette.neutral.N70,
      },
    },
    placeholder: {
      color: {
        regular: inube.palette.neutral.N300,
      },
    },
    message: {
      appearance: "danger",
    },
    required: {
      appearance: "danger",
    },
    option: {
      appearance: {
        regular: "dark",
        hover: "primary",
      },
      background: {
        regular: inube.palette.neutral.N0,
        hover: inube.palette.neutral.N30,
      },
    },
  },
  label: {
    content: {
      color: {
        regular: "dark",
        disabled: "dark",
        focus: "primary",
        invalid: "danger",
      },
    },
  },
};

export { sistemasenlinea };
