import { Breadcrumbs, Stack, Tabs, useMediaQuery } from "@inube/design-system";
import { PageTitle } from "../../../../../components/PageTitle";
import { editUserOptionsConfig } from "./config/editUser.config";
import { editUserTabsConfig } from "./config/editUserTabs.config";
import { StyledContainer } from "./styles";
import { GeneralInformation } from "./tabs/generalInformation";

function EditUserUI(props) {
  const { isSelected, handleTabChange } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  return (
    <StyledContainer smallScreen={smallScreen}>
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs route={editUserOptionsConfig[0].url} />
          <PageTitle
            title={editUserOptionsConfig[0].label}
            icon={editUserOptionsConfig[0].icon}
            description={editUserOptionsConfig[0].description}
          />
        </Stack>
        <Stack gap="32px" direction="column">
          <Tabs
            tabs={Object.values(editUserTabsConfig)}
            selectedTab={isSelected}
            handleSelectedTab={handleTabChange}
          />
          <Stack justifyContent="space-between" alignItems="center">
            {smallScreen && (
              <Stack>
                <MdOutlineMoreHoriz size={24} cursor="pointer" />
              </Stack>
            )}
          </Stack>
          {isSelected === editUserTabsConfig.generalInformation.id && (
            <GeneralInformation />
          )}
        </Stack>
      </Stack>
    </StyledContainer>
  );
}

export { EditUserUI };
