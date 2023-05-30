import { useState, useEffect } from "react";
import { GeneralInformationFormUI } from "./interface";

function GeneralInformationForm(props) {
  const { allowSubmit, handleChange, userData } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const initialUser = {
    name: { value: userData.name, state: "pending" },
    identification: { value: userData.identification, state: "pending" },
    number: { value: userData.number, state: "pending" },
    email: { value: userData.email, state: "pending" },
    rol: { value: userData.rol, state: "pending" },
  };
  const [user, setUser] = useState(initialUser);

  const LOADING_TIMEOUT = 2000;

  const validations = {
    name: (value) => /(^[a-zA-Z])|(\s+[a-zA-Z])/g.test(value),
    identification: (value) => /^\d/g.test(value),
    number: (value) => /^\d{10}$/g.test(value),
    email: (value) =>
      /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(value),
    rol: (value) => /(^[a-zA-Z])|(\s+[a-zA-Z])/g.test(value),
  };

  const runValidations = (name, value) => {
    return validations[name](value);
  };

  const handleFieldChange = (event, fieldName) => {
    const { value } = event.target;

    setUser((prevState) => ({
      ...prevState,
      [fieldName]: {
        ...prevState[fieldName],
        value: value,
        state: runValidations(fieldName, value) ? "valid" : "invalid",
      },
    }));
  };

  useEffect(() => {
    handleChange(user);
  }, [user]);

  const handleButtons = Object.values(user).every(
    (user) => user.state === "pending"
  );

  const handleCloseSectionMessage = () => {
    setShowMessage(false);
  };

  const resetValues = () => {
    setUser(initialUser);
  };

  const isFieldModified = (fieldName) => {
    return initialUser[fieldName].value !== "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.values(user).some((prop) => prop.state === "invalid")) {
      setFormInvalid(true);
      setShowMessage(true);
      return;
    }

    if (!handleButtons) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setFormInvalid(false);
        setShowMessage(true);
      }, LOADING_TIMEOUT);
    }
  };

  return (
    <GeneralInformationFormUI
      isLoading={isLoading}
      handleSubmit={handleSubmit}
      handleFieldChange={handleFieldChange}
      user={user}
      allowSubmit={allowSubmit}
      formInvalid={formInvalid}
      runValidations={runValidations}
      showMessage={showMessage}
      handleCloseSectionMessage={handleCloseSectionMessage}
      handleButtons={handleButtons}
      resetValues={resetValues}
      isFieldModified={isFieldModified}
    />
  );
}

export { GeneralInformationForm };
