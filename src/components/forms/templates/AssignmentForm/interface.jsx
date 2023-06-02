import { Fieldset } from "@components/feedback/Fieldset";
import {
  Button,
  Stack,
  Switch,
  TextField,
  useMediaQuery,
} from "@inube/design-system";
import { MdOutlineMoreHoriz, MdSearch } from "react-icons/md";
import {
  StyledEntriesContainer,
  StyledForm,
  StyledHeadContainer,
} from "./styles";

function AssignmentFormUI(props) {
  const {
    title,
    filter,
    handleFilter,
    handleToggleAllEntries,
    handleToggleEntry,
    entries,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 650px)");

  const filteredRows = entries.filter(
    (entry) =>
      entry.value.toLowerCase().includes(filter.toLowerCase()) ||
      entry.id.includes(filter.toLowerCase())
  );

  return (
    <StyledForm>
      <Fieldset title={title}>
        <StyledHeadContainer>
          <TextField
            type="search"
            iconBefore={<MdSearch size={22} />}
            placeholder="Buscar..."
            name="search"
            id="search"
            minLength={1}
            size="compact"
            handleChange={handleFilter}
            value={filter}
            isFullWidth
          />
          {smallScreen ? (
            <Stack justifyContent="flex-end">
              <MdOutlineMoreHoriz />
            </Stack>
          ) : (
            <Stack gap="8px" justifyContent="flex-end">
              <Button
                appearance="secondary"
                spacing="compact"
                handleClick={(e) => handleToggleAllEntries(e, false)}
                type="text"
              >
                Desasignar todos
              </Button>
              <Button
                spacing="compact"
                handleClick={(e) => handleToggleAllEntries(e, true)}
                type="text"
              >
                Asignar todos
              </Button>
            </Stack>
          )}
        </StyledHeadContainer>
        <StyledEntriesContainer>
          {filteredRows.map((entry) => (
            <Stack alignItems="center" key={entry.id}>
              <Switch
                id={entry.id}
                label={`${entry.id} - ${entry.value}`}
                checked={entry.isActive}
                handleChange={() => handleToggleEntry(entry.id)}
                size="large"
              />
            </Stack>
          ))}
        </StyledEntriesContainer>
      </Fieldset>
    </StyledForm>
  );
}

export { AssignmentFormUI };
