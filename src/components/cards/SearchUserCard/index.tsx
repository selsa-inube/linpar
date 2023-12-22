import { Textfield, useMediaQuery } from "@inube/design-system";
import { useState } from "react";
import { StyledSearchUserCard } from "./styles";
import { ILabel } from "./types";
import { InteractiveModal } from "@src/components/feedback/InteractiveModal";
import { MdSearch } from "react-icons/md";

interface SearchUserCardProps {
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
  title: string | any;
  infoTitle: string;
  labels?: ILabel[] | any;
  onUserSelect: (data: Record<string, string | number>) => void;
}

function SearchUserCard(props: SearchUserCardProps) {
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
    onUserSelect,
  } = props;
  const [showModal, setShowModal] = useState(false);
  const [selectedUsername, setSelectedUsername] = useState(""); // State for the selected username
  const smallScreen = useMediaQuery("(max-width: 970px)");

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleUserSelect = (data: any) => {
    if (data && data.username) {
      setSelectedUsername(data.username);
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
          value={selectedUsername}
        />
      </StyledSearchUserCard>
      {showModal && (
        <InteractiveModal
          title={title}
          infoTitle={infoTitle}
          closeModal={handleToggleModal}
          infoData={searchFieldData}
          labels={labels}
          portalId="portal"
          searchData={userData}
          id={idModal}
          name={nameModal}
          label={labelModal}
          placeholder={placeholderModal}
          divider
          type="search"
          onClick={handleUserSelect}
        />
      )}
    </>
  );
}

export { SearchUserCard };
export type { SearchUserCardProps };
