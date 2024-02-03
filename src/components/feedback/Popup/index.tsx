import { MdClear } from "react-icons/md";
import { Stack, Text, Icon, useMediaQuery, inube } from "@inube/design-system";
import { StyledPopup } from "./styles";
import { PopupProps } from "./types";

const Popup = (props: PopupProps) => {
  const { title, closeModal, children, fieldsetRef } = props;

  const tablet = useMediaQuery("(max-width: 850px)");

  let width: number | string =
    fieldsetRef.current?.getBoundingClientRect()?.right -
    fieldsetRef.current?.lastChild?.getBoundingClientRect()?.left -
    1.5;
  width = width -= tablet
    ? 2 * Number(inube.spacing.s200.split("px")[0])
    : 2 * Number(inube.spacing.s300.split("px")[0]);

  width = Math.min(width, 271);
  width = Math.max(width, 244);

  const width2 =
    width +
    (tablet
      ? 2 * Number(inube.spacing.s200.split("px")[0])
      : 2 * Number(inube.spacing.s300.split("px")[0]));

  width += tablet
    ? (Number(inube.spacing.s200.split("px")[0]) - 4) / 2 + 4
    : (Number(inube.spacing.s300.split("px")[0]) - 8) / 2 + 8;

  width = width + "px";

  let position: number | string =
    (fieldsetRef.current?.getBoundingClientRect()?.left +
      fieldsetRef.current?.getBoundingClientRect()?.right) /
      2 -
    width2 / 2 -
    fieldsetRef.current?.lastChild?.getBoundingClientRect()?.left -
    1.5;
  position = position + "px";

  const padding = tablet ? "s200 s075 s200 s200" : "s300 s100 s300 s300";

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
