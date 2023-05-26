import { useState } from "react";
import { GeneralInformationFormUI } from "./interface";
import { userData } from "../../../../../../../mocks/apps/privileges/GeneralInformationForm.mock";

function GeneralInformationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [user, setUser] = useState({
    name: { value: userData.name, state: "pending" },
    identification: { value: userData.identification, state: "pending" },
    number: { value: userData.number, state: "pending" },
    email: { value: userData.email, state: "pending" },
    rol: { value: userData.rol, state: "pending" },
  });

  const LOADING_TIMEOUT = 2000;

  const validations = {
    number: (value) => /^\d{10}$/g.test(value),
    email: (value) =>
      /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(value),
    rol: (value) => /(^[a-zA-Z])|(\s+[a-zA-Z])/g.test(value),
  };

  const runValidations = (name, value) => {
    const isValid = validations[name](value);
    return isValid ? "valid" : "invalid";
  };

  const handleChange = (event, fieldName) => {
    const { value } = event.target;

    setUser((prevState) => ({
      ...prevState,
      [fieldName]: {
        ...prevState[fieldName],
        value: value,
        state: runValidations(fieldName, value),
      },
    }));
  };

  const handleButtons = Object.values(user).every(
    (user) => user.state === "pending"
  );

  const handleCloseSectionMessage = () => {
    setShowMessage(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.values(user).some((prop) => prop.state === "invalid")) {
      setFormInvalid(true);
      setShowMessage(true);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFormInvalid(false);
      setShowMessage(true);
    }, LOADING_TIMEOUT);
  };

  return (
    <GeneralInformationFormUI
      isLoading={isLoading}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      user={user}
      allowSubmit={true}
      formInvalid={formInvalid}
      runValidations={runValidations}
      showMessage={showMessage}
      handleCloseSectionMessage={handleCloseSectionMessage}
      handleButtons={handleButtons}
    />
  );
}

export { GeneralInformationForm };
