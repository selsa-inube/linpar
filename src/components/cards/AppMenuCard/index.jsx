import { Link } from "react-router-dom";
import { Text } from "../../data/Text";
import { Stack } from "../../layout/Stack";

import { StyledAppMenuCard, StyledIcon } from "./styles";

function AppMenuCard(props) {
  const { icon, label, description, url } = props;

  return (
    <Link to={url}>
      <StyledAppMenuCard>
        <Stack spacing="4" align="center">
          <StyledIcon> {icon} </StyledIcon>
          <Text align="center" typoToken="titleLarge">
            {" "}
            {label}{" "}
          </Text>
          <Text align="center"> {description} </Text>
        </Stack>
      </StyledAppMenuCard>
    </Link>
  );
}

export { AppMenuCard };
