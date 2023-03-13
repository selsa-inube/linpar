import { Menu } from "..";
import { Default as Header } from "../../../Header/stories/Header.stories";
import { mockApps } from "../../../../mocks/home/apps.mock";
import linparLogo from "../../../../assets/images/linpar.png";
import {
  StyledContainer,
  StyledStoryContainer,
  StyledHeaderContainer,
} from "./stories.styles";
import { BrowserRouter } from "react-router-dom";

const story = {
  title: "components/navigation/Menu",
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

const withLayout = (Template) => (args) =>
  (
    <StyledContainer>
      <StyledHeaderContainer>
        <Header
          username="Leonardo Garzón"
          businessName="Fondoccidente"
          appLogoAlt="Linpar"
          appLogo={linparLogo}
        />
      </StyledHeaderContainer>
      <StyledStoryContainer>
        <Template {...args} />
      </StyledStoryContainer>
    </StyledContainer>
  );

const withFullDisplay = (Template) => (args) =>
  (
    <StyledStoryContainer>
      <Template {...args} />
    </StyledStoryContainer>
  );

const Template = (args) => <Menu {...args} />;

export const Default = withFullDisplay(Template.bind({}));
Default.args = {
  links: mockApps,
  title: "Menú",
};

export const Layout = withLayout(Template.bind({}));
Layout.args = {
  links: mockApps,
  title: "Menú",
};

export default story;
