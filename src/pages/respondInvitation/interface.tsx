import { Stack, TextField } from "@inube/design-system";
import { Fieldset } from "@src/components/inputs/Fieldset";
import {
  MdOutlinePhone,
  MdOutlineShield,
  MdPersonOutline,
} from "react-icons/md";

function RespondInvitationUI() {
  return (
    <Stack>
      <Stack direction="column"></Stack>
      <Stack direction="column">
        <Fieldset title="1" icon={<MdOutlinePhone />}>
          <TextField />
        </Fieldset>
        <Fieldset title="2" icon={<MdPersonOutline />}>
          <TextField />
        </Fieldset>
        <Fieldset title="3" icon={<MdOutlineShield />}>
          <TextField />
        </Fieldset>
      </Stack>
    </Stack>
  );
}

export { RespondInvitationUI };
