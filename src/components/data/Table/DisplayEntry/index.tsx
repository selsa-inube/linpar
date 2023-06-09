import { InteractiveModal } from "@components/feedback/InteractiveModal";
import { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import { IAction, ITitles } from "../types";

interface DisplayEntryProps {
  entry: object;
  actions: IAction[];
  title: string;
  titleFields: ITitles[];
}

function DisplayEntry(props: DisplayEntryProps) {
  const { entry, actions, title, titleFields } = props;

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
          fields={titleFields}
        />
      )}
    </>
  );
}

export { DisplayEntry };
export type { DisplayEntryProps };
