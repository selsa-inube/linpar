import {
  Button,
  Stack,
  Switch,
  TextField,
  useMediaQuery,
} from "@inube/design-system";
import { MdOutlineMoreHoriz, MdSearch } from "react-icons/md";
import { Fieldset } from "@components/feedback/Fieldset";
import {
  StyledBranchesContainer,
  StyledHeadContainer,
  StyledSubmitContainer,
} from "./styles";

function BranchesFormUI(props) {
  const {
    branches,
    handleToggleAllBranches,
    handleToggleBranch,
    isLoading,
    currentBranches,
    handleSubmitForm,
    handleCancelChanges,
    filter,
    handleFilter,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 650px)");

  const hasChanges =
    JSON.stringify(currentBranches) === JSON.stringify(branches);

  const filteredRows = branches.filter(
    (branch) =>
      branch.city.toLowerCase().includes(filter.toLowerCase()) ||
      branch.id.includes(filter.toLowerCase())
  );

  return (
    <form>
      <Fieldset title="Seleccione las sucursales que desea asignar">
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
                handleClick={(e) => handleToggleAllBranches(e, false)}
                type="text"
              >
                Desasignar todos
              </Button>
              <Button
                spacing="compact"
                handleClick={(e) => handleToggleAllBranches(e, true)}
                type="text"
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
      </Fieldset>
      {handleSubmitForm && (
        <StyledSubmitContainer>
          <Button
            appearance="secondary"
            isDisabled={hasChanges}
            handleClick={handleCancelChanges}
            type="text"
          >
            Cancelar
          </Button>
          <Button
            appearance="confirm"
            handleClick={handleSubmitForm}
            isLoading={isLoading}
            isDisabled={hasChanges}
            type="text"
          >
            Guardar
          </Button>
        </StyledSubmitContainer>
      )}
    </form>
  );
}

export { BranchesFormUI };
