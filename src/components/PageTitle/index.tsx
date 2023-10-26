import { Stack, Text, useMediaQuery, Icon } from "@inube/design-system";
import { useEffect } from "react";

import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

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
    <Stack>
      <Stack gap="8px" direction="column">
        <Stack gap="8px" alignItems="center">
          {icon ? (
            <Icon appearance="dark" size="24px" icon={icon} />
          ) : (
            <Icon
              icon={<MdArrowBack />}
              appearance="dark"
              size="24px"
              onClick={() =>
                navigatePage ? navigate(navigatePage) : navigate(-1)
              }
              cursorHover={true}
            />
          )}
          <Text as="h1" type="title" size={smallScreen ? "medium" : "large"}>
            {title}
          </Text>
        </Stack>
        <Text appearance="primary" size={smallScreen ? "small" : "medium"}>
          {description}
        </Text>
      </Stack>
    </Stack>
  );
}

export { PageTitle };
export type { PageTitleProps };
