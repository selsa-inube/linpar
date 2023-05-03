import { RadioClient } from "./index";
import { mockClients } from "../../../mocks/login/clients.mock";

const story = {
  components: [RadioClient],
  title: "components/Cards/RadioClient",
  argTypes: {
    handleChange: { action: "checked" },
  },
};

const Default = (args) => <RadioClient {...args} />;
Default.args = {
  id: mockClients[2].id,
  name: "client",
  value: mockClients[2].name,
  label: mockClients[2].name,
  logo: mockClients[2].logo,
};

export default story;

export { Default };
