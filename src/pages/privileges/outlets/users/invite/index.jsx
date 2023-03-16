import { useState } from "react";
import { InviteUI } from "./interface";

function Invite() {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);
  const [invitation, setInvitation] = useState({
    name: { value: "", isInvalid: true },
    id: { value: "", isInvalid: true },
    phone: { value: "", isInvalid: true },
    email: { value: "", isInvalid: true },
  });

  const SHOW_MESSAGE_TIMEOUT = 5000;
  const LOADING_TIMEOUT = 2500;

  const handleInputChange = (event) => {
    const { name, value, validity } = event.target;

    setInvitation({
      ...invitation,
      [name]: {
        value,
        isInvalid: value === "" || !validity.valid,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.values(invitation).some((prop) => prop.isInvalid)) {
      setFormInvalid(true);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), SHOW_MESSAGE_TIMEOUT);
    }, LOADING_TIMEOUT);
  };

  return (
    <InviteUI
      loading={loading}
      showMessage={showMessage}
      invitation={invitation}
      formInvalid={formInvalid}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
  );
}

export { Invite };
