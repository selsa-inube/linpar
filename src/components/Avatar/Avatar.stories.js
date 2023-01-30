import React from "react";
import { Avatar } from "./index";

const story = {
  components: [Avatar],
  title: "components/Avatar",
};

const Default = (args) => <Avatar {...args} />;
Default.args = {
  username: "Leonardo Garzón",
  businessName: "Fondoccidente",
};

export default story;

export { Default };
