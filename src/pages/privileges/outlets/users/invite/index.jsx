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

  const LOADING_TIMEOUT = 2500;

  const handleInputChange = (event) => {
    const { name, value, validity } = event.target;
    const isInvalid = value === "" || !validity.valid;

    setInvitation((prevInvitation) => ({
      ...prevInvitation,
      [name]: { value, isInvalid },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.values(invitation).some((prop) => prop.isInvalid)) {
      setFormInvalid(true);
      setShowMessage(true);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormInvalid(false);
      setShowMessage(true);
    }, LOADING_TIMEOUT);
  };

  const handleCloseSectionMessage = () => {
    setShowMessage(false);
  };

  return (
    <InviteUI
      loading={loading}
      showMessage={showMessage}
      invitation={invitation}
      formInvalid={formInvalid}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      handleCloseSectionMessage={handleCloseSectionMessage}
    />
  );
}

export { Invite };
