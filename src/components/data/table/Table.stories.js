import { Table } from "./index";

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

const entries = [
  {
    id: 1,
    username: "David Leonardo Garzón",
    code: "LGARZON",
    userID: "1256545",
    position: "Credit Analyst",
  },
  {
    id: 2,
    username: "Angie Pinilla",
    code: "APINILLA",
    userID: "789654",
    position: "Adviser",
  },
  {
    id: 3,
    username: "Cristian Rojas",
    code: "CROJAS",
    userID: "258963",
    position: "Credit Analyst",
  },
  {
    id: 4,
    username: "Johan Nova",
    code: "JNOVA",
    userID: "589647",
    position: "Adviser",
  },
];

const actions = [
  {
    actionName: "Activate",
    content: <MdToggleOff size={32} />,
    type: "secondary",
  },
  {
    actionName: "Edit",
    content: <MdModeEdit />,
    type: "primary",
  },
  {
    actionName: "Delete",
    content: <MdOutlineDelete />,
    type: "remove",
  },
];

const story = {
  components: [Table],
  title: "components/data/Table",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    onSearchChange: { action: "checked" },
    handleStartPage: { action: "checked" },
    handlePrevPage: { action: "checked" },
    handleNextPage: { action: "checked" },
    handleEndPage: { action: "checked" },
  },
};

const Default = (args) => <Table {...args} />;
Default.args = {
  titles,
  entries,
  actions,
  filter: "",
  pageLength: 10,
};

export default story;

export { Default };
