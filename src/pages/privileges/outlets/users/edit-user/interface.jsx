import { PageTitle } from "@components/PageTitle";
import { SubjectCard } from "@components/cards/SubjectCard";
import { ItemNotFound } from "@components/layout/ItemNotFound";
import { Breadcrumbs, Stack, Tabs, useMediaQuery } from "@inube/design-system";
import { editUserOptionsConfig } from "./config/editUser.config";
import { editUserTabsConfig } from "./config/editUserTabs.config";
import { userNotFoundConfig } from "./config/itemNotFound.config";
import { StyledContainer } from "./styles";
import { EventsForm } from "./forms/EventsForm";
import { ProjectsForm } from "./forms/ProjectsForm";

function EditUserUI(props) {
  const { selectedTab, handleTabChange, user, editData, handleSubmit } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  const userCardData = user && {
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
            {selectedTab === editUserTabsConfig.events.id && (
              <EventsForm
                currentEvents={editData.events.entries}
                handleSubmit={handleSubmit}
                withSubmitButtons
              />
            )}
            {selectedTab === editUserTabsConfig.projects.id && (
              <ProjectsForm
                currentProjects={editData.projects.entries}
                handleSubmit={handleSubmit}
                withSubmitButtons
              />
            )}
          </Stack>
        ) : (
          <ItemNotFound
            image={userNotFoundConfig.image}
            title={userNotFoundConfig.title}
            description={userNotFoundConfig.description}
            buttonDescription={userNotFoundConfig.buttonDescription}
            route={userNotFoundConfig.route}
          />
        )}
      </Stack>
    </StyledContainer>
  );
}

export { EditUserUI };
