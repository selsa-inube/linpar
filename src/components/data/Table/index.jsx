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

  function IterateList() {
    const lists = entries.map((element) => {
      const listDetails = titles.map((t) => {
        return element[t.id] ? element[t.id] : null;
      });
      return listDetails;
    });
    return lists;
  }

  const pagination = () => {
    const currentPage = 0;
    return IterateList().slice(currentPage, currentPage + pageLength);
  };

  return (
    <>
      <TableUI
        titles={titles}
        actions={actions}
        iterateEntries={pagination()}
      />
      {entries.length > pageLength && (
        <Pagination valuePage="10" valueData="15" />
      )}
    </>
  );
}

export { Table };
