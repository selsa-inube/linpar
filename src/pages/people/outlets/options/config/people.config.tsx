import {
  MdBorderColor,
  MdOutlineFormatColorText,
  MdOutlineFormatPaint,
  MdPalette,
} from "react-icons/md";

import { TbSquareLetterA } from "react-icons/tb";

const peopleOptionsConfig = [
  {
    id: 1,
    icon: <MdPalette />,
    label: "Paleta",
    description: "Personaliza los colores de la paleta de tu tema",
    url: "/people/color/palette",
    domain: "color",
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
        path: "/people/color",
        label: "Color",
        id: "/people/color",
        isActive: false,
      },
      {
        path: "/people/color/palette",
        label: "Paleta",
        id: "/people/color/palette",
        isActive: true,
      },
    ],
  },
  {
    id: 2,
    icon: <MdOutlineFormatColorText />,
    label: "Textos",
    description: "Personaliza los colores de tus componentes",
    url: "/people/color/texts",
    domain: "color",
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
        path: "/people/color",
        label: "Color",
        id: "/people/color",
        isActive: false,
      },
      {
        path: "/people/color/texts",
        label: "Textos",
        id: "/people/color/texts",
        isActive: true,
      },
    ],
  },
  {
    id: 3,
    icon: <MdOutlineFormatPaint />,
    label: "Superficies",
    description: "Personaliza los colores de tus componentes",
    url: "/people/color/surfaces",
    domain: "color",
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
        path: "/people/color",
        label: "Color",
        id: "/people/color",
        isActive: false,
      },
      {
        path: "/people/color/surfaces",
        label: "Superficies",
        id: "/people/color/surfaces",
        isActive: true,
      },
    ],
  },
  {
    id: 4,
    icon: <MdBorderColor />,
    label: "Líneas",
    description: "Personaliza los colores de tus componentes",
    url: "/people/color/strokes",
    domain: "color",
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
        path: "/people/color",
        label: "Color",
        id: "/people/color",
        isActive: false,
      },
      {
        path: "/people/color/strokes",
        label: "Líneas",
        id: "/people/color/strokes",
        isActive: false,
      },
    ],
  },
  {
    id: 5,
    icon: <TbSquareLetterA />,
    label: "Fuentes",
    description: "Personaliza las familias y los tamaños de tus fuentes",
    url: "/people/typography/fonts",
    domain: "typography",
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
        path: "/people/typography",
        label: "Tipografia",
        id: "/people/typography",
        isActive: false,
      },
      {
        path: "/people/typography/fonts",
        label: "Fuentes",
        id: "/people/typography/fonts",
        isActive: true,
      },
    ],
  },
];

export { peopleOptionsConfig };
