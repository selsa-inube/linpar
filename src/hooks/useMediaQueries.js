import { useEffect, useState } from "react";

const useMediaQueries = (queries) => {
  const initializeState = () => {
    const initialState = {};
    queries.forEach((breakpoint) => {
      initialState[breakpoint] = false;
    });
    return initialState;
  };

  const [matches, setMatches] = useState(initializeState());

  const checkAllQueries = (mediaQueries) => {
    const updateMedia = { ...matches };
    mediaQueries.forEach((i) => {
      updateMedia[i.media] = i.matches;
    });
    return updateMedia;
  };

  const validationState = (mediaQueryList) => {
    const validationMedia = {};
    const { matches, media } = mediaQueryList.findLast(
      (mediaQueryList) => mediaQueryList.matches
    );
    validationMedia[media] = matches;
    return validationMedia;
  };

  const handleChange = (mediaQueryList) =>
    setMatches(validationState(mediaQueryList));

  const handleUpdateState = (mediaQueryList) =>
    setMatches(checkAllQueries(mediaQueryList));

  useEffect(() => {
    const lists = queries.map((breakpoint) => window.matchMedia(breakpoint));

    handleUpdateState(lists);

    lists.forEach((i) =>
      i.addEventListener("change", () => handleChange(lists))
    );

    return () =>
      lists.forEach((i) =>
        i.removeEventListener("change", () => handleUpdateState(lists))
      );
  }, []);

  return matches;
};

export { useMediaQueries };
