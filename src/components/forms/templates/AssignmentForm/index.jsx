import { useState } from "react";
import { AssignmentFormUI } from "./interface";

function AssignmentForm(props) {
  const { handleChange, entries, title } = props;
  const [filter, setFilter] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const menuOptions = [
    {
      id: "deallocate-all",
      label: "Desasignar todos",
      handleClick: (e) => handleToggleAllEntries(e, true),
      icon: null,
    },
    {
      id: "allocate-all",
      label: "Asignar todos",
      handleClick: (e) => handleToggleAllEntries(e, false),
      icon: null,
    },
  ];

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
    />
  );
}

export { AssignmentForm };
