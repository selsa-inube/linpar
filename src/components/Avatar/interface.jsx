import { Text } from "../data/Text";
import { Stack } from "../layout/Stack";

import { StyledAvatar, StyledAvatarText, StyledAvatarIcon } from "./styles";

import avatar from "../../assets/images/avatar.png";

function AvatarUI(props) {
  const { username, businessName } = props;
  return (
    <StyledAvatar>
      <Stack direction="row" spacing="16" align="center">
        <StyledAvatarText>
          <Stack align="center">
            <Text>{username}</Text>
            <Text typoToken="bodySmall">{businessName}</Text>
          </Stack>
        </StyledAvatarText>
        <StyledAvatarIcon src={avatar} alt="" />
      </Stack>
    </StyledAvatar>
  );
}

export { AvatarUI };
