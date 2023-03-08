import { Table } from "../index";
import { Edit } from "./Edit";
import { Delete } from "./Delete";
import { Switch } from "./Switch";

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
];

const actions = [
  {
    id: 1,
    actionName: "Activate",
    content: <Switch />,
    type: "secondary",
  },
  {
    id: 2,
    actionName: "Edit",
    content: <Edit />,
    type: "primary",
  },
  {
    id: 3,
    actionName: "Delete",
    content: <Delete />,
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
