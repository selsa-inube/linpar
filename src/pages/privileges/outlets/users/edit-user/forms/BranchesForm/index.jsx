import { useState } from "react";
import { BranchesFormUI } from "./interface";

const onToggleAllBranches = (branches, allocate) => {
  let newBranches = [];
  if (allocate) {
    newBranches = branches.map((branch) => {
      return {
        ...branch,
        isActive: true,
      };
    });
  } else {
    newBranches = branches.map((branch) => {
      return {
        ...branch,
        isActive: false,
      };
    });
  }

  return newBranches;
};

const onToggleBranch = (branches, id) => {
  const newBranches = branches.map((branch) => {
    if (branch.id === id) {
      return {
        ...branch,
        isActive: !branch.isActive,
      };
    }

    return branch;
  });

  return newBranches;
};

function FormWithSubmit(props) {
  const { handleSubmit, currentBranches, isLoading } = props;

  const [branches, setBranches] = useState(currentBranches);

  const handleToggleAllBranches = (e, allocate) => {
    e.preventDefault();

    setBranches((prevBranches) => onToggleAllBranches(prevBranches, allocate));
  };

  const handleToggleBranch = (id) => {
    setBranches((prevBranches) => onToggleBranch(prevBranches, id));
  };

  const handleCancelChanges = (e) => {
    e.preventDefault();

    setBranches(currentBranches);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    handleSubmit(branches);
  };

  return (
    <BranchesFormUI
      handleToggleAllBranches={handleToggleAllBranches}
      currentBranches={currentBranches}
      branches={branches}
      handleToggleBranch={handleToggleBranch}
      handleSubmitForm={handleSubmitForm}
      isLoading={isLoading}
      allowSubmit
      handleCancelChanges={handleCancelChanges}
    />
  );
}

function FormWithoutSubmit(props) {
  const { handleChange, currentBranches, isLoading } = props;

  const handleToggleAllBranches = (e, allocate) => {
    e.preventDefault();

    handleChange(onToggleAllBranches(currentBranches, allocate));
  };

  const handleToggleBranch = (id) => {
    handleChange(onToggleBranch(currentBranches, id));
  };

  return (
    <BranchesFormUI
      handleToggleAllBranches={handleToggleAllBranches}
      branches={currentBranches}
      handleToggleBranch={handleToggleBranch}
      isLoading={isLoading}
    />
  );
}

function BranchesForm(props) {
  const {
    allowSubmit,
    handleChange,
    handleSubmit,
    currentBranches,
    isLoading,
  } = props;

  if (allowSubmit) {
    return (
      <FormWithSubmit
        allowSubmit={allowSubmit}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        currentBranches={currentBranches}
        isLoading={isLoading}
      />
    );
  }

  return (
    <FormWithoutSubmit
      allowSubmit={allowSubmit}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      currentBranches={currentBranches}
      isLoading={isLoading}
    />
  );
}

export { BranchesForm };
