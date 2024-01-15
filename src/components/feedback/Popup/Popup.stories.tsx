import { Button } from "@inube/design-system";
import { useState } from "react";
import { Popup } from ".";
import { PopupProps } from "./types";

const story = {
  title: "Components/Feedback/Popup",
  component: Popup,
};

export const Default = (args: PopupProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show Popup</Button>
      {showModal && <Popup {...args} closeModal={() => setShowModal(false)} />}
    </>
  );
};

Default.args = {
  portalId: "portal",
  title: "Paleta de colores",
};

export default story;
