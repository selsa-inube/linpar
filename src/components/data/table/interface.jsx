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
          {titles.map((item) => (
            <StyledThTitle key={`title-${item.id}`}>
              <Text typoToken="labelMedium">{item.titleName}</Text>
            </StyledThTitle>
          ))}
          {actions.map((item) => (
            <StyledThAction key={`action-${item.id}`}>
              <Text typoToken="labelMedium" align="center">
                {item.actionName}
              </Text>
            </StyledThAction>
          ))}
        </StyledTr>
      </StyledThead>
      <StyledTbody>
        {entries.map((itemEntry) => (
          <StyledTr key={itemEntry.id}>
            <StyledTd>
              <Text typoToken="bodySmall">{itemEntry.username}</Text>
            </StyledTd>
            <StyledTd>
              <Text typoToken="bodySmall">{itemEntry.code}</Text>
            </StyledTd>
            <StyledTd>
              <Text typoToken="bodySmall">{itemEntry.userID}</Text>
            </StyledTd>
            <StyledTd>
              <Text typoToken="bodySmall">{itemEntry.position}</Text>
            </StyledTd>
            {actions.map((itemAction) => (
              <StyledTd key={itemAction.id} colorToken={itemAction.type}>
                {itemAction.content}
              </StyledTd>
            ))}
          </StyledTr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
}

export { TableUI };
