import {
  MdBorderColor,
  MdOutlineFormatColorText,
  MdOutlineFormatPaint,
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
    icon: <MdBorderColor />,
    label: "Líneas",
    description: "Personaliza los colores de tus componentes",
    url: "/people/strokes",
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
        path: "/people/strokes",
        label: "Líneas",
        id: "/people/strokes",
        isActive: true,
      },
    ],
  },
];

export { peopleOptionsConfig };
