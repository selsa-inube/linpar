import { Stack, Text, useMediaQuery } from "@inube/design-system";
import { StyledPageTitle, StyledIcon, StyledArrowIcon } from "./styles";
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

  const handleBackPage = () => {
    if (navigatePage) return navigate(navigatePage);
    return navigate(-1);
  };

  return (
    <StyledPageTitle>
      <Stack gap="8px" direction="column">
        <Stack gap="8px" alignItems="center">
          {icon ? (
            <StyledIcon> {icon} </StyledIcon>
          ) : (
            <StyledArrowIcon onClick={handleBackPage}>
              <MdArrowBack />
            </StyledArrowIcon>
          )}

          <Text as="h1" typo="title" size={smallScreen ? "medium" : "large"}>
            {title}
          </Text>
        </Stack>
        <Text
          appearance="primary"
          typo="body"
          size={smallScreen ? "small" : "medium"}
        >
          {description}
        </Text>
      </Stack>
    </StyledPageTitle>
  );
}

export { PageTitle };
export type { PageTitleProps };
