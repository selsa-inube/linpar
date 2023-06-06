import { useState } from "react";
import { EventsFormUI } from "./interface";

const LOADING_TIMEOUT = 1500;

function EventsForm(props) {
  const { currentEvents, handleSubmit, withSubmitButtons } = props;
  const [events, setEvents] = useState(currentEvents);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeEvents = (events) => {
    setEvents(events);
    if (!withSubmitButtons) handleSubmit(events);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(events);
      setIsLoading(false);
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setEvents(currentEvents);
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
    />
  );
}

export { EventsForm };
