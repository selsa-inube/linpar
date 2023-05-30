import {
  Button,
  Stack,
  Switch,
  Text,
  TextField,
  useMediaQuery,
} from "@inube/design-system";
import { MdOutlineMoreHoriz, MdSearch } from "react-icons/md";
import {
  StyledBranchesContainer,
  StyledFieldset,
  StyledHeadContainer,
} from "./styles";

function BranchesFormUI(props) {
  const {
    branches,
    handleToggleAllBranches,
    handleToggleBranch,
    isLoading,
    currentBranches,
    handleSubmitForm,
    allowSubmit = false,
    handleCancelChanges,
    filter,
    handleFilter,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 600px)");

  const hasChanges =
    JSON.stringify(currentBranches) === JSON.stringify(branches);

  const filteredRows = branches.filter(
    (branch) =>
      branch.city.toLowerCase().includes(filter.toLowerCase()) ||
      branch.id.includes(filter.toLowerCase())
  );

  return (
    <form>
      <StyledFieldset>
        <legend>
          <Text typo="titleSmall">
            Seleccione las sucursales que desea asignar
          </Text>
        </legend>
        <StyledHeadContainer>
          <TextField
            type="search"
            iconBefore={<MdSearch size={22} />}
            placeholder="Buscar..."
            name="searchBranches"
            id="searchBranches"
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
                handleClick={() => handleToggleAllBranches(false)}
                type="button"
              >
                Desasignar todos
              </Button>
              <Button
                spacing="compact"
                handleClick={() => handleToggleAllBranches(true)}
                type="button"
              >
                Asignar todos
              </Button>
            </Stack>
          )}
        </StyledHeadContainer>
        <StyledBranchesContainer>
          {filteredRows.map((branch) => (
            <Stack alignItems="center" key={branch.id}>
              <Switch
                id={branch.id}
                label={`${branch.id} - ${branch.city}`}
                checked={branch.isActive}
                handleChange={() => handleToggleBranch(branch.id)}
                size="large"
              />
            </Stack>
          ))}
        </StyledBranchesContainer>
      </StyledFieldset>
      {allowSubmit && (
        <Stack gap="8px" justifyContent="flex-end">
          <Button
            appearance="secondary"
            isDisabled={hasChanges}
            handleClick={handleCancelChanges}
            type="button"
          >
            Cancelar
          </Button>
          <Button
            appearance="confirm"
            handleClick={handleSubmitForm}
            isLoading={isLoading}
            isDisabled={hasChanges}
            type="button"
          >
            Guardar
          </Button>
        </Stack>
      )}
    </form>
  );
}

export { BranchesFormUI };
