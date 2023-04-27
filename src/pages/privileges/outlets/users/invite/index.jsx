import { useState } from "react";
import { InviteUI } from "./interface";

function Invite() {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);

  const [invitation, setInvitation] = useState({
    name: { value: "", state: "pending" },
    id: { value: "", state: "pending" },
    phone: { value: "", state: "pending" },
    email: { value: "", state: "pending" },
  });

  const LOADING_TIMEOUT = 2500;

  const itertationInvitation = Object.values(invitation);

  const isAlphabetical = (value) => /(^[a-zA-Z])|(\s+[a-zA-Z])/g.test(value);

  const isEmail = (value) =>
    /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(value);

  const isPhone = (value) => /^\d{10}/g.test(value);

  const isNumber = (value) => /^\d/g.test(value);

  const changeStatus = (event, state) => {
    const { name, value } = event.target;
    return setInvitation((prevInvitation) => ({
      ...prevInvitation,
      [name]: { value, state },
    }));
  };

  const handleChange = (event) => {
    changeStatus(event, "pending");
  };

  const handleFocus = (event) => {
    itertationInvitation.forEach((invitation) => {
      if (invitation.state === "invalid") {
        return changeStatus(event, "invalid");
      }
      changeStatus(event, "pending");
    });
  };

  const handleBlurText = (event) => {
    const isValid = isAlphabetical(event.target.value);
    changeStatus(event, isValid ? "valid" : "invalid");
  };

  const handleBlurEmail = (event) => {
    const isValid = isEmail(event.target.value);
    changeStatus(event, isValid ? "valid" : "invalid");
  };

  const handleBlurNumber = (event) => {
    const isValid = isNumber(event.target.value);
    changeStatus(event, isValid ? "valid" : "invalid");
  };

  const handleBlurPhone = (event) => {
    const isValid = isPhone(event.target.value);
    changeStatus(event, isValid ? "valid" : "invalid");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    itertationInvitation.forEach((invitation) => {
      if (invitation.state === "pending" || invitation.value === "")
        return (invitation.state = "invalid");
    });

    if (itertationInvitation.some((prop) => prop.state === "invalid")) {
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
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleCloseSectionMessage={handleCloseSectionMessage}
      handleFocus={handleFocus}
      handleBlurText={handleBlurText}
      handleBlurEmail={handleBlurEmail}
      handleBlurNumber={handleBlurNumber}
      handleBlurPhone={handleBlurPhone}
      state={invitation}
    />
  );
}

export { Invite };
