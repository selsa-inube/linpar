import { MdClear } from "react-icons/md";
import { Stack, Text, Icon, useMediaQuery } from "@inube/design-system";
import { StyledPopup } from "./styles";
import { PopupProps } from "./types";

const Popup = (props: PopupProps) => {
  const { title, closeModal, children } = props;

  const { "(max-width: 350px)": mobile } = useMediaQuery("(max-width: 350px)");

  const width = mobile ? "280px" : "320px";
  const padding = mobile ? "s200 s0 s200 s200" : "s300 s100 s300 s300";
  return (
    <StyledPopup>
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
