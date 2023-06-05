import { PageTitle } from "@components/PageTitle";
import { Breadcrumbs, Stack, Tabs, useMediaQuery } from "@inube/design-system";
import { editUserOptionsConfig } from "./config/editUser.config";
import { editUserTabsConfig } from "./config/editUserTabs.config";
import { StyledContainer } from "./styles";
import { GeneralInformation } from "./tabs/generalInformation";
import { SubjectCard } from "../../../../../components/cards/SubjectCard";

function EditUserUI(props) {
  const { selectedTab, handleTabChange, user } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  const userCardData = {
    nombre: user.username,
    identificación: user.userID,
    codigo: user.code,
    rol: user.position,
  };

  return (
    <StyledContainer smallScreen={smallScreen}>
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs route={editUserOptionsConfig.editUserPage.url} />
          <Stack justifyContent="space-between" alignItems="center" gap="49px">
            <PageTitle
              title={editUserOptionsConfig.editUserPage.label}
              description={editUserOptionsConfig.editUserPage.description}
            />
            <SubjectCard
              subjectData={userCardData}
              title="Informacion del usuario"
            />
          </Stack>
        </Stack>
        <Stack gap="32px" direction="column">
          <Tabs
            tabs={Object.values(editUserTabsConfig)}
            selectedTab={selectedTab}
            handleSelectedTab={handleTabChange}
          />
          {selectedTab === editUserTabsConfig.generalInformation.id && (
            <GeneralInformation />
          )}
        </Stack>
      </Stack>
    </StyledContainer>
  );
}

export { EditUserUI };
