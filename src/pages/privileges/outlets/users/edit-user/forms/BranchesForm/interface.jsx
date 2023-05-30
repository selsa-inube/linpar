import {
  Button,
  Stack,
  Switch,
  Text,
  TextField,
  useMediaQuery,
} from "@inube/design-system";
import { MdOutlineMoreHoriz, MdSearch } from "react-icons/md";
import { StyledBranchesContainer, StyledFieldset } from "./styles";

function BranchesFormUI(props) {
  const {
    branches,
    handleToggleAllBranches,
    handleToggleBranch,
    isLoading,
    currentBranches,
    handleSubmitForm,
    allowSubmit,
    handleCancelChanges,
    filter,
    handleFilter,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 650px)");

  const hasChanges =
    JSON.stringify(currentBranches) === JSON.stringify(branches);

  return (
    <form>
      <StyledFieldset>
        <legend>
          <Text typo="titleSmall">
            Seleccione las sucursales que desea asignar
          </Text>
        </legend>
        <Stack justifyContent="space-between" alignItems="center">
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
          />
          {smallScreen ? (
            <MdOutlineMoreHoriz />
          ) : (
            <Stack gap="8px">
              <Button
                appearance="secondary"
                spacing="compact"
                handleClick={(e) => handleToggleAllBranches(e, false)}
              >
                Desasignar todos
              </Button>
              <Button
                spacing="compact"
                handleClick={(e) => handleToggleAllBranches(e, true)}
              >
                Asignar todos
              </Button>
            </Stack>
          )}
        </Stack>
        <StyledBranchesContainer>
          {branches
            .filter(
              (branch) =>
                branch.city.includes(filter) || branch.id.includes(filter)
            )
            .map((branch, i) => (
              <Stack alignItems="center" key={i}>
                <Switch
                  id={branch.id}
                  label={`${branch.id}-${branch.city}`}
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
          >
            Cancelar
          </Button>
          <Button
            appearance="confirm"
            handleClick={handleSubmitForm}
            isLoading={isLoading}
            isDisabled={hasChanges}
          >
            Guardar
          </Button>
        </Stack>
      )}
    </form>
  );
}

export { BranchesFormUI };
