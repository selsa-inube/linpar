import { useState } from "react";
import { InviteUI } from "./interface";

function Invite() {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [invitation, setInvitation] = useState({
    name: { value: "", valid: true },
    id: { value: "", valid: true },
    phone: { value: "", valid: true },
    email: { value: "", valid: true },
  });

  const SHOW_MESSAGE_TIMEOUT = 5000;
  const LOADING_TIMEOUT = 2500;

  const handleInputChange = (event) => {
    const { name, value, validity } = event.target;

    setInvitation({
      ...invitation,
      [name]: { value, valid: !validity.valid },
    });
  };

  const handleClickSubmit = (event) => {
    setSubmitted(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setSubmitted(false);
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
      submitted={submitted}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      handleClickSubmit={handleClickSubmit}
    />
  );
}

export { Invite };
