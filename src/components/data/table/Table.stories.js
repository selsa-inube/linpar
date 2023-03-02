import { Table } from "./index";

import { MdModeEdit, MdOutlineDelete, MdToggleOff } from "react-icons/md";

const titles = [
  {
    id: "position",
    titleName: "position",
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
    id: "username",
    titleName: "username",
  },
];

const entries = [
  {
    username: "David Garzón",
    code: "LGARZON",
    userID: "1256545",
    position: "Credit Analyst",
  },
  {
    username: "David Garzón",
    code: "LGARZON",
    userID: "1256545",
    position: "Credit Analyst",
  },
  {
    username: "David Garzón",
    code: "LGARZON",
    userID: "1256545",
    position: "Credit Analyst",
  },
  {
    username: "David Garzón",
    code: "LGARZON",
    userID: "1256545",
    position: "Credit Analyst",
  },
];

const actions = [
  {
    actionName: "Activate",
    content: <MdToggleOff size={32} />,
  },
  {
    actionName: "Edit",
    content: <MdModeEdit />,
  },
  {
    actionName: "Delete",
    content: <MdOutlineDelete />,
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
