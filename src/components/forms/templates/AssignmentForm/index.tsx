import { IOption } from "@components/navigation/Menu/types";
import { useState } from "react";
import { AssignmentFormUI } from "./interface";
import { IEntry } from "./types";

interface AssignmentFormProps {
  handleChange: (entries: IEntry[]) => void;
  entries: IEntry[];
  title: string;
  readOnly?: boolean;
  setChangedData?: (changeData: IEntry[]) => void;
  changeData?: IEntry[];
}

function AssignmentForm(props: AssignmentFormProps) {
  const {
    handleChange,
    entries,
    title,
    readOnly,
    setChangedData = () => {},
    changeData = [],
  } = props;
  const [filter, setFilter] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [isAssignAll, setIsAssignAll] = useState(false);

  const [copyEntries] = useState(entries);

  const menuOptions: IOption[] = [
    {
      id: "allocate-all",
      label: "Asignar todos",
      handleClick: () => handleToggleAllEntries(true),
    },
    {
      id: "deallocate-all",
      label: "Desasignar todos",
      handleClick: () => handleToggleAllEntries(false),
    },
  ];

  const handleToggleAllEntries = (allocate: boolean) => {
    const newEntries = entries.map((entry) => ({
      ...entry,
      isActive: allocate,
    }));

    const changedEntries = newEntries.filter(
      (entry, index) => entry.isActive !== entries[index].isActive
    );
    setIsAssignAll(allocate);
    handleChange(newEntries);
    if (changedEntries.length > 0) {
      setChangedData(changedEntries);
    }
  };

  const handleToggleEntry = (id: string) => {
    const newEntries = entries.map((entry) => {
      if (entry.id === id) {
        const updatedEntry = {
          ...entry,
          isActive: !entry.isActive,
        };
        const updatedChangedData = copyEntries.reduce((acc, copy) => {
          if (copy.id === updatedEntry.id) {
            if (copy.isActive !== updatedEntry.isActive) {
              return [
                ...acc.filter((e) => e.id !== updatedEntry.id),
                updatedEntry,
              ];
            } else {
              return acc.filter((e) => e.id !== updatedEntry.id);
            }
          }
          return acc;
        }, changeData);

        setChangedData(updatedChangedData);
        return updatedEntry;
      }
      return entry;
    });

    handleChange(newEntries);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleToggleMenuInvitation = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleCloseMenuInvitation = () => {
    setShowMenu(false);
  };

  return (
    <AssignmentFormUI
      handleToggleAllEntries={handleToggleAllEntries}
      handleToggleEntry={handleToggleEntry}
      filter={filter}
      handleFilter={handleFilter}
      entries={entries}
      title={title}
      showMenu={showMenu}
      handleToggleMenuInvitation={handleToggleMenuInvitation}
      handleCloseMenuInvitation={handleCloseMenuInvitation}
      menuOptions={menuOptions}
      isAssignAll={isAssignAll}
      readOnly={readOnly}
    />
  );
}

export { AssignmentForm };
export type { AssignmentFormProps };
