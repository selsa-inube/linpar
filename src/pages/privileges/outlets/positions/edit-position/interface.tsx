import { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import {
  Stack,
  useMediaQueries,
  inube,
  Breadcrumbs,
} from "@inube/design-system";
import { Tabs } from "@inubekit/tabs";
import { Button } from "@inubekit/button";

import { SubjectCard } from "@components/cards/SubjectCard";
import { RenderMessage } from "@components/feedback/RenderMessage";
import { PageTitle } from "@components/PageTitle";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@pages/privileges/outlets/users/types/forms.types";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";

import { StyledContainer, StyledContainerLoading } from "./styles";
import {
  editPositionCardLabels,
  editPositionConfig,
  editPositionTabsConfig,
} from "./config/editPosition.config";
import { IControlModal } from "./types";
import { GeneralInformationForm } from "../components/GeneralInformationForm";
import {
  IFormAddPosition,
  IHandleUpdateDataSwitchstep,
  IPosition,
} from "../add-position/types";
import { InitializerForm } from "../components/InitializerForm";

interface EditPositionUIProps {
  selectedTab: string;
  positionsEdit: IPosition;
  message: IMessageState;
  handleReset: () => void;
  editData: { [key: string]: { [key: string]: unknown } };
  controlModal: IControlModal;
  id: string;
  loading: boolean;
  handleTabChange: (tabId: string) => void;
  handleUpdateFormData: (values: IHandleUpdateDataSwitchstep) => void;
  handleSubmit: (values: IAssignmentFormEntry[]) => void;
  handleCloseModal: () => void;
  handleDataChange: (hasChanges: boolean) => void;
  handleContinueTab: () => void;
  formData: IFormAddPosition;
  onSubmit: () => void;
  onCloseSectionMessage: () => void;
  currentFormHasChanges: boolean;
  setCsOptionsChange: (csOptionsChange: IAssignmentFormEntry[]) => void;
  userCardData: { username: string; code: string | undefined };
  csOptionsChange: IAssignmentFormEntry[];
}

export function EditPositionUI(props: EditPositionUIProps) {
  const [key, setKey] = useState(0);
  const {
    currentFormHasChanges,
    handleReset,
    setCsOptionsChange,
    userCardData,
    handleUpdateFormData,
    onSubmit,
    onCloseSectionMessage,
    message,
    csOptionsChange,
    formData,
    selectedTab,
    id,
    loading,
    handleTabChange,
    handleDataChange,
  } = props;

  const { "(max-width: 580px)": smallScreen, "(max-width: 1073px)": typeTabs } =
    useMediaQueries(["(max-width: 580px)", "(max-width: 1073px)"]);

  const forceReRender = () => {
    setKey((prevKey) => prevKey + 1);
  };
  return loading ? (
    <StyledContainerLoading>
      <LoadingApp />
    </StyledContainerLoading>
  ) : (
    <StyledContainer $smallScreen={smallScreen} key={key}>
      <Stack gap={inube.spacing.s600} direction="column">
        <Stack gap={inube.spacing.s200} direction="column">
          <Breadcrumbs crumbs={editPositionConfig[0].crumbs} />
          <Stack
            justifyContent="space-between"
            alignItems="center"
            gap={inube.spacing.s400}
          >
            <PageTitle
              title="Editar un cargo"
              navigatePage="/privileges/positions"
              description="Describir la nueva información de cargo"
            />
            {userCardData && (
              <SubjectCard
                subjectData={userCardData}
                title="Informacion del cargo"
                icon={<TfiMenuAlt size={24} />}
                labels={editPositionCardLabels}
              />
            )}
          </Stack>
        </Stack>
        <Stack gap={inube.spacing.s400} direction="column">
          <Tabs
            tabs={Object.values(editPositionTabsConfig)}
            selectedTab={selectedTab}
            scroll={typeTabs ? true : false}
            onChange={handleTabChange}
          />
          {selectedTab === editPositionTabsConfig.generalInformation.id && (
            <GeneralInformationForm
              initialValues={formData.generalInformation.values}
              handleSubmit={handleUpdateFormData}
              onHasChanges={handleDataChange}
              id={id}
            />
          )}
          {selectedTab === editPositionTabsConfig.rolesPorCargos.id && (
            <InitializerForm
              onHasChanges={handleDataChange}
              dataOptionsForms={formData.rolesPorCargos.values}
              handleSubmit={handleUpdateFormData}
              changeData={csOptionsChange}
              setChangedData={setCsOptionsChange}
            />
          )}
          <Stack gap={"16px"} justifyContent="flex-end">
            <Button
              appearance="gray"
              disabled={!currentFormHasChanges}
              onClick={() => {
                handleReset();
                forceReRender();
              }}
              type="reset"
            >
              Cancelar
            </Button>
            <Button
              appearance="primary"
              disabled={!currentFormHasChanges}
              onClick={onSubmit}
              loading={loading}
              type="button"
            >
              Guardar
            </Button>
          </Stack>
          {message.visible && (
            <RenderMessage
              message={message}
              handleCloseMessage={onCloseSectionMessage}
              onMessageClosed={onCloseSectionMessage}
            />
          )}
        </Stack>
      </Stack>
    </StyledContainer>
  );
}
