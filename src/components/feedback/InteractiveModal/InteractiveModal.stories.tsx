import { InteractiveModal } from ".";
import { InteractiveModalProps } from "./types";
import { Button } from "@inube/design-system";
import { useState } from "react";

const story = {
  title: "Components/Feedback/InteractiveModa",
  component: InteractiveModal,
};

const data = {
  id: 10,
  userID: "45645",
  username: "David Leonardo Garzón",
  mail: "lgarzon@gmail.com",
  invitationDate: "11/JUN/2022",
  status: "Sent",
};

export const Default = (args: InteractiveModalProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show Modal</Button>
      <div id="portals"></div>
      {showModal && (
        <InteractiveModal {...args} closeModal={() => setShowModal(false)} />
      )}
    </>
  );
};

Default.args = {
  portalId: "portals",
  title: "User Information",
  infoData: data,
  infoTitle: "Información",
  actionsTitle: "Acciones",
};

export default story;
