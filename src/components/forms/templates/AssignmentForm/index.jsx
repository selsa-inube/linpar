import { useState } from "react";
import { AssignmentFormUI } from "./interface";

function AssignmentForm(props) {
  const { handleChange, entries, title } = props;
  const [filter, setFilter] = useState("");

  const handleToggleAllEntries = (e, allocate) => {
    e.preventDefault();
    const newEntries = entries.map((entry) => ({
      ...entry,
      isActive: allocate,
    }));

    handleChange(newEntries);
  };

  const handleToggleEntry = (id) => {
    const newEntries = entries.map((entry) => {
      if (entry.id === id) {
        return {
          ...entry,
          isActive: !entry.isActive,
        };
      }

      return entry;
    });

    handleChange(newEntries);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <AssignmentFormUI
      handleToggleAllEntries={handleToggleAllEntries}
      handleToggleEntry={handleToggleEntry}
      filter={filter}
      handleFilter={handleFilter}
      entries={entries}
      title={title}
    />
  );
}

export { AssignmentForm };
