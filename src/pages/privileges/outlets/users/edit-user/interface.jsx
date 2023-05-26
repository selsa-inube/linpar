import { Breadcrumbs, Stack, Tabs, useMediaQuery } from "@inube/design-system";
import { PageTitle } from "../../../../../components/PageTitle";
import { editUserOptionsConfig } from "./config/editUser.config";
import { editUserTabsConfig } from "./config/editUserTabs.config";
import { StyledContainer } from "./styles";
import { GeneralInformation } from "./tabs/generalInformation";
import { SubjectCard } from "../../../../../components/cards/SubjectCard";

function EditUserUI(props) {
  const { isSelected, handleTabChange, user } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  return (
    <StyledContainer smallScreen={smallScreen}>
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs route={editUserOptionsConfig.editUserPage.url} />
          <Stack justifyContent="space-between" alignItems="center" gap="49px">
            <PageTitle
              title={editUserOptionsConfig.editUserPage.label}
              icon={editUserOptionsConfig.editUserPage.icon}
              description={editUserOptionsConfig.editUserPage.description}
            />
            <SubjectCard subjectData={user} title="Informacion del usuario" />
          </Stack>
        </Stack>
        <Stack gap="32px" direction="column">
          <Tabs
            tabs={Object.values(editUserTabsConfig)}
            selectedTab={isSelected}
            handleSelectedTab={handleTabChange}
          />
          {isSelected === editUserTabsConfig.generalInformation.id && (
            <GeneralInformation />
          )}
        </Stack>
      </Stack>
    </StyledContainer>
  );
}

export { EditUserUI };
