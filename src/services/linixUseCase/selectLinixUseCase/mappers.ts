import { Option } from "@pages/catalogs/outlets/linixUseCase/adding-linix-use-case/config/selectLinixUseCase.config";

const mapSelectLinixUseCase = (
  selectLinixUseCase: Record<string, string | number | object>
): Option => {
  const buildSelectLinixUseCase: Option = {
    id: String(selectLinixUseCase.code),
    label: String(selectLinixUseCase.description),
    value: String(selectLinixUseCase.description),
  };
  return buildSelectLinixUseCase;
};

const mapSelectLinixUseCaseApiToEntities = (
  users: Record<string, string | number | object>[]
): Option[] => {
  return users.map(mapSelectLinixUseCase);
};
export { mapSelectLinixUseCaseApiToEntities, mapSelectLinixUseCase };
