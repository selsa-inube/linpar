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
import { useMediaQuery } from "@inube/design-system";
import { useMediaQueries } from "../../../hooks/useMediaQueries";

function findCurrentMediaQuery(currentMediaQuery) {
  const lastIndexMedia = Object.values(currentMediaQuery).lastIndexOf(true);
  return lastIndexMedia !== -1 ? lastIndexMedia : 0;
}

function priorityColumns(titles, numColumns) {
  const maxPriorityToDisplay = numColumns - 1;
  return titles.filter((title) => title.priority <= maxPriorityToDisplay);
}

function totalTitleColumns(titles, breakPoints, media) {
  const numColumns = breakPoints[findCurrentMediaQuery(media)].totalColumns;

  if (numColumns >= titles.length) return titles;

  return priorityColumns(titles, numColumns);
}

function showActionTitle(actionTitle, mediaQuery) {
  return !mediaQuery ? (
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

function ShowAction(actionContent, entry, mediaQuery) {
  return !mediaQuery ? (
    <>
      {actionContent.map((action) => (
        <StyledTd key={`${entry.id}-${action.id}`}>
          {typeof action.content === "function"
            ? action.content(entry)
            : action.content}
        </StyledTd>
      ))}
    </>
  ) : (
    <StyledTd>
      <MdOpenInNew />
    </StyledTd>
  );
}

function TableUI(props) {
  const { titles, actions, entries, breakPoints } = props;
  const mediaActionOpen = useMediaQuery("(max-width: 850px)");

  const queriesArray = breakPoints.map((breakpoint) => breakpoint.breakpoint);

  const media = useMediaQueries(queriesArray);

  const TitleColumns = totalTitleColumns(titles, breakPoints, media);

  return (
    <StyledTable>
      <StyledThead>
        <StyledTr>
          {TitleColumns.map((title) => (
            <StyledThTitle key={`title-${title.id}`}>
              <Text typoToken="labelMedium">{title.titleName}</Text>
            </StyledThTitle>
          ))}
          {showActionTitle(actions, mediaActionOpen)}
        </StyledTr>
      </StyledThead>
      <StyledTbody>
        {entries.map((entry) => (
          <StyledTr key={`entry-${entry.id}`}>
            {TitleColumns.map((title) =>
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
            {ShowAction(actions, entry, mediaActionOpen)}
          </StyledTr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
}

export { TableUI };
