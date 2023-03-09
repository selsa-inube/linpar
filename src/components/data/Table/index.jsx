import { Pagination } from "./Pagination";
import { TableUI } from "./interface";

function Table(props) {
  const {
    titles,
    actions,
    entries,
    // filter = "",
    pageLength = 10,
  } = props;

  const pagination = () => {
    const currentPage = 0;
    return entries.slice(currentPage, currentPage + pageLength);
  };

  return (
    <>
      <TableUI titles={titles} actions={actions} entries={pagination()} />
      {entries.length > pageLength && (
        <Pagination valuePage="10" valueData="15" />
      )}
    </>
  );
}

export { Table };
