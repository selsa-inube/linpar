import { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";

import { Tabs } from "@inubekit/tabs";
import { Button } from "@inubekit/button";

import { SubjectCard } from "@components/cards/SubjectCard";
import { PageTitle } from "@components/PageTitle";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@pages/privileges/outlets/users/types/forms.types";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { Stack } from "@inubekit/stack";
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
import { useMediaQueries } from "@inubekit/hooks";

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
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs crumbs={editPositionConfig[0].crumbs} />
          <Stack justifyContent="space-between" alignItems="center" gap="32px">
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
        <Stack gap="32px" direction="column">
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
        </Stack>
      </Stack>
    </StyledContainer>
  );
}
