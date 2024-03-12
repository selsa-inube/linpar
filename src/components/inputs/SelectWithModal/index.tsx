import { Textfield, useMediaQuery } from "@inube/design-system";
import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";

import { InteractiveModal } from "@components/feedback/InteractiveModal";

import { StyledSearchUserCard } from "./styles";
import { ILabel } from "./types";

interface SelectWithModalProps {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  idModal: string;
  nameModal: string;
  labelModal: string;
  placeholderModal: string;
  userData: Record<string, string | number>;
  searchFieldData: Record<string, string | number>;
  title: string;
  infoTitle: string;
  labels?: ILabel[];
  portalId: string;
  onUserSelect: (data: Record<string, string | number>) => void;
  onReset: (field: () => void) => void;
}

function SelectWithModal(props: SelectWithModalProps) {
  const {
    id,
    label,
    name,
    placeholder,
    idModal,
    nameModal,
    labelModal,
    placeholderModal,
    searchFieldData,
    userData,
    title,
    infoTitle,
    labels,
    portalId,
    onUserSelect,
    onReset,
  } = props;
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const smallScreen = useMediaQuery("(max-width: 970px)");

  useEffect(() => {
    if (onReset) {
      onReset(resetSelected);
    }
  }, [onReset]);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const resetSelected = () => {
    setSelectedItem("");
  };

  const handleSelect = (data: Record<string, string>) => {
    if (data && data.username) {
      setSelectedItem(data.username);
    }
    onUserSelect(data);
    handleToggleModal();
  };

  return (
    <>
      <StyledSearchUserCard
        onClick={handleToggleModal}
        smallScreen={smallScreen}
        isActive={showModal}
      >
        <Textfield
          id={id}
          label={label}
          name={name}
          placeholder={placeholder}
          type="search"
          required={true}
          iconAfter={<MdSearch />}
          size="compact"
          fullwidth={true}
          readOnly
          value={selectedItem}
        />
      </StyledSearchUserCard>
      {showModal && (
        <InteractiveModal
          title={title}
          infoTitle={infoTitle}
          closeModal={handleToggleModal}
          infoData={searchFieldData}
          labels={labels}
          portalId={portalId}
          searchData={userData}
          id={idModal}
          name={nameModal}
          label={labelModal}
          placeholder={placeholderModal}
          divider
          type="search"
          onClick={handleSelect}
        />
      )}
    </>
  );
}

export { SelectWithModal };
export type { SelectWithModalProps };
