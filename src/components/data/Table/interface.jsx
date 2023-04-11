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

function showColBreakpoint(breakPoints, query, validation) {
  let numcolumns;
  breakPoints.forEach((breakPoint) => {
    if (validation && breakPoint.breakpoint === query) {
      numcolumns = breakPoint.totalColumns;
    }
  });
  return numcolumns;
}

function Ordertitles(titles) {
  return titles.sort((a, b) => a.responsiveOrder - b.responsiveOrder);
}

function totalColumns(titles, breakpoints, query, validation) {
  let ColumnTitles = titles;
  if ((breakpoints, query, validation) < 4) {
    ColumnTitles = Ordertitles(titles);
  }
  return ColumnTitles.slice(
    0,
    showColBreakpoint(breakpoints, query, validation)
  );
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

  ///////////////////////////////////////////////////////////////
  const queriesArray = breakPoints.map((breakpoint) => breakpoint.breakpoint);
  //bucle infinito

  const media = useMediaQueries(breakPoints);
  console.log("useMediaQueries: ", media);

  ////////////////////////////////////////////////////////////////

  return (
    <StyledTable>
      <StyledThead>
        <StyledTr>
          {titles.map((title) => (
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
            {ShowAction(actions, entry, mediaActionOpen)}
          </StyledTr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
}

export { TableUI };
