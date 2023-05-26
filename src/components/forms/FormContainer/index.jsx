import { StyledFormContainer, StyledSelect, StyledOption } from "./styles";
import { TextField, Text, Stack } from "@inube/design-system";
import { MdOutlineModeEdit } from "react-icons/md";

function FormContainer(props) {
  const { user, handleChange, isLoading, formInvalid, runValidations } = props;

  return (
    <StyledFormContainer>
      <TextField
        label="Nombre"
        placeholder="Enter your full name"
        name="name"
        id="name"
        type="text"
        size="compact"
        value={user.name.value}
        handleChange={(event) => handleChange(event, "name")}
        isDisabled={true}
        isFullWidth={true}
      />

      <TextField
        label="Identificación"
        placeholder="Enter your identification number"
        name="identification"
        id="identification"
        type="number"
        size="compact"
        value={user.identification.value}
        handleChange={(event) => handleChange(event, "identification")}
        isDisabled={true}
        isFullWidth={true}
      />

      <TextField
        label="Correo"
        placeholder="Enter your email address"
        name="email"
        id="email"
        type="email"
        size="compact"
        value={user.email.value}
        handleChange={(event) => handleChange(event, "email")}
        isFullWidth={true}
        iconAfter={<MdOutlineModeEdit size={18} />}
        isDisabled={isLoading && true}
        isInvalid={user.email.isInvalid && formInvalid}
        errorMessage="Este campo no puede estar vacío"
        validMessage="El correo electrónico es valido"
        handleBlur={runValidations}
        state={user.email.state}
      />

      <TextField
        label="Teléfono"
        placeholder="Enter your phone number"
        name="number"
        id="number"
        type="number"
        size="compact"
        value={user.number.value}
        handleChange={(event) => handleChange(event, "number")}
        isFullWidth={true}
        iconAfter={<MdOutlineModeEdit size={18} />}
        isDisabled={isLoading && true}
        isInvalid={user.number.isInvalid && formInvalid}
        errorMessage="Este campo no puede estar vacío o no contener 10 digitos"
        validMessage="El número de teléfono es valido"
        handleBlur={runValidations}
        state={user.number.state}
      />

      <Stack direction="column" gap="8px">
        <Text typo="labelMedium" padding="0px 0px 0px 16px">
          Cargo
        </Text>
        <StyledSelect
          value={user.rol.value}
          onChange={(event) => handleChange(event, "rol")}
          disabled={isLoading && true}
          isInvalid={user.rol.isInvalid && formInvalid}
          handleBlur={runValidations}
        >
          <StyledOption value="Diseñador">Diseñador</StyledOption>
          <StyledOption value="Desarrollador">Desarrollador Web</StyledOption>
          <StyledOption value="Product Manager">Product Manager</StyledOption>
        </StyledSelect>
      </Stack>
    </StyledFormContainer>
  );
}

export { FormContainer };
