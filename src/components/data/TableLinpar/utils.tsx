import { SkeletonLine } from "@inubekit/skeleton";
import { Col, Td, Th, Tr } from "@inubekit/table";

import { IAction, IBreakpoint, IEntry, ITitle } from "./types";
import { ActionMobile } from "./ActionMobile";

const actionsLoading = (numberActions: number) => {
  const cellsOfActionsLoading = [];
  for (let cellAction = 0; cellAction < numberActions; cellAction++) {
    cellsOfActionsLoading.push(
      <Td key={cellAction}>
        <SkeletonLine animated />
      </Td>
    );
  }
  return cellsOfActionsLoading;
};

const dataLoading = (titleColumns: ITitle[], numberActions: number) => {
  const rowsLoading = [];
  for (let rows = 0; rows < 4; rows++) {
    rowsLoading.push(
      <Tr key={rows}>
        {titleColumns.map((title) => (
          <Td key={`e-${title.id}`}>
            <SkeletonLine animated />
          </Td>
        ))}
        {actionsLoading(numberActions)}
      </Tr>
    );
  }
  return rowsLoading;
};

function findCurrentMediaQuery(currentMediaQuery: { [key: string]: boolean }) {
  const lastIndexMedia = Object.values(currentMediaQuery).lastIndexOf(true);
  return lastIndexMedia !== -1 ? lastIndexMedia : 0;
}

function priorityColumns(titles: ITitle[], numColumns: number) {
  const maxPriorityToDisplay = numColumns - 1;
  return titles.filter((title) => title.priority <= maxPriorityToDisplay);
}

function totalTitleColumns(
  titles: ITitle[],
  breakpoints: IBreakpoint[],
  media: Record<string, boolean>
) {
  const numColumns = breakpoints[findCurrentMediaQuery(media)].totalColumns;

  if (numColumns >= titles.length) return titles;

  return priorityColumns(titles, numColumns);
}

function showActionTitle(
  actionTitle: IAction[],
  mediaQuery: boolean,
  mobileTitle?: string
) {
  return !mediaQuery ? (
    actionTitle.map((action) => (
      <Th align="center" key={`action-${action.id}`}>
        {action.actionName}
      </Th>
    ))
  ) : (
    <Th>{mobileTitle ? mobileTitle : "Open"}</Th>
  );
}

function ShowAction(
  actionContent: IAction[],
  entry: IEntry,
  mediaQuery: boolean
) {
  return mediaQuery ? (
    <>
      <Td type="custom">
        <ActionMobile actions={actionContent} entry={entry} />
      </Td>
    </>
  ) : (
    <>
      {actionContent.map((action) => (
        <Td type="custom" align="center" key={`${entry.id}-${action.id}`}>
          {action.content(entry)}
        </Td>
      ))}
    </>
  );
}

const widthColmnsData = (
  TitleColumns: ITitle[],
  widthPercentageTotalColumns?: number
) => {
  const size = widthPercentageTotalColumns
    ? widthPercentageTotalColumns / TitleColumns.length
    : 75 / TitleColumns.length;

  return TitleColumns.map((title) => <Col key={title.id} width={`${size}%`} />);
};

export {
  ShowAction,
  showActionTitle,
  totalTitleColumns,
  dataLoading,
  actionsLoading,
  widthColmnsData,
};
