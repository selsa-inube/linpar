import { EMessageType } from "@src/types/messages.types";
import { useState } from "react";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "../../../types/forms.types";
import { EventsFormUI } from "./interface";

const LOADING_TIMEOUT = 1500;
interface EventsFormProps {
  currentEvents: IAssignmentFormEntry[];
  handleSubmit: (events: IAssignmentFormEntry[]) => void;
  withSubmitButtons?: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
  readOnly?: boolean;
}

function EventsForm(props: EventsFormProps) {
  const {
    currentEvents,
    handleSubmit,
    withSubmitButtons,
    onHasChanges,
    readOnly,
  } = props;
  const [events, setEvents] = useState(currentEvents);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const hasChanges = (valueCompare: IAssignmentFormEntry[]) =>
    JSON.stringify(currentEvents) !== JSON.stringify(valueCompare);

  const handleChangeEvents = (events: IAssignmentFormEntry[]) => {
    setEvents(events);
    if (onHasChanges) onHasChanges(hasChanges(events));
    if (!withSubmitButtons) handleSubmit(events);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(events);
      setIsLoading(false);
      setMessage({
        visible: true,
        type: EMessageType.SUCCESS,
      });
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setEvents(currentEvents);
    if (onHasChanges) onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <EventsFormUI
      handleChangeEvents={handleChangeEvents}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      events={events}
      withSubmitButtons={withSubmitButtons}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
      readOnly={readOnly}
    />
  );
}

export { EventsForm };
export type { EventsFormProps };
