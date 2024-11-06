import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { Searchfield } from "@inubekit/input";
import { useMediaQuery } from "@inubekit/hooks";
import { InteractiveModal } from "@components/feedback/InteractiveModal";
import { ILabel } from "./types";
import { StyledSearchUserCard } from "./styles";

interface SearchUserCardProps {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  idModal: string;
  nameModal: string;
  labelModal: string;
  placeholderModal: string;
  userData: { [key: string]: string | number }[] | Record<string, unknown>[];
  searchFieldData: Record<string, string | number>;
  title: string;
  infoTitle: string;
  labels?: ILabel[];
  onUserSelect: (data: { [key: string]: string | number }) => void;
  onReset: (field: () => void) => void;
  idLabel?: string;
  nameLabel?: string;
  selectedId?: string;
  required?: boolean;
  message?: string;
  status?: string | null;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchUserCard(props: SearchUserCardProps) {
  const {
    required = false,
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
    idLabel = "userID",
    nameLabel = "username",
    selectedId,
    onReset,
    message,
    onBlur,
  } = props;
  const [showModal, setShowModal] = useState(false);

  const [selectedUsername, setSelectedUsername] = useState(
    String(
      userData.find((data) => data[idLabel] === selectedId)?.[nameLabel] || ""
    )
  );

  const [validateCardRemoved, setValidateCardRemoved] = useState(false);

  const smallScreen = useMediaQuery("(max-width: 970px)");

  useEffect(() => {
    setSelectedUsername(
      String(
        userData.find((data) => data[idLabel] === selectedId)?.[nameLabel] || ""
      )
    );
  }, [idLabel, selectedId, nameLabel, userData]);

  const resetSelectedUser = () => {
    setSelectedUsername("");
  };

  useEffect(() => {
    if (onReset) {
      onReset(resetSelectedUser);
    }
  }, [onReset]);

  useEffect(() => {
    if (validateCardRemoved) {
      setSelectedUsername("");
    }
  }, [validateCardRemoved]);

  const handleToggleModal = () => {
    setShowModal(!showModal);
    setValidateCardRemoved(false);
  };

  const handleUserSelect = (data: { [key: string]: string | number }) => {
    if (data && data[nameLabel]) {
      setSelectedUsername(String(data[nameLabel]));
    }
    onUserSelect(data);
    handleToggleModal();
  };

  return (
    <>
      <StyledSearchUserCard
        onClick={handleToggleModal}
        $smallScreen={smallScreen}
        $isActive={showModal}
      >
        <Searchfield
          id={id}
          label={label}
          name={name}
          placeholder={placeholder}
          type="search"
          required={required}
          iconAfter={<MdSearch />}
          size="compact"
          fullwidth={true}
          value={selectedUsername}
          message={message}
          onBlur={onBlur}
        />
      </StyledSearchUserCard>
      {showModal && (
        <InteractiveModal
          title={title}
          selectedItem={selectedId}
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
          idLabel={idLabel}
          nameLabel={nameLabel}
          setValidateCardRemoved={setValidateCardRemoved}
        />
      )}
    </>
  );
}

export { SearchUserCard };
export type { SearchUserCardProps };
