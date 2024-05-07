import { createContext, useMemo, useState } from "react";
import {
  IOptionInitialiceEntry,
  IPosition,
} from "@pages/privileges/outlets/positions/add-position/types";
import { IPositionsContext } from "./types";

const PositionsContext = createContext<IPositionsContext>(
  {} as IPositionsContext
);

interface PositionsProviderProps {
  children: React.ReactNode;
}

function PositionsProvider(props: PositionsProviderProps) {
  const { children } = props;

  const [positions, setPositions] = useState<IPosition[]>([]);
  const [roles, setRoles] = useState<IOptionInitialiceEntry[]>([]);

  const authContext = useMemo(
    () => ({
      positions,
      roles,
      setPositions,
      setRoles,
    }),
    [positions, roles, setPositions, setRoles]
  );

  return (
    <PositionsContext.Provider value={authContext}>
      {children}
    </PositionsContext.Provider>
  );
}

export { PositionsContext, PositionsProvider };
export type { PositionsProviderProps };
