import { FormButtons } from "@components/forms/submit/FormButtons";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "../../../types/forms.types";
import { RenderMessage } from "@components/layout/RenderMessage";

interface EventsFormUIProps {
  events: IAssignmentFormEntry[];
  isLoading: boolean;
  handleSubmitForm: () => void;
  handleReset: () => void;
  handleChangeEvents: (events: IAssignmentFormEntry[]) => void;
  withSubmitButtons?: boolean;
  message: IMessageState;
  onCloseSectionMessage: () => void;
  hasChanges: (valueCompare: IAssignmentFormEntry[]) => boolean;
  readOnly?: boolean;
}

function EventsFormUI(props: EventsFormUIProps) {
  const {
    events,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangeEvents,
    withSubmitButtons,
    message,
    onCloseSectionMessage,
    hasChanges,
    readOnly,
  } = props;

  if (withSubmitButtons) {
    return (
      <>
        <FormButtons
          disabledButtons={!hasChanges(events)}
          handleSubmit={handleSubmitForm}
          handleReset={handleReset}
          loading={isLoading}
        >
          <AssignmentForm
            handleChange={handleChangeEvents}
            entries={events}
            title="Seleccione los eventos que desea asignar"
          />
        </FormButtons>
        {message.visible && (
          <RenderMessage
            message={message}
            handleCloseMessage={onCloseSectionMessage}
            onMessageClosed={handleReset}
          />
        )}
      </>
    );
  }

  return (
    <AssignmentForm
      handleChange={handleChangeEvents}
      entries={events}
      title="Seleccione los eventos que desea asignar"
      readOnly={readOnly}
    />
  );
}

export { EventsFormUI };
