import { Text } from "../../data/Text";
import { StyledTab } from "./styles";

function Tab(props) {
  const { id, title, isActive, handleTabChange } = props;

  return (
    <StyledTab isActive={isActive} onClick={() => handleTabChange(id)}>
      <Text typoToken="labelMedium" colorToken={isActive}>
        {title}
      </Text>
    </StyledTab>
  );
}

export { Tab };
