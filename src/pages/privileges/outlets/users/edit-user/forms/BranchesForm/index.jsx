import { useState } from "react";
import { BranchesFormUI } from "./interface";

function BranchesForm(props) {
  const {
    allowSubmit,
    handleChange,
    handleSubmit,
    currentBranches,
    isLoading,
  } = props;

  const [branches, setBranches] = useState([
    {
      id: "1231",
      city: "City 1",
      isActive: true,
    },
    {
      id: "2543",
      city: "City 2",
      isActive: false,
    },
    {
      id: "3654",
      city: "City 3",
      isActive: true,
    },
    {
      id: "4456",
      city: "City 4",
      isActive: false,
    },
    {
      id: "4456",
      city: "City 4",
      isActive: false,
    },
    {
      id: "4456",
      city: "City 4",
      isActive: false,
    },
    {
      id: "4456",
      city: "City 4",
      isActive: false,
    },
    {
      id: "4456",
      city: "City 4",
      isActive: false,
    },
    {
      id: "4456",
      city: "City 4",
      isActive: false,
    },
    {
      id: "4456",
      city: "City 4",
      isActive: false,
    },
    {
      id: "4456",
      city: "City 4",
      isActive: false,
    },
    {
      id: "4456",
      city: "City 4",
      isActive: false,
    },
    {
      id: "4456",
      city: "City 4",
      isActive: false,
    },
    {
      id: "4456",
      city: "City 4",
      isActive: false,
    },
    {
      id: "4456",
      city: "City 4",
      isActive: false,
    },
    {
      id: "4456",
      city: "City 4",
      isActive: false,
    },
  ]);

  const handleAllDeallocate = (e) => {
    e.preventDefault();

    setBranches((prevBranches) => {
      const newBranches = prevBranches.map((branch) => {
        return {
          ...branch,
          isActive: false,
        };
      });

      return newBranches;
    });
  };

  const handleAllAllocate = (e) => {
    e.preventDefault();

    setBranches((prevBranches) => {
      const newBranches = prevBranches.map((branch) => {
        return {
          ...branch,
          isActive: true,
        };
      });

      return newBranches;
    });
  };

  const handleToggleBranch = (id) => {
    setBranches((prevBranches) => {
      const newBranches = prevBranches.map((branch) => {
        if (branch.id === id) {
          return {
            ...branch,
            isActive: !branch.isActive,
          };
        }

        return branch;
      });

      return newBranches;
    });
  };

  return (
    <BranchesFormUI
      handleAllDeallocate={handleAllDeallocate}
      handleAllAllocate={handleAllAllocate}
      branches={branches}
      handleToggleBranch={handleToggleBranch}
      handleSubmit={handleSubmit}
      isLoading={isLoading}
      allowSubmit={allowSubmit}
    />
  );
}

export { BranchesForm };
