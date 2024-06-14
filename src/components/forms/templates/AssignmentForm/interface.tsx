import { MdOutlineMoreHoriz, MdSearch } from "react-icons/md";
import {
  Button,
  Stack,
  Switch,
  Textfield,
  Icon,
  Grid,
  useMediaQuery,
  inube,
} from "@inube/design-system";
import { Text } from "@inubekit/text";

import { Menu } from "@components/navigation/Menu";
import { IOption } from "@components/navigation/Menu/types";
import { Fieldset } from "@components/inputs/Fieldset";

import {
  StyledEntriesContainer,
  StyledForm,
  StyledOptionsContainer,
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
    readOnly,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 650px)");

  const filteredRows = entries.filter(
    (entry) =>
      entry.value.toLowerCase().includes(filter.toLowerCase()) ||
      entry.id.includes(filter.toLowerCase())
  );
  const dataValidations = entries.length === 0;

  if (readOnly) {
    return (
      <>
        <StyledEntriesContainer>
          <Stack
            direction="column"
            gap={inube.spacing.s200}
            margin={readOnly ? "s0" : "s0 s400"}
          >
            {filteredRows.map((entry) => (
              <Stack alignItems="center" key={entry.id}>
                <Switch
                  id={entry.id}
                  label={`${entry.id} - ${entry.value}`}
                  checked={entry.isActive}
                  onChange={() => handleToggleEntry(entry.id)}
                  size="large"
                  disabled
                />
              </Stack>
            ))}
          </Stack>
        </StyledEntriesContainer>
      </>
    );
  }

  return (
    <StyledForm>
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
              onChange={handleFilter}
              value={filter}
              fullwidth
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
                  disabled={!entries.some((entry) => entry.isActive)}
                >
                  Desasignar todos
                </Button>
                <Button
                  spacing="compact"
                  onClick={() => handleToggleAllEntries(true)}
                  disabled={isAssignAll}
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
                {filteredRows.map((entry) => (
                  <Stack alignItems="center" key={entry.id}>
                    <Switch
                      id={entry.id}
                      label={`${entry.id} - ${entry.value}`}
                      checked={entry.isActive}
                      onChange={() => handleToggleEntry(entry.id)}
                      size="large"
                    />
                  </Stack>
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
