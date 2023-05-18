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
  name: "David Leonardo Garzón Páramo",
  identification: "1013614213",
  phone: "320 5510052",
  mail: "d.garzon@sistemasenlinea.com.co",
};

const Template = (args) => <SubjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  userData: data,
  title: "User Information",
};

export default story;
