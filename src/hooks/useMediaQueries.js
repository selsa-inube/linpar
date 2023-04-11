import { useEffect, useState } from "react";

const useMediaQueries = (queries) => {
  const getQueries = () => {
    const media = {};
    queries.forEach(({ breakpoint }) => {
      media[breakpoint] = false;
    });
    return media;
  };

  const [matches, setMatches] = useState(getQueries());

  const updateState = (mediaQueries) => {
    const updateMedia = { ...matches };
    mediaQueries.forEach((i) => {
      updateMedia[i.media] = i.matches;
    });
    return updateMedia;
  };

  const validationState = (mediaQueries) => {
    const validationMedia = {};
    const { matches, media } = mediaQueries.findLast(
      (mediaQueries) => mediaQueries.matches
    );
    validationMedia[media] = matches;
    return validationMedia;
  };

  const handleChange = (mediaQueries) =>
    setMatches(validationState(mediaQueries));

  const handleUpdateState = (mediaQueries) =>
    setMatches(updateState(mediaQueries));

  useEffect(() => {
    const mediaQueryLists = queries.map(({ breakpoint }) =>
      window.matchMedia(breakpoint)
    );

    handleChange(mediaQueryLists);

    handleUpdateState(mediaQueryLists);

    mediaQueryLists.forEach((i) =>
      i.addEventListener("change", () => handleChange(mediaQueryLists))
    );

    return () =>
      mediaQueryLists.forEach((i) =>
        i.removeEventListener("change", () =>
          handleUpdateState(mediaQueryLists)
        )
      );
  }, [queries]);

  return matches;
};

export { useMediaQueries };
