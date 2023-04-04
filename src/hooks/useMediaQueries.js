import { useEffect, useState } from "react";

const useMediaQueries = (queries) => {
  const [value, setValue] = useState({});

  useEffect(() => {
    const mediaQueryLists = queries.map(({ breakpoint }) =>
      window.matchMedia(breakpoint)
    );

    const getValue = () => {
      const media = {};
      mediaQueryLists.forEach((i) => {
        media[i.media] = i.matches;
      });
      return media;
    };

    setValue(getValue);

    const handleChange = () => setValue(getValue);

    mediaQueryLists.forEach((i) => i.addListener(handleChange));

    return () => mediaQueryLists.forEach((i) => i.removeListener(handleChange));
  }, [queries]);

  return value;
};

export { useMediaQueries };
