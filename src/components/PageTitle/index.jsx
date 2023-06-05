import { Stack, useMediaQuery } from "@inube/design-system";
import { Text } from "../data/Text";
import { StyledPageTitle, StyledIcon, StyledArrowIcon } from "./styles";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function PageTitle(props) {
  const { title, icon, description, navigatePage } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");
  const navigate = useNavigate();
  const navigateBackwards = -1;

  const handleBackPage = () => {
    if (navigatePage) return navigate(navigatePage);
    return navigate(navigateBackwards);
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

          <Text as="h1" typoToken={smallScreen ? "titleMedium" : "titleLarge"}>
            {title}
          </Text>
        </Stack>
        <Text
          colorToken="secondary"
          typoToken={smallScreen ? "bodySmall" : "bodyMedium"}
        >
          {description}
        </Text>
      </Stack>
    </StyledPageTitle>
  );
}

export { PageTitle };
