import { FormButtons } from "@components/forms/submit/FormButtons";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";
import { SectionMessage } from "@src/components/feedback/SectionMessage";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "../../../types/forms.types";
import { assignmentFormMessages } from "../../config/messages.config";

const renderMessage = (
  message: IMessageState,
  onCloseSectionMessage: EventsFormUIProps["onCloseSectionMessage"]
) => {
  if (!message.visible || !message.type) {
    return null;
  }

  const { title, description, icon, appearance } =
    assignmentFormMessages[message.type as keyof typeof assignmentFormMessages];

  return (
    <SectionMessage
      title={title}
      description={description}
      icon={icon}
      appearance={appearance}
      duration={10000}
      closeSectionMessage={onCloseSectionMessage}
    />
  );
};

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
        {renderMessage(message, onCloseSectionMessage)}
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
