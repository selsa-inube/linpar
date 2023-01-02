import { Text } from "../data/Text";
import { Stack } from "../layout/Stack";

import { StyledAvatar, StyledAvatarText, StyledAvatarIcon } from "./styles";

import avatar from "../../assets/images/avatar.png";

function Avatar() {
  return (
    <StyledAvatar>
      <Stack direction="row" spacing="16" align="center">
        <StyledAvatarText>
          <Stack align="center">
            <Text>Leonardo Garzón</Text>
            <Text typoToken="bodySmall">Fondoccidente</Text>
          </Stack>
        </StyledAvatarText>
        <StyledAvatarIcon src={avatar} alt="" />
      </Stack>
    </StyledAvatar>
  );
}

export { Avatar };
