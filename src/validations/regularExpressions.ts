const regex = {
  onlyLetters: /^[a-zA-ZÁ-Úá-úÑñ\s]*$/,
  emailFormat:
    /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,63}$/i,
  onlyNumbers: /^[0-9]*$/,
  passwordFormat: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
};

export { regex };
