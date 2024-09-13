import { businessUnitDataMock } from "@src/mocks/login/businessUnit.mock";
import { RadioBusinessUnit, RadioBusinessUnitProps } from "./index";

const story = {
  components: [RadioBusinessUnit],
  title: "components/Cards/RadioBusinessUnit",
  argTypes: {
    handleChange: { action: "checked" },
  },
};

const Default = (args: RadioBusinessUnitProps) => (
  <RadioBusinessUnit {...args} />
);

Default.args = {
  id: businessUnitDataMock[2].id,
  name: "businessUnit",
  value: businessUnitDataMock[2].name,
  label: businessUnitDataMock[2].name,
  logo: businessUnitDataMock[2].logo,
};

export default story;

export { Default };
