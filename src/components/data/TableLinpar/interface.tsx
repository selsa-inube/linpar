import { useMemo } from "react";
import { useMediaQueries, useMediaQuery } from "@inubekit/hooks";
import { Text } from "@inubekit/text";
import {
  Col,
  Colgroup,
  Pagination,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@inubekit/table";
import {
  dataLoading,
  ShowAction,
  showActionTitle,
  totalTitleColumns,
  widthColmnsData,
} from "./utils";
import { IAction, IBreakpoint, IEntry, ITitle } from "./types";
import { StyledText } from "./styles";

interface TableLinparUIProps {
  actions: IAction[];
  breakpoints: IBreakpoint[];
  entries: IEntry[];
  filteredEntries: IEntry[];
  firstEntryInPage: number;
  isLoading: boolean;
  lastEntryInPage: number;
  pageLength: number;
  titles: ITitle[];
  mobileTitle?: string;
  widthPercentageTotalColumns?: number;
  goToEndPage: () => void;
  goToFirstPage: () => void;
  nextPage: () => void;
  prevPage: () => void;
}

const TableLinparUI = (props: TableLinparUIProps) => {
  const {
    actions,
    breakpoints,
    entries,
    filteredEntries,
    firstEntryInPage,
    isLoading,
    lastEntryInPage,
    mobileTitle,
    pageLength,
    titles,
    widthPercentageTotalColumns,
    goToEndPage,
    goToFirstPage,
    nextPage,
    prevPage,
  } = props;

  const mediaActionOpen = useMediaQuery("(max-width: 1200px)");
  const smallScreen = useMediaQuery("(max-width: 1600px)");
  const queriesArray = useMemo(
    () => breakpoints && breakpoints.map((breakpoint) => breakpoint.breakpoint),
    [breakpoints]
  );

  const media = useMediaQueries(queriesArray || []);

  const TitleColumns = useMemo(
    () => totalTitleColumns(titles, breakpoints!, media),
    [titles, breakpoints, media]
  );

  const numberActions = actions ? actions.length : 0;

  return (
    <Table tableLayout={smallScreen ? "auto" : "fixed"}>
      <Colgroup>
        {!mediaActionOpen && (
          <Col
            width={
              TitleColumns[1] && TitleColumns[1].id === "k_Usuari"
                ? "200px"
                : "100px"
            }
          />
        )}
        {widthColmnsData(TitleColumns, widthPercentageTotalColumns)}
      </Colgroup>

      <Thead>
        <Tr border="bottom">
          {TitleColumns.map((title, index) => (
            <Th key={index} align="left">
              {title.titleName}
            </Th>
          ))}
          {showActionTitle(actions, mediaActionOpen, mobileTitle)}
        </Tr>
      </Thead>
      <Tbody>
        {isLoading ? (
          dataLoading(TitleColumns, numberActions)
        ) : (
          <>
            {entries.length > 0 ? (
              entries.map((entry, index) => (
                <Tr key={index}>
                  {TitleColumns.map((title) => (
                    <Td
                      key={`e-${index}-${title.id}`}
                      align={entry.action ? "center" : "left"}
                    >
                      <StyledText>{entry[title.id]}</StyledText>
                    </Td>
                  ))}
                  {ShowAction(actions, entry, mediaActionOpen)}
                </Tr>
              ))
            ) : (
              <Tr>
                <Td type="custom" colSpan={titles.length + actions.length}>
                  <Text type="body" size="small" appearance="dark" ellipsis>
                    No se encontró información
                  </Text>
                </Td>
              </Tr>
            )}
          </>
        )}
      </Tbody>

      {filteredEntries.length > pageLength && (
        <Tfoot>
          <Tr border="bottom">
            <Td
              colSpan={titles.length + actions.length}
              type="custom"
              align="right"
            >
              <Pagination
                firstEntryInPage={firstEntryInPage}
                lastEntryInPage={lastEntryInPage}
                totalRecords={filteredEntries.length}
                handleStartPage={goToFirstPage}
                handlePrevPage={prevPage}
                handleNextPage={nextPage}
                handleEndPage={goToEndPage}
              />
            </Td>
          </Tr>
        </Tfoot>
      )}
    </Table>
  );
};

export { TableLinparUI };
