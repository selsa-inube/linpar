import { useState } from "react";
import { StyledPageUsers, StyledFormContainer, StyledSpinner } from "./styles";
import { Breadcrumbs } from "../../../../../components/navigation/Breadcrumbs";
import { PageTitle } from "../../../../../components/PageTitle";
import { usersInvitations } from "../../../../../mocks/apps/usersInvitations.mock";
import { Input } from "../../../../../components/inputs/Input";
import { Stack } from "../../../../../components/layout/Stack";
import { Button } from "../../../../../components/inputs/Button";
import {
  MdOutlineShortcut,
  MdThumbUpOffAlt,
  MdErrorOutline,
} from "react-icons/md";
import { Spinner } from "../../../../../components/feedback/Spinner";
import { SectionMessage } from "../../../../../components/feedback/SectionMessage";

function Invite() {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [inputName, setInputName] = useState("");
  const [inputNameInvalid, setInputNameInvalid] = useState(true);

  const [inputId, setInputId] = useState("");
  const [inputIdInvalid, setInputIdInvalid] = useState(true);

  const [inputNumber, setInputNumber] = useState("");
  const [inputNumberInvalid, setInputNumberInvalid] = useState(true);

  const [inputMail, setInputMail] = useState("");
  const [inputMailInvalid, setInputMailInvalid] = useState(true);

  const handleNameChange = (event) => {
    setInputName(event.target.value);
    setInputNameInvalid(!event.target.validity.valid);
  };

  const handleIdChange = (event) => {
    setInputId(event.target.value);
    setInputIdInvalid(!event.target.validity.valid);
  };

  const handleNumberChange = (event) => {
    setInputNumber(event.target.value);
    setInputNumberInvalid(!event.target.validity.valid);
  };

  const handleMailChange = (event) => {
    setInputMail(event.target.value);
    setInputMailInvalid(!event.target.validity.valid);
  };

  const handleSubmit = (event) => {
    const showMessageTimeout = 5000;
    const loadingTimeout = 2500;

    event.preventDefault();
    setLoading(true);
    setSubmitted(false);
    setTimeout(() => {
      setLoading(false);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), showMessageTimeout);
    }, loadingTimeout);
  };

  function renderMessages() {
    if (showMessage) {
      return (
        <SectionMessage
          title="¡Envío exitoso!"
          description={
            <>
              Hemos enviado con éxito la invitación al usuario <br />
              {inputName}
            </>
          }
          icon={<MdThumbUpOffAlt size={18} />}
          appearance="confirm"
        />
      );
    }

    if (
      (inputNameInvalid ||
        inputIdInvalid ||
        inputNumberInvalid ||
        inputMailInvalid) &&
      submitted
    ) {
      return (
        <SectionMessage
          title="¡Uy, algo salió mal!"
          description={
            <>Algunos de los campos tienen errores intente nuevamente</>
          }
          icon={<MdErrorOutline size={18} />}
          appearance="remove"
        />
      );
    }
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
                  handleChange={handleNameChange}
                  value={inputName}
                  isRequired={true}
                  type="text"
                  isInvalid={inputNameInvalid && submitted}
                  errorMessage="Este campo no puede estar vacío"
                  isDisabled={loading && true}
                  size="compact"
                ></Input>
              </Stack>
              <Stack>
                <Input
                  label="Identificación (Requerido)"
                  placeholder="Ingrese su número de identificación"
                  handleChange={handleIdChange}
                  value={inputId}
                  isRequired={true}
                  type="number"
                  isInvalid={inputIdInvalid && submitted}
                  errorMessage="Este campo debe contener un número de identificación"
                  isDisabled={loading && true}
                  size="compact"
                ></Input>
              </Stack>
              <Stack>
                <Input
                  label="Número de teléfono (Requerido)"
                  placeholder="Ingrese su número telefónico"
                  handleChange={handleNumberChange}
                  value={inputNumber}
                  isRequired={true}
                  type="number"
                  isInvalid={inputNumberInvalid && submitted}
                  errorMessage="Este campo debe tener un número de teléfono"
                  isDisabled={loading && true}
                  size="compact"
                ></Input>
              </Stack>
              <Stack>
                <Input
                  label="Correo (Requerido)"
                  placeholder="Ingrese su dirección de correo electrónico"
                  handleChange={handleMailChange}
                  value={inputMail}
                  isRequired={true}
                  type="email"
                  isInvalid={inputMailInvalid && submitted}
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
              handleClick={() => setSubmitted(true)}
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

export { Invite };
