import { useState } from "react";
import { EventsFormUI } from "./interface";

const LOADING_TIMEOUT = 1500;

function EventsForm(props) {
  const {
    currentEvents,
    handleSubmit,
    withSubmitButtons,
    onHasChanges,
    validateDataReset,
  } = props;
  const [events, setEvents] = useState(currentEvents);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    visible: false,
    type: "",
  });

  const hasChanges = (valueCompare) =>
    JSON.stringify(currentEvents) !== JSON.stringify(valueCompare);

  const handleChangeEvents = (events) => {
    onHasChanges(hasChanges(events));
    setEvents(events);
    if (!withSubmitButtons) handleSubmit(events);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(events);
      setIsLoading(false);
      setMessage({
        visible: true,
        type: "success",
      });
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setEvents(currentEvents);
    validateDataReset(true);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
      type: "",
    });
  };

  return (
    <EventsFormUI
      handleChangeEvents={handleChangeEvents}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      currentEvents={currentEvents}
      events={events}
      withSubmitButtons={withSubmitButtons}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
    />
  );
}

export { EventsForm };
