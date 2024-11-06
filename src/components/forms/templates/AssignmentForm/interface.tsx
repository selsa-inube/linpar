import { MdOutlineMoreHoriz, MdSearch } from "react-icons/md";
import { Text } from "@inubekit/text";
import { Textfield, Icon, inube } from "@inube/design-system";
import { Stack } from "@inubekit/stack";
import { Menu } from "@components/navigation/Menu";
import { IOption } from "@components/navigation/Menu/types";
import { Fieldset } from "@components/inputs/Fieldset";
import { Toggle } from "@inubekit/toggle";
import { Label } from "@inubekit/label";
import { Button } from "@inubekit/button";
import { useMediaQuery } from "@inubekit/hooks";
import { Grid } from "@inubekit/grid";

import {
  StyledEntriesContainer,
  StyledForm,
  StyledOptionsContainer,
  StyledToggle,
} from "./styles";
import { IEntry } from "./types";

interface AssignmentFormUIProps {
  title: string;
  filter: string;
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleToggleAllEntries: (allocate: boolean) => void;
  handleToggleEntry: (id: string) => void;
  entries: IEntry[];
  showMenu: boolean;
  handleToggleMenuInvitation: () => void;
  handleCloseMenuInvitation: () => void;
  menuOptions: IOption[];
  isAssignAll: boolean;
  readOnly?: boolean;
}

function AssignmentFormUI(props: AssignmentFormUIProps) {
  const {
    title,
    filter,
    handleFilter,
    handleToggleAllEntries,
    handleToggleEntry,
    entries,
    showMenu,
    handleToggleMenuInvitation,
    handleCloseMenuInvitation,
    menuOptions,
    isAssignAll,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 650px)");

  const filteredRows =
    entries &&
    entries.filter(
      (entry) =>
        entry.id.toLowerCase().includes(filter.toLowerCase()) ||
        entry.value.toLowerCase().includes(filter.toLowerCase())
    );
  const dataValidations =
    (entries && entries.length === 0) || typeof entries === "undefined";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const hasActiveEntries = entries.some((entry) => entry.isActive);

  const hasInactiveEntries = entries.some((entry) => !entry.isActive);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Fieldset title={title}>
        <Stack direction="column" gap={inube.spacing.s400}>
          <Grid
            templateColumns={smallScreen ? "auto 1fr" : "32% 1fr"}
            gap="s200"
            alignItems="center"
          >
            <Textfield
              type="search"
              iconBefore={<MdSearch size={22} />}
              placeholder="Buscar..."
              name="search"
              id="search"
              size="compact"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFilter(e)
              }
              value={filter}
              fullwidth
              disabled={dataValidations}
            />
            {smallScreen ? (
              <StyledOptionsContainer>
                <Icon
                  icon={<MdOutlineMoreHoriz />}
                  appearance="dark"
                  spacing="none"
                  size="24px"
                  shape="circle"
                  onClick={handleToggleMenuInvitation}
                />
                {showMenu && (
                  <Menu
                    options={menuOptions}
                    handleClose={handleCloseMenuInvitation}
                  />
                )}
              </StyledOptionsContainer>
            ) : (
              <Stack gap="8px" justifyContent="flex-end">
                <Button
                  spacing="compact"
                  onClick={() => handleToggleAllEntries(false)}
                  disabled={!hasActiveEntries || dataValidations}
                >
                  Desasignar todos
                </Button>
                <Button
                  spacing="compact"
                  onClick={() => handleToggleAllEntries(true)}
                  disabled={
                    isAssignAll || dataValidations || !hasInactiveEntries
                  }
                >
                  Asignar todos
                </Button>
              </Stack>
            )}
          </Grid>
          {dataValidations ? (
            <Text>No se encuentran datos para seleccionar.</Text>
          ) : (
            <StyledEntriesContainer>
              <Stack direction="column" gap={inube.spacing.s200} margin={"s0"}>
                {filteredRows &&
                  filteredRows.map((entry) => (
                    <StyledToggle key={entry.id}>
                      <Toggle
                        checked={entry.isActive}
                        id={`approval-${entry.id}`}
                        margin="0px"
                        name="approval"
                        onChange={() => handleToggleEntry(entry.id)}
                        padding="0px"
                        size="small"
                      />
                      <Label htmlFor={`approval-${entry.id}`} size="medium">
                        {`${entry.id} - ${entry.value}`}
                      </Label>
                    </StyledToggle>
                  ))}
              </Stack>
            </StyledEntriesContainer>
          )}
        </Stack>
      </Fieldset>
    </StyledForm>
  );
}

export { AssignmentFormUI };
