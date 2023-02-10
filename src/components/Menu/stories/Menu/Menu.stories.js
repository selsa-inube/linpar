import { Menu } from "../..";
import { mockApps } from "../../../../mocks/home/apps.mock";
import { StyledContainer, StyledStoryContainer } from "./stories.styles";
import { BrowserRouter } from "react-router-dom";

const story = {
  title: "components/Menu",
  component: [Menu],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const withGrid = (Template) => (args) =>
  (
    <StyledContainer>
      <StyledStoryContainer>
        <Template {...args} />
      </StyledStoryContainer>
    </StyledContainer>
  );

const Template = (args) => <Menu {...args} />;

export const Default = withGrid(Template.bind({}));
Default.args = {
  links: mockApps,
  title: "Menú",
};

export default story;
