import { businessUnitDataMock } from "@mocks/login/businessUnit.mock";
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
  id: businessUnitDataMock[2].businessUnitPublicCode,
  name: "BusinessUnit",
  value: businessUnitDataMock[2].abbreviatedName,
  label: businessUnitDataMock[2].abbreviatedName,
  logo: businessUnitDataMock[2].urlLogo,
};

export default story;

export { Default };
