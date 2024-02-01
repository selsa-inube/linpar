import { MdClear } from "react-icons/md";
import { Stack, Text, Icon, useMediaQuery, inube } from "@inube/design-system";
import { StyledPopup } from "./styles";
import { PopupProps } from "./types";

const Popup = (props: PopupProps) => {
  const { title, closeModal, children, category } = props;

  let width = document.getElementById(category)
    ? Math.max(
        Math.min(
          document.getElementById(category).getBoundingClientRect().right -
            document
              .getElementById(category)
              ?.lastChild?.getBoundingClientRect().left,
          350
        ),
        312
      ) + "px"
    : "350px";

  const tablet = useMediaQuery("(max-width: 850px)");

  const padding = tablet ? "s200 s050 s200 s150" : "s300 s100 s300 s300";
  width = tablet
    ? `calc(${width} - 2 * ${inube.spacing.s200})`
    : `calc(${width} - 2 * ${inube.spacing.s300})`;
  console.log();

  return (
    <StyledPopup tablet={tablet}>
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
