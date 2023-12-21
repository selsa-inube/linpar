import { Textfield, useMediaQuery } from "@inube/design-system";
import { useState } from "react";
import { StyledSearchUserCard } from "./styles";
import { ILabel } from "./types";
import { InteractiveModal } from "@src/components/feedback/InteractiveModal";
import { MdSearch } from "react-icons/md";

interface SubjectCardProps {
  userData: Record<string, string | number>;
  infoData: Record<string, string | number>;
  title: string | any;
  infoTitle: string;
  labels?: ILabel[] | any;
  icon: JSX.Element | any;
}

function SearchUserCard(props: SubjectCardProps) {
  const { infoData, userData, title, infoTitle, labels, icon } = props;
  const [showModal, setShowModal] = useState(false);
  const smallScreen = useMediaQuery("(max-width: 970px)");

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <StyledSearchUserCard
        onClick={handleToggleModal}
        smallScreen={smallScreen}
        isActive={showModal}
      >
        <Textfield
          label="Nombre"
          name="searchUser"
          id="searchUser"
          placeholder="Buscar usuario"
          type="search"
          required={true}
          iconAfter={<MdSearch />}
          size="compact"
          fullwidth={true}
          readOnly
          // value={searchText}
          // onChange={handleSearchText}
        />
      </StyledSearchUserCard>
      {showModal && (
        <InteractiveModal
          title={title}
          infoTitle={infoTitle}
          closeModal={handleToggleModal}
          infoData={infoData}
          labels={labels}
          portalId="portal"
          searchData={userData}
          divider
          type="search"
        />
      )}
    </>
  );
}

export { SearchUserCard };
export type { SubjectCardProps };
