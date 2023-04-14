import { useState, useEffect } from "react";
import { InviteUI } from "./interface";

function Invite() {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);
  const [paused, setPaused] = useState(false);
  const [started, setStarted] = useState(false);
  const [invitation, setInvitation] = useState({
    name: { value: "", isInvalid: true },
    id: { value: "", isInvalid: true },
    phone: { value: "", isInvalid: true },
    email: { value: "", isInvalid: true },
  });

  const SHOW_MESSAGE_TIMEOUT = 10000;
  const LOADING_TIMEOUT = 2500;

  const [timeMessage, setTimeMessage] = useState(SHOW_MESSAGE_TIMEOUT);

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
      setTimeout(() => setShowMessage(true), SHOW_MESSAGE_TIMEOUT);
    }, LOADING_TIMEOUT);
  };

  function handleHideSectionMessage() {
    setShowMessage(false);
    setTimeMessage(0);
  }

  useEffect(() => {
    let intervalId = null;
    if (!paused && started) {
      intervalId = setInterval(() => {
        setTimeMessage((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(intervalId);
            return 0;
          }
          return prevTime - 4;
        });
      }, 1);
    }
    return () => clearInterval(intervalId);
  }, [paused, started]);

  const handleStartMessage = () => {
    if (!started) {
      setStarted(true);
    }
  };

  const handlePauseMessage = () => {
    setPaused((prevPaused) => !prevPaused);
  };

  return (
    <InviteUI
      loading={loading}
      showMessage={showMessage}
      invitation={invitation}
      formInvalid={formInvalid}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      MessageTimer={SHOW_MESSAGE_TIMEOUT}
      handleHideSectionMessage={handleHideSectionMessage}
      timeMessage={timeMessage}
      handlePauseMessage={handlePauseMessage}
      handleStartMessage={handleStartMessage}
    />
  );
}

export { Invite };
