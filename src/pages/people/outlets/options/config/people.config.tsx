import {
  MdOutlineFormatColorText,
  MdOutlineFormatPaint,
  MdOutlineModeEditOutline,
  MdPalette,
} from "react-icons/md";

const peopleOptionsConfig = [
  {
    id: 1,
    icon: <MdPalette />,
    label: "Paleta",
    description: "Personaliza los colores de la paleta de tu tema",
    url: "/people/palette",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/",
        isActive: false,
      },
      {
        path: "/people",
        label: "Personas",
        id: "/people",
        isActive: false,
      },
      {
        path: "/people/palette",
        label: "Paleta",
        id: "/people/palette",
        isActive: true,
      },
    ],
  },
  {
    id: 2,
    icon: <MdOutlineFormatColorText />,
    label: "Textos",
    description: "Personaliza los colores de tus componentes",
    url: "/people/texts",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/",
        isActive: false,
      },
      {
        path: "/people",
        label: "Personas",
        id: "/people",
        isActive: false,
      },
      {
        path: "/people/texts",
        label: "Textos",
        id: "/people/texts",
        isActive: true,
      },
    ],
  },
  {
    id: 3,
    icon: <MdOutlineFormatPaint />,
    label: "Superficies",
    description: "Personaliza los colores de tus componentes",
    url: "/people/surfaces",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/",
        isActive: false,
      },
      {
        path: "/people",
        label: "Personas",
        id: "/people",
        isActive: false,
      },
      {
        path: "/people/surfaces",
        label: "Superficies",
        id: "/people/surfaces",
        isActive: true,
      },
    ],
  },
  {
    id: 4,
    icon: <MdOutlineModeEditOutline />,
    label: "Líneas",
    description: "Personaliza los colores de tus componentes",
    url: "/people/lines",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/",
        isActive: false,
      },
      {
        path: "/people",
        label: "Personas",
        id: "/people",
        isActive: false,
      },
      {
        path: "/people/lines",
        label: "Líneas",
        id: "/people/lines",
        isActive: true,
      },
    ],
  },
];

export { peopleOptionsConfig };
