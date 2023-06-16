import { InteractiveModal } from "@components/feedback/InteractiveModal";
import { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import { IAction, ITitles } from "../types";

interface DisplayEntryProps {
  entry: Record<string, string | number>;
  actions: IAction[];
  title: string;
  titleLabels: ITitles[];
}

function DisplayEntry(props: DisplayEntryProps) {
  const { entry, actions, title, titleLabels } = props;

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
          labels={titleLabels}
        />
      )}
    </>
  );
}

export { DisplayEntry };
export type { DisplayEntryProps };
