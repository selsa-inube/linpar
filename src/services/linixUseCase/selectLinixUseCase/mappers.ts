import { selectLinixUseCases } from "@mocks/privileges/linixUseCases/utils.mock";
import { Option } from "@src/pages/privileges/outlets/linixUseCase/adding-linix-use-case/config/selectLinixUseCase.config";

const mapSelectLinixUseCase = (
  selectLinixUseCase: Record<string, string | number | object>
): Option => {
  const buildSelectLinixUseCase: Option = {
    id: String(selectLinixUseCase.code),
    label: selectLinixUseCases[String(selectLinixUseCase.description)],
  };
  return buildSelectLinixUseCase;
};

const mapSelectLinixUseCaseApiToEntities = (
  users: Record<string, string | number | object>[]
): Option[] => {
  return users.map(mapSelectLinixUseCase);
};
export { mapSelectLinixUseCaseApiToEntities, mapSelectLinixUseCase };
