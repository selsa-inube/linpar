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
import { MdOpenInNew } from "react-icons/md";
import { useMediaQuery } from "@inube/design-system/src/hooks/useMediaQuery";

function showActionTitle(actionTitle, size) {
  return size === "large" ? (
    <>
      {actionTitle.map((action) => (
        <StyledThAction key={`action-${action.id}`}>
          <Text typoToken="labelMedium" align="center">
            {action.actionName}
          </Text>
        </StyledThAction>
      ))}
    </>
  ) : (
    <StyledThAction>
      <Text typoToken="labelMedium" align="center">
        Open
      </Text>
    </StyledThAction>
  );
}

function ShowAction(actionContent, entry, size) {
  return size === "large" ? (
    <>
      {actionContent.map((action) => (
        <StyledTd key={`${entry.id}-${action.id}`}>{action.content}</StyledTd>
      ))}
    </>
  ) : (
    <StyledTd>
      <MdOpenInNew />
    </StyledTd>
  );
}

function TableUI(props) {
  const screen = useMediaQuery("(min-width: 850px)");
  const size = screen ? "large" : "small";
  const { titles, actions, entries } = props;

  return (
    <StyledTable>
      <StyledThead size={size}>
        <StyledTr>
          {titles.map((title) => (
            <StyledThTitle key={`title-${title.id}`}>
              <Text typoToken="labelMedium">{title.titleName}</Text>
            </StyledThTitle>
          ))}
          {showActionTitle(actions, size)}
        </StyledTr>
      </StyledThead>
      <StyledTbody>
        {entries.map((entry) => (
          <StyledTr key={`entry-${entry.id}`}>
            {titles.map((title) =>
              entry[title.id] ? (
                <StyledTd key={`e-${entry[title.id]}`}>
                  <Text typoToken="bodySmall">{entry[title.id]}</Text>
                </StyledTd>
              ) : (
                <StyledTd key={`e-${entry[title.id]}`}>
                  <Text typoToken="bodySmall">{null}</Text>
                </StyledTd>
              )
            )}
            {ShowAction(actions, entry, size)}
          </StyledTr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
}

export { TableUI };
