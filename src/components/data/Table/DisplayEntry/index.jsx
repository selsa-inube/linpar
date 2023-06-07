import { InteractiveModal } from "@components/feedback/InteractiveModal";
import { useState } from "react";
import { MdOpenInNew } from "react-icons/md";

function DisplayEntry(props) {
  const { entry, actions, title } = props;

  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <MdOpenInNew onClick={handleToggleModal} />
      {showModal && (
        <InteractiveModal
          title={title}
          closeModal={handleToggleModal}
          infoData={entry}
          actions={actions}
        />
      )}
    </>
  );
}

export { DisplayEntry };
