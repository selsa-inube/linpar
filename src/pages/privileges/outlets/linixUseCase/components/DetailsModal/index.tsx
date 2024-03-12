import { useState } from "react";
import { Icon } from "@inube/design-system";
import { InteractiveModal } from "@components/feedback/InteractiveModal";
import { UseCase } from "@pages/privileges/outlets/linixUseCase/types";

interface IDetailsModalProps {
  icon: JSX.Element;
  useCase: UseCase;
}

export function DetailsModal(props: IDetailsModalProps) {
  const { icon, useCase } = props;
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(false);
  };
  return (
    <>
      <Icon
        icon={icon}
        size="16px"
        appearance="dark"
        onClick={() => setShowModal(true)}
        cursorHover
      />
      {showModal && (
        <InteractiveModal
          portalId="portal"
          title="Detalles caso de uso"
          infoData={{
            Codigo: useCase?.k_usecase || "",
            Nombre: useCase?.n_usecase || "",
            Tipo: useCase?.i_tipusec || "",
            Descripicion: useCase?.n_descrip || "",
            OpcionClienteServidor: useCase?.n_camprv || "",
          }}
          infoTitle="Información"
          closeModal={handleClick}
        />
      )}
    </>
  );
}
