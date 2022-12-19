import { Text } from "../../data/Text";

import { StyledRadioClient, StyledRadio, StyledImage } from "./styles";

function RadioClient(props) {
  const { name, id, value, label, logo } = props;

  return (
    <StyledRadioClient>
      <StyledRadio
        type="radio"
        name={name}
        id={id}
        value={value}
        label={label}
      />
      <Text>{label}</Text>
      <StyledImage src={logo} alt="Logo de empresa" />
    </StyledRadioClient>
  );
}

export { RadioClient };
