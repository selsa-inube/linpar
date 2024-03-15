import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";

import { linixUseCases } from "@mocks/privileges/linixUseCases/LinixUseCases.mock";
import { SelectWithModal, SelectWithModalProps } from ".";

const story = {
  component: SelectWithModal,
  title: "components/inputs/selectWithModal",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const searchData = {
  "Digita el nombre o el código del caso de uso linix.": "",
};

const Template: StoryFn<SelectWithModalProps> = (args) => (
  <SelectWithModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: linixUseCases as [],
  searchFieldData: searchData,
  label: "Casos de uso linix",
  name: "searchLinixUseCase",
  id: "searchLinixUseCase",
  placeholder: "Buscar caso de uso linix",
  title: "Búsqueda",
  infoTitle: "Busca el caso de uso linx.",
  idModal: "searchField",
  nameModal: "searchField",
  labelModal: "Digita el nombre o el código del caso de uso linix.",
  placeholderModal: "Digita el nombre o el código del caso de uso linix.",
  portalId: "portal",
  onUserSelect: () => {},
};

export default story;
