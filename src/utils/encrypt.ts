import CryptoJS from "crypto-js";

const secretKey = CryptoJS.enc.Hex.parse(
  "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"
);
const iv = CryptoJS.enc.Hex.parse("abcdef9876543210abcdef9876543210");

export const encrypt = (data: string) => {
  return CryptoJS.AES.encrypt(data, secretKey, { iv }).toString();
};

export const decrypt = (data: string) => {
  const bytes = CryptoJS.AES.decrypt(data, secretKey, { iv: iv });
  return bytes.toString(CryptoJS.enc.Utf8);
};
