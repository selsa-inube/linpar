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
        path: "/users",
        label: "Usuarios",
        id: "/users",
        isActive: false,
      },
      {
        path: "/invite",
        label: "Invitacion",
        id: "/invite",
        isActive: true,
      },
    ],
  },
];

export { usersInvitationsConfig };
