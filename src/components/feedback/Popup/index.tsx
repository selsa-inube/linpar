import { MdClear } from "react-icons/md";
import { Stack, Text, Icon, useMediaQuery, inube } from "@inube/design-system";
import { StyledPopup } from "./styles";
import { PopupProps } from "./types";

const Popup = (props: PopupProps) => {
  const { title, closeModal, children, fieldsetRef } = props;

  const tablet = useMediaQuery("(max-width: 850px)");

  let width: number | string =
    fieldsetRef.current?.getBoundingClientRect()?.right -
      fieldsetRef.current?.lastChild?.getBoundingClientRect()?.left || 319;
  width = Math.max(width, tablet ? 276 : 268);
  width = Math.min(width, 340);

  let position: number | string =
    (fieldsetRef.current?.getBoundingClientRect()?.left +
      fieldsetRef.current?.getBoundingClientRect()?.right) /
      2 -
      width / 2 -
      fieldsetRef.current?.lastChild?.getBoundingClientRect()?.left || 0;
  position = Math.min(position, 0);
  width -= tablet
    ? Number(inube.spacing.s200.split("px")[0])
    : Number(inube.spacing.s300.split("px")[0]);
  width = width + "px";
  position = position + "px";

  const padding = tablet ? "s200 s050 s200 s150" : "s300 s100 s300 s300";

  return (
    <StyledPopup tablet={tablet} position={position}>
      <Stack
        width={width}
        height="500px"
        padding={padding}
        direction="column"
        gap="20px"
      >
        <Stack alignItems="center" justifyContent="space-between">
          <Text type="headline" size="small" appearance="dark">
            {title}
          </Text>
          <Icon
            appearance={"dark"}
            icon={<MdClear />}
            spacing="wide"
            size="24px"
            cursorHover
            onClick={closeModal}
          />
        </Stack>
        {children}
      </Stack>
    </StyledPopup>
  );
};

export { Popup };
