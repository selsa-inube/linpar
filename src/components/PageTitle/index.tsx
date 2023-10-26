import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { Stack, Text, useMediaQuery } from "@inube/design-system";

import { StyledArrowIcon, StyledIcon } from "./styles";

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

  const handleBackPage = () => {
    if (navigatePage) return navigate(navigatePage);
    return navigate(-1);
  };

  return (
    <>
      <Stack gap="8px" direction="column">
        <Stack gap="8px" alignItems="center">
          {icon ? (
            <StyledIcon> {icon} </StyledIcon>
          ) : (
            <StyledArrowIcon onClick={handleBackPage}>
              <MdArrowBack />
            </StyledArrowIcon>
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
