import { useEffect, useState } from "react";

const useMediaQueries = (queries) => {
  const mediaQueryList = queries.map((query) => window.matchMedia(query));

  const initializeState = () => {
    const initialState = {};
    mediaQueryList.forEach((query) => {
      initialState[query.media] = query.matches;
    });
    return initialState;
  };

  const [matches, setMatches] = useState(initializeState);

  const handleChange = (event) => {
    setMatches((prevState) => ({ ...prevState, [event.media]: event.matches }));
  };

  const updateState = () => setMatches(initializeState());

  useEffect(() => {
    updateState();

    mediaQueryList.forEach((mediaQueryObject) =>
      mediaQueryObject.addEventListener("change", handleChange)
    );

    return () =>
      mediaQueryList.forEach((mediaQueryObject) =>
        mediaQueryObject.removeEventListener("change", updateState)
      );
  }, []);

  return matches;
};

export { useMediaQueries };
