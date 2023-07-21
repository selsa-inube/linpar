import { FormButtons } from "@components/forms/submit/FormButtons";
import { AssignmentForm } from "@components/forms/templates/AssignmentForm";
import { SectionMessage } from "@src/components/feedback/SectionMessage";
import { assignmentFormMessages } from "../../config/messages.config";

const renderMessage = (message, onCloseSectionMessage) => {
  if (!message.visible) {
    return null;
  }

  const { title, description, icon, appearance } =
    assignmentFormMessages[message.type];

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

function ProjectsFormUI(props) {
  const {
    projects,
    isLoading,
    handleSubmitForm,
    handleReset,
    handleChangeProjects,
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
          disabledButtons={!hasChanges(projects)}
          handleSubmit={handleSubmitForm}
          handleReset={handleReset}
          isLoading={isLoading}
        >
          <AssignmentForm
            handleChange={handleChangeProjects}
            entries={projects}
            title="Seleccione los proyectos que desea asignar"
          />
        </FormButtons>
        {renderMessage(message, onCloseSectionMessage)}
      </>
    );
  }

  return (
    <AssignmentForm
      handleChange={handleChangeProjects}
      entries={projects}
      title="Seleccione los proyectos que desea asignar"
      readOnly={readOnly}
    />
  );
}

export { ProjectsFormUI };
