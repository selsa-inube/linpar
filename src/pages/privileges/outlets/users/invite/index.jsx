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

  const validations = {
    name: (value) => /(^[a-zA-Z])|(\s+[a-zA-Z])/g.test(value),
    id: (value) => /^\d/g.test(value),
    phone: (value) => /^\d{10}/g.test(value),
    email: (value) =>
      /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(value),
  };

  const changeStatus = (event, state) => {
    const { name, value } = event.target;
    return setInvitation((prevInvitation) => ({
      ...prevInvitation,
      [name]: { value, state },
    }));
  };

  const runValidations = (event) => {
    const isValid = validations[event.target.name](event.target.value);
    changeStatus(event, isValid ? "valid" : "invalid");
  };

  const handleChange = (event) => {
    changeStatus(event, "pending");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    Object.values(invitation).forEach((invitation) => {
      if (invitation.state === "pending" || invitation.value === "")
        return (invitation.state = "invalid");
    });

    if (Object.values(invitation).some((prop) => prop.state === "invalid")) {
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
      state={invitation}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleCloseSectionMessage={handleCloseSectionMessage}
      runValidations={runValidations}
    />
  );
}

export { Invite };
