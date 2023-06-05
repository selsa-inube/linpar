import { PageTitle } from "@components/PageTitle";
import { Breadcrumbs, Stack, Tabs, useMediaQuery } from "@inube/design-system";
import { editUserOptionsConfig } from "./config/editUser.config";
import { editUserTabsConfig } from "./config/editUserTabs.config";
import { StyledContainer } from "./styles";
import { GeneralInformation } from "./tabs/generalInformation";
import { SubjectCard } from "../../../../../components/cards/SubjectCard";
import { ItemNotFound } from "../../../../../components/layout/ItemNotFound";
import { userNotFoundConfig } from "./config/itemNotFound.config";

function EditUserUI(props) {
  const { selectedTab, handleTabChange, user } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  if (user) {
    var userCardData = {
      nombre: user.username,
      identificación: user.userID,
      codigo: user.code,
      rol: user.position,
    };
  }

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
            {user && (
              <SubjectCard
                subjectData={userCardData}
                title="Informacion del usuario"
              />
            )}
          </Stack>
        </Stack>
        {user ? (
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
        ) : (
          <ItemNotFound
            image={userNotFoundConfig.image}
            title={userNotFoundConfig.title}
            description={userNotFoundConfig.description}
            buttonDescription={userNotFoundConfig.buttonDescription}
          />
        )}
      </Stack>
    </StyledContainer>
  );
}

export { EditUserUI };
