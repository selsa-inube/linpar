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

  const checkAllQueries = (mediaQueryObject) => {
    const updateMedia = { ...matches };
    mediaQueryObject.forEach((query) => {
      updateMedia[query.media] = query.matches;
    });
    return updateMedia;
  };

  const handleChange = (mediaQueryList) => {
    // setMatches({...matches, [mediaQueryList.media]:true})
    // setMatches({ [mediaQueryList.media]:mediaQueryList.matches });
    setMatches({ ...matches, [mediaQueryList.media]: mediaQueryList.matches });
  };

  const updateState = (mediaQueryList) =>
    setMatches(checkAllQueries(mediaQueryList));

  useEffect(() => {
    const mediaQueryList = queries.map((breakpoint) =>
      window.matchMedia(breakpoint)
    );

    updateState(mediaQueryList);

    mediaQueryList.forEach((mediaQueryObject) =>
      mediaQueryObject.addEventListener("change", () =>
        handleChange(mediaQueryObject)
      )
    );

    return () =>
      mediaQueryList.forEach((i) =>
        i.removeEventListener("change", () => updateState(mediaQueryList))
      );
  }, []);

  return matches;
};

export { useMediaQueries };
