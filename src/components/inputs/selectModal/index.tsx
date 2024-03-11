import { useState } from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import {
  Icon,
  Text,
  Blanket,
  useMediaQuery,
  Stack,
  Textfield,
} from "@inube/design-system";

import { ISelectWithModalOptions } from "./types";
import { StyledBody, StyledModal, StyledDivider } from "./styles";
import { FieldsetItem } from "@src/components/cards/FieldsetItem";

export interface SelectWithModalProps {
  portalId: string;
  onCloseModal: () => void;
  activities: ISelectWithModalOptions[];
  selectedActivityId?: string;
  onSelect: (selectedItem: ISelectWithModalOptions) => void;
  modalDescription?: string;
}

function SelectModal(props: SelectWithModalProps) {
  const {
    portalId,
    onCloseModal,
    activities,
    selectedActivityId,
    onSelect,
    modalDescription = "",
  } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const isMobile = useMediaQuery("(max-width: 550px)");
  const node = document.getElementById(portalId);

  if (node === null) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  const filteredActivities = activities.filter(
    (activity: ISelectWithModalOptions) =>
      activity.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return createPortal(
    <Blanket>
      <StyledModal smallScreen={isMobile}>
        <Stack direction="column" gap="s100">
          <Stack justifyContent="space-between" alignItems="center">
            <Text
              type="title"
              size={isMobile ? "small" : "medium"}
              appearance="dark"
            >
              Búsqueda
            </Text>

            <Icon
              appearance="dark"
              size="20px"
              spacing="none"
              icon={<MdOutlineClose />}
              onClick={onCloseModal}
              cursorHover
            />
          </Stack>
          <Text
            type="body"
            size={isMobile ? "small" : "medium"}
            appearance="gray"
          >
            {modalDescription}
          </Text>
        </Stack>

        {selectedActivityId &&
          activities.map(
            (activity: ISelectWithModalOptions) =>
              activity.id === selectedActivityId && (
                <FieldsetItem
                  key={activity.id}
                  id={activity.id}
                  description={activity.description}
                  onClick={() => onSelect(activity)}
                />
              )
          )}

        <StyledDivider dashed />
        <Stack direction="column" gap={isMobile ? "s200" : "s250"}>
          <Text type="body" size={isMobile ? "small" : "medium"}>
            Digita una palabra clave o código.
          </Text>
          <Textfield
            name="searchActivity"
            id="searchActivity"
            placeholder="Digita la palabra clave"
            onChange={(e: any) => setSearchTerm(e.target.value)}
            size="compact"
            isFullWidth
          />
          {searchTerm !== "" && (
            <StyledBody>
              {filteredActivities.length > 0 ? (
                filteredActivities.map((activity: ISelectWithModalOptions) => (
                  <FieldsetItem
                    key={activity.id}
                    id={activity.id}
                    description={activity.description}
                    onClick={() => onSelect(activity)}
                  />
                ))
              ) : (
                <Text type="body" size="small" appearance="gray">
                  No se han encontrado actividades para &quot;{searchTerm}&quot;
                </Text>
              )}
            </StyledBody>
          )}
        </Stack>
      </StyledModal>
    </Blanket>,
    node
  );
}

export { SelectModal };
