import {
  StyledTable,
  StyledThead,
  StyledTbody,
  StyledTr,
  StyledThAction,
  StyledThTitle,
  StyledTd,
} from "./styles";
import { Text } from "../Text";

function TableUI(props) {
  const { titles, actions, entries } = props;

  return (
    <StyledTable>
      <StyledThead>
        <StyledTr>
          {titles.map((title) => (
            <StyledThTitle key={`title-${title.id}`}>
              <Text typoToken="labelMedium">{title.titleName}</Text>
            </StyledThTitle>
          ))}
          {actions.map((action) => (
            <StyledThAction key={`action-${action.id}`}>
              <Text typoToken="labelMedium" align="center">
                {action.actionName}
              </Text>
            </StyledThAction>
          ))}
        </StyledTr>
      </StyledThead>
      <StyledTbody>
        {entries.map((entry) => (
          <StyledTr key={`entry-${entry.id}`}>
            {titles.map((entryValue) =>
              entry[entryValue.id] ? (
                <StyledTd key={`e-${entry[entryValue.id]}`}>
                  <Text typoToken="bodySmall">{entry[entryValue.id]}</Text>
                </StyledTd>
              ) : (
                <StyledTd key={`e-${entry[entryValue.id]}`}>
                  <Text typoToken="bodySmall">{null}</Text>
                </StyledTd>
              )
            )}
            {actions.map((action) => (
              <StyledTd key={`${entry.id}-${action.id}`}>
                {action.content}
              </StyledTd>
            ))}
          </StyledTr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
}

export { TableUI };
