import { Icon } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@inubekit/hooks";
import { Text } from "@inubekit/text";

interface PageTitleProps {
  title: string;
  icon?: JSX.Element;
  description: string;
  navigatePage?: string;
}

function PageTitle(props: PageTitleProps) {
  const { title, icon, description, navigatePage } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");
  const navigate = useNavigate();

  return (
    <>
      <Stack gap="8px" direction="column">
        <Stack gap="8px" alignItems="center">
          {icon ? (
            <Icon
              appearance="dark"
              cursorHover={true}
              icon={icon}
              spacing="narrow"
              size="20px"
            />
          ) : (
            <Icon
              appearance="dark"
              cursorHover={true}
              icon={<MdArrowBack />}
              spacing="narrow"
              size="20px"
              onClick={() =>
                navigatePage ? navigate(navigatePage) : navigate(-1)
              }
            />
          )}
          <Text as="h1" type="title" size={smallScreen ? "medium" : "large"}>
            {title}
          </Text>
        </Stack>
        <Text appearance="gray" size={smallScreen ? "small" : "medium"}>
          {description}
        </Text>
      </Stack>
    </>
  );
}

export { PageTitle };
export type { PageTitleProps };
