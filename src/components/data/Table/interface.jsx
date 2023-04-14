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

function mediaQueryAct(media) {
  let mediaAct = "";
  for (const mediaquery in media) {
    if (media[mediaquery]) {
      mediaAct = mediaquery;
    }
  }
  return mediaAct;
}

function showColBreakpoint(breakPoints, media) {
  let numcolumns;
  breakPoints.forEach((breakPoint) => {
    if (breakPoint.breakpoint === mediaQueryAct(media)) {
      numcolumns = breakPoint.totalColumns;
    }
  });
  return numcolumns;
}

function Ordertitles(titles) {
  return titles.sort((a, b) => a.responsiveOrder - b.responsiveOrder);
}

function totalColumns(titles, breakPoints, media) {
  let ColumnTitles = titles;
  if (showColBreakpoint(breakPoints, media) < 4) {
    ColumnTitles = Ordertitles(titles);
  }
  return ColumnTitles.slice(0, showColBreakpoint(breakPoints, media));
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
  const { titles, actions, entries, breakPoints } = props;
  const mediaActionOpen = useMediaQuery("(max-width: 850px)");

  const queriesArray = breakPoints.map((breakpoint) => breakpoint.breakpoint);

  const media = useMediaQueries(queriesArray);

  return (
    <StyledTable>
      <StyledThead>
        <StyledTr>
          {totalColumns(titles, breakPoints, media).map((title) => (
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
            {totalColumns(titles, breakPoints, media).map((title) =>
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
