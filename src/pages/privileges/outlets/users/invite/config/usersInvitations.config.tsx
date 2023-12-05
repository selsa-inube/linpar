const usersInvitationsConfig = [
  {
    id: 1,
    label: "Invitar usuarios",
    description:
      "Invita a nuevos usuarios a colaborar dentro de tu software de Linix.",
    route: "/privileges/users/invite",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/home",
        isActive: false,
      },
      {
        path: "/privileges",
        label: "Privilegios",
        id: "/privileges",
        isActive: false,
      },
      {
        path: "/privileges/users",
        label: "Usuarios",
        id: "/privileges/users",
        isActive: false,
      },
      {
        path: "/privileges/users/invite",
        label: "Invitar usuarios",
        id: "/privileges/users/invite",
        isActive: true,
      },
    ],
  },
];

export { usersInvitationsConfig };
