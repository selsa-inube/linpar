import { useState } from "react";
import { InviteUI } from "./interface";

function Invite() {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [inputsState, setInputsState] = useState({
    inputName: { value: "", valid: true },
    inputId: { value: "", valid: true },
    inputNumber: { value: "", valid: true },
    inputMail: { value: "", valid: true },
  });

  const handleInputChange = (key, value, validity) => {
    setInputsState((prevInputsState) => ({
      ...prevInputsState,
      [key]: { value: value, valid: validity },
    }));
  };

  const handleClickSubmit = (event) => {
    setSubmitted(event);
  };

  const handleSubmit = (event) => {
    const showMessageTimeout = 5000;
    const loadingTimeout = 2500;

    event.preventDefault();
    setLoading(true);
    setSubmitted(false);
    setTimeout(() => {
      setLoading(false);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), showMessageTimeout);
    }, loadingTimeout);
  };

  return (
    <InviteUI
      loading={loading}
      showMessage={showMessage}
      inputsState={inputsState}
      submitted={submitted}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      handleClickSubmit={handleClickSubmit}
    />
  );
}

export { Invite };
