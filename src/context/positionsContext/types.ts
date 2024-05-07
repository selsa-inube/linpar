import { IPosition } from "@pages/privileges/outlets/positions/add-position/types";

interface IPositionsContext {
  positions: IPosition[];
  setPositions: React.Dispatch<React.SetStateAction<IPosition[]>>;
}

export type { IPositionsContext };
