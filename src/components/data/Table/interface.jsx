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
  const { titles, actions, iterateEntries } = props;

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
        {iterateEntries.map((entry, i) => (
          <StyledTr key={`entry-${i}`}>
            {entry.map((entryValue, i) => (
              <StyledTd key={`entryValue-${i}`}>
                <Text typoToken="bodySmall">{entryValue}</Text>
              </StyledTd>
            ))}
            {actions.map((action) => (
              <StyledTd key={`${i}-${action.id}`}>{action.content}</StyledTd>
            ))}
          </StyledTr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
}

export { TableUI };
