import { AssignmentForm } from "@components/forms/templates/AssignmentForm";

import {
  IAssignmentFormEntry,
  IMessageState,
} from "@pages/privileges/outlets/users/types/forms.types";

interface InitializerFormUIProps {
  dataOptionsForms: IAssignmentFormEntry[];
  isLoading: boolean;
  // handleSubmitForm: () => void;
  handleReset: () => void;
  handleChangeInitializerForm: (
    dataOptionsForms: IAssignmentFormEntry[]
  ) => void;
  withSubmitButtons?: boolean;
  message: IMessageState;
  onCloseSectionMessage: () => void;
  hasChanges: (valueCompare: IAssignmentFormEntry[]) => boolean;
  readOnly?: boolean;
  setChangedData?: (changeData: IAssignmentFormEntry[]) => void;
  changeData?: IAssignmentFormEntry[];
}

export function InitializerFormUI(props: InitializerFormUIProps) {
  const {
    dataOptionsForms,
    // isLoading,
    // handleSubmitForm,

    handleChangeInitializerForm,
    withSubmitButtons,
    // message,
    // onCloseSectionMessage,
    // hasChanges,
    readOnly,
    setChangedData = () => {},
    changeData = [],
  } = props;

  if (withSubmitButtons) {
    return (
      <>
        {/* <FormButtons
          disabledButtons={!hasChanges(dataOptionsForms)}
          handleSubmit={handleSubmitForm}
          handleReset={handleReset}
          loading={isLoading}
        > */}
        <AssignmentForm
          handleChange={handleChangeInitializerForm}
          entries={dataOptionsForms}
          title="Seleccione las opciones que desea asignar:"
          setChangedData={setChangedData}
          changeData={changeData}
        />
        {/* </FormButtons>
        {message.visible && (
          <RenderMessage
            message={message}
            handleCloseMessage={onCloseSectionMessage}
            onMessageClosed={handleReset}
          />
        )} */}
      </>
    );
  }

  return (
    <AssignmentForm
      handleChange={handleChangeInitializerForm}
      entries={dataOptionsForms}
      title="Seleccione las opciones que desea asignar:"
      readOnly={readOnly}
    />
  );
}
