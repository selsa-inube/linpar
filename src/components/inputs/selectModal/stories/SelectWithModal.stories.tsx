import { StoryFn } from "@storybook/react";
import { SelectModal, SelectWithModalProps } from "..";
import { economicActivitiesMock } from "./economicActivities.mocks";

const story = {
  component: SelectModal,
  title: "components/inputs/SelectModal",
};

const Template: StoryFn<SelectWithModalProps> = (args) => (
  <SelectModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  portalId: "portal",
  onCloseModal: () => {},
  activities: economicActivitiesMock,
  onSelect: () => {},
  modalDescription: "Búsqueda de las actividades económicas",
};

export default story;
