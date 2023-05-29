import {
  Button,
  Stack,
  Switch,
  Text,
  TextField,
  useMediaQuery,
} from "@inube/design-system";
import { MdOutlineMoreHoriz, MdSearch } from "react-icons/md";
import { typography } from "../../../../../../../styles/typography";
import { StyledBranchesContainer, StyledFieldset } from "./styles";

function BranchesFormUI(props) {
  const {
    handleAllDeallocate,
    handleAllAllocate,
    branches,
    handleToggleBranch,
    handleSubmit,
    isLoading,
    allowSubmit,
  } = props;
  const smallScreen = useMediaQuery("(max-width: 580px)");

  return (
    <form>
      <StyledFieldset>
        <legend>
          <Text typo={typography.sys.titleSmall}>
            Select the branches to assign
          </Text>
        </legend>
        <Stack justifyContent="space-between" alignItems="center">
          <TextField
            type="search"
            iconBefore={<MdSearch size={22} />}
            placeholder="Search..."
            name="searchClients"
            id="searchClients"
            minLength={1}
            size="compact"
          />
          {smallScreen ? (
            <MdOutlineMoreHoriz />
          ) : (
            <Stack gap="8px">
              <Button
                appearance="secondary"
                spacing="compact"
                handleClick={handleAllDeallocate}
              >
                Deallocate all
              </Button>
              <Button spacing="compact" handleClick={handleAllAllocate}>
                Allocate all
              </Button>
            </Stack>
          )}
        </Stack>
        <StyledBranchesContainer>
          {branches.map((branch, i) => (
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
          <Button appearance="secondary">Cancel</Button>
          <Button
            appearance="confirm"
            handleClick={handleSubmit}
            isLoading={isLoading}
          >
            Save
          </Button>
        </Stack>
      )}
    </form>
  );
}

export { BranchesFormUI };
