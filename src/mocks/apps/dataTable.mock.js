import { MdModeEdit, MdOutlineDelete, MdToggleOff } from "react-icons/md";

const titles = [
  {
    id: "username",
    titleName: "Username",
  },
  {
    id: "code",
    titleName: "Code",
  },
  {
    id: "userID",
    titleName: "User Id",
  },
  {
    id: "position",
    titleName: "Position",
  },
];

const actions = [
  {
    id: 1,
    actionName: "Activate",
    content: <MdToggleOff size={32} />,
    type: "secondary",
  },
  {
    id: 2,
    actionName: "Edit",
    content: <MdModeEdit />,
    type: "primary",
  },
  {
    id: 3,
    actionName: "Delete",
    content: <MdOutlineDelete />,
    type: "remove",
  },
];

const entries = [
  {
    id: 11,
    username: "David Leonardo Garzón",
    code: "LGARZON",
    userID: "1256545",
    position: "Credit Analyst",
  },
  {
    id: 12,
    username: "Angie Pinilla",
    code: "APINILLA",
    userID: "789654",
    position: "Adviser",
  },
  {
    id: 13,
    username: "Cristian Rojas",
    code: "CROJAS",
    userID: "258963",
    position: "Credit Analyst",
  },
  {
    id: 14,
    username: "Johan Nova",
    code: "JNOVA",
    userID: "589647",
    position: "Adviser",
  },
  {
    id: 15,
    username: "Fernando Cañas",
    code: "FCANAS",
    userID: "365224",
    position: "Credit Analyst",
  },
  {
    id: 16,
    username: "Carlos Batativa",
    code: "CBATATIVA",
    userID: "2357421",
    position: "Adviser",
  },
  {
    id: 17,
    username: "Cesar Marin",
    code: "CMARIN",
    userID: "1000245",
    position: "Credit Analyst",
  },
  {
    id: 18,
    username: "Pedro Perez",
    code: "PEREZ",
    userID: "687440",
    position: "Adviser",
  },
  {
    id: 19,
    username: "Sofia Henao",
    code: "SHENAO",
    userID: "352411",
    position: "Adviser",
  },
  {
    id: 20,
    username: "Daniel Novoa",
    code: "DNOVOA",
    userID: "320145",
    position: "Credit Analyst",
  },
  {
    id: 21,
    username: "Jose Gomez",
    code: "JGOMEZ",
    userID: "4578899",
    position: "Adviser",
  },
  {
    id: 22,
    username: "Jeimmy Cruz",
    code: "JCRUZ",
    userID: "586745",
    position: "Adviser",
  },
  {
    id: 23,
    username: "Samuel Mejia",
    code: "SMEJIA",
    userID: "235652",
    position: "Credit Analyst",
  },
  {
    id: 24,
    username: "Laura Amado",
    code: "LAMADO",
    userID: "3201153",
    position: "Adviser",
  },
];

export { actions, titles, entries };
