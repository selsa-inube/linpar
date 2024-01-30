import { MdClear } from "react-icons/md";
import { Stack, Text, Icon, useMediaQueries } from "@inube/design-system";
import { StyledPopup } from "./styles";
import { PopupProps } from "./types";

const Popup = (props: PopupProps) => {
  const { title, closeModal, children } = props;

  const { "(max-width: 361px)": mobile, "(max-width: 755px)": tablet } =
    useMediaQueries(["(max-width: 361px)", "(max-width: 755px)"]);

  const width = tablet ? "276px" : "318px";
  const padding = tablet ? "s200 s050 s200 s200" : "s300 s100 s300 s300";
  return (
    <StyledPopup mobile={mobile} tablet={tablet}>
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
