import { Nav } from "..";
import { Default as Header } from "../../../Header/stories/Header.stories";
import { appsConfig } from "../../../../pages/home/config/apps.config";
import linparLogo from "../../../../assets/images/linpar.png";
import {
  StyledContainer,
  StyledStoryContainer,
  StyledHeaderContainer,
} from "./stories.styles";
import { BrowserRouter } from "react-router-dom";

const story = {
  title: "components/navigation/Nav",
  component: [Nav],
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
          userName="Leonardo Garzón"
          businessUnit="Fondoccidente"
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

const Template = (args) => <Nav {...args} />;

export const Default = withFullDisplay(Template.bind({}));
Default.args = {
  links: appsConfig,
  title: "Menú",
};

export const Layout = withLayout(Template.bind({}));
Layout.args = {
  links: appsConfig,
  title: "Menú",
};

export default story;
