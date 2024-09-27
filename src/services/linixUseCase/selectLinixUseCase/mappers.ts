import { selectLinixUseCases } from "@mocks/catalogs/linixUseCases/utils.mock";
import { Option } from "@pages/catalogs/outlets/linixUseCase/adding-linix-use-case/config/selectLinixUseCase.config";

const mapSelectLinixUseCase = (
  selectLinixUseCase: Record<string, string | number | object>
): Option => {
  const buildSelectLinixUseCase: Option = {
    id: String(selectLinixUseCase.code),
    label: selectLinixUseCases[String(selectLinixUseCase.description)],
    value: selectLinixUseCases[String(selectLinixUseCase.description)],
  };
  return buildSelectLinixUseCase;
};

const mapSelectLinixUseCaseApiToEntities = (
  users: Record<string, string | number | object>[]
): Option[] => {
  return users.map(mapSelectLinixUseCase);
};
export { mapSelectLinixUseCaseApiToEntities, mapSelectLinixUseCase };
