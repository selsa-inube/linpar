import { StyledDivider } from "./styles";

export interface IDividerProps {
  dashed?: boolean;
}

export function Divider(props: IDividerProps) {
  const { dashed } = props;

  return <StyledDivider dashed={dashed} />;
}
