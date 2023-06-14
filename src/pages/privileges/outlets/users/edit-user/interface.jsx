import { PageTitle } from "@components/PageTitle";
import { Breadcrumbs, Stack, Tabs, useMediaQuery } from "@inube/design-system";
import { editUserOptionsConfig } from "./config/editUser.config";
import { editUserTabsConfig } from "./config/editUserTabs.config";
import { StyledContainer } from "./styles";
import { SubjectCard } from "@components/cards/SubjectCard";
import { ItemNotFound } from "@components/layout/ItemNotFound";
import { userNotFoundConfig } from "./config/itemNotFound.config";

import { BranchesForm } from "../edit-user/forms/BranchesForm";

function EditUserUI(props) {
  const { selectedTab, handleTabChange, user, editData, handleSubmit } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  const userCardData = user
    ? {
        nombre: user.username,
        identificación: user.userID,
        codigo: user.code,
        rol: user.position,
      }
    : null;

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
            {selectedTab === editUserTabsConfig.branches.id && (
              <BranchesForm
                currentBranches={editData.branches.entries}
                handleSubmit={handleSubmit}
                withSubmitButtons={true}
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
