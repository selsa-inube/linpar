import { Text } from "../../data/Text";
import { StyledContainer, StyledIcon, StyledText, StyledTitle } from "./styles";
import { MdClear } from "react-icons/md";

function SectionMessage(props) {
  const { icon, title, description, aspect } = props;

  return (
    <StyledContainer aspect={aspect}>
      <StyledIcon aspect={aspect}>{icon}</StyledIcon>
      <StyledText>
        <StyledTitle>
          <Text typoToken="labelLarge">{title} </Text>
          <MdClear />
        </StyledTitle>
        <Text typoToken="bodySmall">{description}</Text>
      </StyledText>
    </StyledContainer>
  );
}

export { SectionMessage };
