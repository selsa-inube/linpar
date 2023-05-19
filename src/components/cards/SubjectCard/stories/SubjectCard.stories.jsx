import { SubjectCard } from "../../SubjectCard";
import { BrowserRouter } from "react-router-dom";

const story = {
  component: [SubjectCard],
  title: "components/cards/SubjectCard",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const data = {
  Name: "David Leonardo Garzón Páramo",
  Identification: "1013614213",
  Phone: "320 5510052",
  Mail: "d.garzon@sistemasenlinea.com.co",
};

const Template = (args) => <SubjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  subjectData: data,
  title: "User Information",
};

export default story;
