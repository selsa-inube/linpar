import { StyledDivider } from "./styles";

interface DividerProps {
  dashed?: boolean;
}

function Divider(props: DividerProps) {
  const { dashed } = props;

  return <StyledDivider $dashed={dashed} />;
}

export { Divider };
export type { DividerProps };
