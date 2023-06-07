import React from "react";
import { InteractiveModal } from "..";
import { action } from "@storybook/addon-actions";

const story = {
  component: InteractiveModal,
  title: "components/feedback/InfoModal",
};

const data = {
  Name: "David Leonardo Garzón Páramo",
  Identification: "1013614213",
  Phone: "3205510052",
  Mail: "d.garzon@sistemasenlinea.com.co",
};

const Template = (args) => <InteractiveModal {...args} />;

const closeInfoModal = () => {
  action("InfoModal closed");
};

export const Default = Template.bind({});
Default.args = {
  title: "User Information",
  closeModal: closeInfoModal,
  infoData: data,
};

export default story;
