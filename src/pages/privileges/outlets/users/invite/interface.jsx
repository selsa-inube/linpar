import {
  StyledPageUsers,
  StyledFormContainer,
  StyledSpinner,
  StyledMessage,
} from "./styles";
import { Breadcrumbs } from "../../../../../components/navigation/Breadcrumbs";
import { PageTitle } from "../../../../../components/PageTitle";
import { messageInvitationSent } from "../../../../../mocks/apps/messagesCards.mock";
import { usersInvitations } from "../../../../../mocks/apps/usersInvitations.mock";
import { Input } from "../../../../../components/inputs/Input";
import { Stack } from "../../../../../components/layout/Stack";
import { Button } from "../../../../../components/inputs/Button";
import { MdOutlineShortcut } from "react-icons/md";
import { Spinner } from "../../../../../components/feedback/Spinner";
import { SectionMessage } from "../../../../../components/feedback/SectionMessage";
import { Text } from "../../../../../components/data/Text";

function InviteUI(props) {
  const {
    loading,
    showMessage,
    inputsState,
    handleInputChange,
    handleSubmit,
    submitted,
    handleClickSubmit,
  } = props;

  function renderMessages() {
    let messageIndex = -1;

    if (showMessage) {
      messageIndex = 0;
    } else if (
      (inputsState.inputName.valid ||
        inputsState.inputId.valid ||
        inputsState.inputNumber.valid ||
        inputsState.inputMail.valid) &&
      submitted
    ) {
      messageIndex = 1;
    }

    if (messageIndex === -1) {
      return null;
    }

    return (
      <StyledMessage>
        <SectionMessage
          title={messageInvitationSent[messageIndex].title}
          description={
            messageIndex === 0 ? (
              <>
                {messageInvitationSent[messageIndex].description}
                <br />
                <Text typoToken="labelLarge">
                  {inputsState.inputName.value}
                </Text>
              </>
            ) : (
              messageInvitationSent[messageIndex].description
            )
          }
          icon={messageInvitationSent[messageIndex].icon}
          appearance={messageInvitationSent[messageIndex].appearance}
        />
      </StyledMessage>
    );
  }

  return (
    <StyledPageUsers>
      <Stack spacing={48}>
        <Stack spacing={32}>
          <Breadcrumbs route={usersInvitations[0].route} />
          <PageTitle
            title={usersInvitations[0].title}
            icon={usersInvitations[0].icon}
            description={usersInvitations[0].description}
          />
        </Stack>
        <form onSubmit={handleSubmit}>
          <Stack spacing={32} align="end">
            <StyledFormContainer>
              <Stack>
                <Input
                  label="Nombre (Requerido)"
                  placeholder="Ingresa su nombre completo"
                  handleChange={(e) =>
                    handleInputChange(
                      "inputName",
                      e.target.value,
                      !e.target.validity.valid
                    )
                  }
                  value={inputsState.inputName.value}
                  isRequired={true}
                  type="text"
                  isInvalid={inputsState.inputName.valid && submitted}
                  errorMessage="Este campo no puede estar vacío"
                  isDisabled={loading && true}
                  size="compact"
                ></Input>
              </Stack>
              <Stack>
                <Input
                  label="Identificación (Requerido)"
                  placeholder="Ingrese su número de identificación"
                  handleChange={(e) =>
                    handleInputChange(
                      "inputId",
                      e.target.value,
                      !e.target.validity.valid
                    )
                  }
                  value={inputsState.inputId.value}
                  isRequired={true}
                  type="number"
                  isInvalid={inputsState.inputId.valid && submitted}
                  errorMessage="Este campo debe contener un número de identificación"
                  isDisabled={loading && true}
                  size="compact"
                ></Input>
              </Stack>
              <Stack>
                <Input
                  label="Número de teléfono (Requerido)"
                  placeholder="Ingrese su número telefónico"
                  handleChange={(e) =>
                    handleInputChange(
                      "inputNumber",
                      e.target.value,
                      !e.target.validity.valid
                    )
                  }
                  value={inputsState.inputNumber.value}
                  isRequired={true}
                  type="number"
                  isInvalid={inputsState.inputNumber.valid && submitted}
                  errorMessage="Este campo debe tener un número de teléfono"
                  isDisabled={loading && true}
                  size="compact"
                ></Input>
              </Stack>
              <Stack>
                <Input
                  label="Correo (Requerido)"
                  placeholder="Ingrese su dirección de correo electrónico"
                  handleChange={(e) =>
                    handleInputChange(
                      "inputMail",
                      e.target.value,
                      !e.target.validity.valid
                    )
                  }
                  value={inputsState.inputMail.value}
                  isRequired={true}
                  type="email"
                  isInvalid={inputsState.inputMail.valid && submitted}
                  errorMessage="Este campo debe tener una dirección de correo electrónico válida"
                  isDisabled={loading && true}
                  size="compact"
                ></Input>
              </Stack>
            </StyledFormContainer>
            <Button
              type="submitted"
              appearance="confirm"
              iconBefore={!loading && <MdOutlineShortcut size={18} />}
              handleClick={() => handleClickSubmit(true)}
            >
              {loading ? (
                <StyledSpinner>
                  <Spinner />
                </StyledSpinner>
              ) : (
                "Enviar"
              )}
            </Button>
          </Stack>
        </form>
      </Stack>
      {renderMessages()}
    </StyledPageUsers>
  );
}

export { InviteUI };
