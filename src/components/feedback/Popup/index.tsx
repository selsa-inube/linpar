import { MdClear } from "react-icons/md";

import { ThemeProvider } from "styled-components";
import { Icon, useMediaQuery, inube } from "@inube/design-system";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { StyledPopup } from "./styles";
import { PopupProps } from "./types";

const Popup = (props: PopupProps) => {
  const { title, closeModal, children, fieldsetRef } = props;

  const tablet = useMediaQuery("(max-width: 850px)");
  const fieldset = fieldsetRef?.current;
  const spacingValue = tablet ? inube.spacing.s200 : inube.spacing.s300;
  const spacingOffset = Number(spacingValue.split("px")[0]);
  const scrollWidth = tablet ? 4 : 8;
  let width: number | string;

  const fieldsetRect = fieldset?.getBoundingClientRect() || {
    left: 26,
    right: 338,
  };

  const lastChildRect = fieldset?.lastElementChild?.getBoundingClientRect() || {
    left: 34,
  };

  width = fieldsetRect.right - lastChildRect.left - 1.5 - 2 * spacingOffset;
  width = Math.min(width, 453);
  width = Math.max(width, 244);
  width += (spacingOffset - scrollWidth) / 2 + scrollWidth;
  width = width + "px";
  let position = String(-13.5 + "px");

  const padding = tablet ? "s200 s075 s200 s200" : "s300 s100 s300 s300";

  return (
    <StyledPopup $tablet={tablet} $position={position}>
      <Stack
        width={width}
        height="500px"
        padding={padding}
        direction="column"
        gap="20px"
      >
        <Stack alignItems="center" justifyContent="space-between">
          <ThemeProvider theme={inube}>
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
          </ThemeProvider>
        </Stack>
        {children}
      </Stack>
    </StyledPopup>
  );
};

export { Popup };
