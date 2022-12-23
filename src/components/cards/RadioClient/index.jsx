import { Text } from "../../data/Text";

import { StyledRadioClient, StyledRadio, StyledImage } from "./styles";

function RadioClient(props) {
  const { name, id, value, label, logo, handleChange } = props;

  return (
    <StyledRadioClient>
      <StyledRadio
        type="radio"
        name={name}
        id={id}
        value={value}
        label={label}
        onChange={handleChange}
      />
      <Text>{label}</Text>
      <StyledImage src={logo} alt="Logo de empresa" />
    </StyledRadioClient>
  );
}

export { RadioClient };
