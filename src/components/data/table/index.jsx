import { Pagination } from "./pagination";
import { TableUI } from "./interface";
import { action, title, entrie } from "../../../mocks/apps/dataTable.mock";

function Table(props) {
  const {
    titles = title,
    actions = action,
    entries = entrie,
    filter = "",
    pageLength = 10,
    valuePage = 10,
    valueData = 15,
    handleStartPage,
    handlePrevPage,
    handleNextPage,
    handleEndPage,
  } = props;

  return (
    <>
      <TableUI titles={titles} actions={actions} entries={entries} />
      <Pagination
        valuePage={valuePage}
        valueData={valueData}
        handleStartPage={handleStartPage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handleEndPage={handleEndPage}
      />
    </>
  );
}

export { Table };
