import { createPortal } from "react-dom";
import { MdClear } from "react-icons/md";
import {
  Stack,
  Text,
  Blanket,
  useMediaQuery,
  Textfield,
  Icon,
} from "@inube/design-system";
import { StyledModal, StyledDivider } from "./styles";
import { InteractiveModalProps } from "./types";
import { SubjectCard } from "@src/components/cards/SubjectCard";
import { Key, SetStateAction, useState } from "react";
import { SubjectSearchCard } from "@src/components/cards/SubjectSearchCard";

const InteractiveModal = ({
  portalId,
  title,
  closeModal,
  infoData,
  actions = [],
  labels = [],
  infoTitle,
  actionsTitle,
  type = "fields",
  searchData,
  divider,
}: InteractiveModalProps) => {
  const smallScreen = useMediaQuery("(max-width: 580px)");
  const hasActions = actions.length > 0;
  const hasLabels = labels.length > 0;
  const node = document.getElementById(portalId);
  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setFilterText(e.target.value);
  };

  const filteredSearchData = filterText
    ? searchData.filter(
        (data: { username: string; userID: string }) =>
          data.username.toLowerCase().includes(filterText.toLowerCase()) ||
          data.userID.toLowerCase().includes(filterText.toLowerCase())
      )
    : searchData;

  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return createPortal(
    <Blanket>
      <StyledModal smallScreen={smallScreen}>
        <Stack direction="column" gap="24px">
          <Stack direction="column" gap="20px">
            <Stack alignItems="center" justifyContent="space-between">
              <Text type="headline" size="small" appearance="dark">
                {title}
              </Text>
              <Icon
                appearance={"dark"}
                icon={<MdClear />}
                spacing="wide"
                size="24px"
                cursorHover
                onClick={closeModal}
              />
            </Stack>
            {infoTitle && (
              <Text type="body" size="medium" appearance="gray">
                {infoTitle}
              </Text>
            )}
            {divider && <StyledDivider smallScreen={smallScreen} />}
            {type === "fields" ? (
              hasLabels ? (
                labels.map(
                  (field) =>
                    infoData[field.id] && (
                      <Textfield
                        key={field.id}
                        label={field.titleName}
                        name={field.id}
                        id={field.id}
                        placeholder={field.titleName}
                        value={infoData[field.id]}
                        fullwidth={true}
                        type="text"
                        size="compact"
                      />
                    )
                )
              ) : (
                Object.keys(infoData).map((index) => (
                  <Textfield
                    key={index}
                    label={index}
                    name={index}
                    id={index}
                    placeholder={index}
                    value={infoData[index]}
                    fullwidth={true}
                    type="text"
                    size="compact"
                  />
                ))
              )
            ) : (
              <>
                <Textfield
                  key="searchField"
                  label={"Digita el nombre o numero de identificación."}
                  name="searchField"
                  id="searchField"
                  placeholder={"Digita el nombre o numero de identificación."}
                  value={filterText}
                  onChange={handleFilterChange}
                  fullwidth={true}
                  type="text"
                  size="compact"
                />
                {filterText &&
                  filteredSearchData &&
                  filteredSearchData.map(
                    (data: {
                      id: Key | null | undefined;
                      username: string;
                    }) => (
                      <SubjectSearchCard
                        key={data.id}
                        subjectData={data}
                        title={data.username}
                        onClick={undefined}
                      />
                    )
                  )}
              </>
            )}
          </Stack>
          {hasActions && (
            <Stack direction="column" gap="16px">
              <Text type="title" size="medium" appearance="dark">
                {actionsTitle}
              </Text>
              {actions.map((action) => (
                <Stack key={action.id} gap="10px">
                  {typeof action.content === "function"
                    ? action.content(infoData)
                    : action.content}
                </Stack>
              ))}
            </Stack>
          )}
        </Stack>
      </StyledModal>
    </Blanket>,
    node
  );
};

export { InteractiveModal };
