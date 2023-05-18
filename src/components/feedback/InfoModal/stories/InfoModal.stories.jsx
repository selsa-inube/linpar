import React from "react";
import { InfoModal } from "..";
import { action } from "@storybook/addon-actions";

const story = {
  component: InfoModal,
  title: "components/feedback/InfoModal",
};

const data = {
  name: "David Leonardo Garzón Páramo",
  identification: "1013614213",
  phone: "320 5510052",
  mail: "d.garzon@sistemasenlinea.com.co",
};

const Template = (args) => <InfoModal {...args} />;

const closeInfoModal = () => {
  action("InfoModal closed");
};

export const Default = Template.bind({});
Default.args = {
  title: "User Information",
  closeModal: closeInfoModal,
  dataUser: data,
};

export default story;
