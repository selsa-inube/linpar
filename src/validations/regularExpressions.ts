const regex = {
  onlyLetters: /^[a-zA-ZÁ-Úá-úÑñ\s]*$/,
  emailFormat:
    /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,63}$/i,
  onlyNumbers: /^[0-9]*$/,
};

export { regex };
