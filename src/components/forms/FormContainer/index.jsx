import { StyledFormContainer, StyledSelect } from "./styles";
import { TextField, Text, Stack } from "@inube/design-system";
import { MdOutlineModeEdit } from "react-icons/md";

function FormContainer(props) {
  const {
    user,
    handleFieldChange,
    isLoading,
    formInvalid,
    runValidations,
    isFieldModified,
  } = props;

  return (
    <StyledFormContainer>
      <TextField
        label="Nombre"
        placeholder="Enter your full name"
        name="name"
        id="name"
        type="text"
        size="compact"
        isFullWidth={true}
        value={user.name.value}
        handleChange={(event) => handleFieldChange(event, "name")}
        isDisabled={isFieldModified("name")}
        iconAfter={
          user.name.value !== "" ? "" : <MdOutlineModeEdit size={18} />
        }
        isInvalid={user.name.isInvalid && formInvalid}
        errorMessage="Este campo no puede estar vacío"
        validMessage="El correo electrónico es valido"
        handleBlur={runValidations}
        state={user.name.state}
      />

      <TextField
        label="Identificación"
        placeholder="Enter your identification number"
        name="identification"
        id="identification"
        type="number"
        size="compact"
        isFullWidth={true}
        value={user.identification.value}
        handleChange={(event) => handleFieldChange(event, "identification")}
        isDisabled={isFieldModified("identification")}
        iconAfter={
          user.identification.value !== "" ? (
            ""
          ) : (
            <MdOutlineModeEdit size={18} />
          )
        }
        isInvalid={user.identification.isInvalid && formInvalid}
        errorMessage="Este campo no puede estar vacío"
        validMessage="El correo electrónico es valido"
        handleBlur={runValidations}
        state={user.identification.state}
      />

      <TextField
        label="Correo"
        placeholder="Enter your email address"
        name="email"
        id="email"
        type="email"
        size="compact"
        value={user.email.value}
        handleChange={(event) => handleFieldChange(event, "email")}
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
        handleChange={(event) => handleFieldChange(event, "number")}
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
          onChange={(event) => handleFieldChange(event, "rol")}
          disabled={isLoading && true}
          isInvalid={user.rol.isInvalid && formInvalid}
          handleBlur={runValidations}
        >
          <option value="Diseñador">Diseñador</option>
          <option value="Desarrollador">Desarrollador Web</option>
          <option value="Product Manager">Product Manager</option>
          <option value=""></option>
        </StyledSelect>
      </Stack>
    </StyledFormContainer>
  );
}

export { FormContainer };
