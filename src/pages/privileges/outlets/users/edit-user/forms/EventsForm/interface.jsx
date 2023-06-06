import { FormButtons } from "@components/forms/submit/FormButtons";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";

function EventsFormUI(props) {
  const {
    events,
    currentEvents,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangeEvents,
    withSubmitButtons,
  } = props;

  const hasChanges = JSON.stringify(currentEvents) === JSON.stringify(events);

  if (withSubmitButtons) {
    return (
      <FormButtons
        disabledButtons={hasChanges}
        handleSubmit={handleSubmitForm}
        handleReset={handleReset}
        isLoading={isLoading}
      >
        <AssignmentForm
          handleChange={handleChangeEvents}
          entries={events}
          title="Seleccione los eventos que desea asignar"
        />
      </FormButtons>
    );
  }

  return (
    <AssignmentForm
      handleChange={handleChangeEvents}
      entries={events}
      title="Seleccione los eventos que desea asignar"
    />
  );
}

export { EventsFormUI };
