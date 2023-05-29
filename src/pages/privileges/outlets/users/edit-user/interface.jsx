import { PageTitle } from "@components/PageTitle";
import { Breadcrumbs, Stack, Tabs, useMediaQuery } from "@inube/design-system";
import { editUserOptionsConfig } from "./config/editUser.config";
import { editUserTabsConfig } from "./config/editUserTabs.config";
import { BranchesForm } from "./forms/BranchesForm";
import { StyledContainer } from "./styles";

function EditUserUI(props) {
  const { isSelected, handleTabChange } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  return (
    <StyledContainer smallScreen={smallScreen}>
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs route={editUserOptionsConfig.editUserPage.url} />
          <PageTitle
            title={editUserOptionsConfig.editUserPage.label}
            icon={editUserOptionsConfig.editUserPage.icon}
            description={editUserOptionsConfig.editUserPage.description}
          />
        </Stack>
        <Stack gap="32px" direction="column">
          <Tabs
            tabs={Object.values(editUserTabsConfig)}
            selectedTab={isSelected}
            handleSelectedTab={handleTabChange}
          />
          {isSelected === editUserTabsConfig.branches.id && (
            <BranchesForm allowSubmit />
          )}
        </Stack>
      </Stack>
    </StyledContainer>
  );
}

export { EditUserUI };
