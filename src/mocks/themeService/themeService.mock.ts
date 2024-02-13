import { presente } from "@inube/design-system";

const fetchTokenData = () => {
  return new Promise((resolve) => {
    const mockApiResponse = {
      presente,
    };
    setTimeout(() => resolve(mockApiResponse.presente), 5);
  });
};

export { fetchTokenData };
