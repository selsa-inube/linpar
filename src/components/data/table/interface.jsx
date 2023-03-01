import {
  StyledContentTable,
  StyledTable,
  StyledTableThead,
  StyledTableTbody,
  StyledTableTr,
  StyledTableTh,
  StyledTableTd,
} from "./styles";
import { Text } from "../Text";

function TableUI(props) {
  const { titles, actions, entries } = props;

  return (
    <StyledContentTable>
      <StyledTable>
        <StyledTableThead>
          <StyledTableTr>
            {titles.map((item, index) => (
              <StyledTableTh key={index}>
                <Text typoToken="labelMedium">{item.titleName}</Text>
              </StyledTableTh>
            ))}
            {actions.map((item, index) => (
              <StyledTableTh key={index}>
                <Text typoToken="labelMedium">{item.actionName}</Text>
              </StyledTableTh>
            ))}
          </StyledTableTr>
        </StyledTableThead>
        <StyledTableTbody>
          {entries.map((itemEntrie, i) => (
            <StyledTableTr key={i}>
              <StyledTableTd key={i}>
                <Text typoToken="bodySmall">{itemEntrie.username}</Text>
              </StyledTableTd>
              <StyledTableTd key={i}>
                <Text typoToken="bodySmall">{itemEntrie.code}</Text>
              </StyledTableTd>
              <StyledTableTd key={i}>
                <Text typoToken="bodySmall">{itemEntrie.userID}</Text>
              </StyledTableTd>
              <StyledTableTd key={i}>
                <Text typoToken="bodySmall">{itemEntrie.position}</Text>
              </StyledTableTd>
              {actions.map((itemAction, indexAction) => (
                <StyledTableTd key={indexAction}>
                  {itemAction.content}
                </StyledTableTd>
              ))}
            </StyledTableTr>
          ))}
        </StyledTableTbody>
      </StyledTable>
    </StyledContentTable>
  );
}

export { TableUI };
