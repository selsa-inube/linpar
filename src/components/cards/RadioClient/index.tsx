import { Text } from "@inube/design-system";
import { StyledRadioClient, StyledRadio, StyledImage } from "./styles";

interface RadioClientProps {
  name: string;
  id: number;
  value: string;
  label: string;
  logo: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

function RadioClient(props: RadioClientProps) {
  const { name, id, value, label, logo, handleChange } = props;

  return (
    <StyledRadioClient>
      <StyledRadio
        type="radio"
        name={name}
        id={id.toString()}
        value={value}
        onChange={handleChange}
      />
      <Text typo="bodyMedium">{label}</Text>
      <StyledImage src={logo} alt="Logo de empresa" />
    </StyledRadioClient>
  );
}

export { RadioClient };
export type { RadioClientProps };
