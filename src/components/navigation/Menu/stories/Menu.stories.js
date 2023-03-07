import { Menu } from "..";
// import { Header } from "../../../Header";
import { mockApps } from "../../../../mocks/home/apps.mock";
// import {
//   StyledContainer,
//   StyledStoryContainer,
//   StyledHeaderContainer,
// } from "./stories.styles";
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

// const withLayout = (Template) => (args) =>
//   (
//     <StyledContainer>
//       <StyledHeaderContainer>
//         <Header />
//       </StyledHeaderContainer>
//       <StyledStoryContainer>
//         <Template {...args} />
//       </StyledStoryContainer>
//     </StyledContainer>
//   );

const Template = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: mockApps,
  title: "Menú",
};

// export const Layout = withLayout(Template.bind({}));
// Layout.args = {
//   links: mockApps,
//   title: "Menú",
// };

export default story;
