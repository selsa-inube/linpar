import {
  StyledTable,
  StyledThead,
  StyledTbody,
  StyledTr,
  StyledThAction,
  StyledThTitle,
  StyledTd,
} from "./styles";
import { Text } from "../Text";
import { MdOpenInNew } from "react-icons/md";
import { useMediaQuery } from "@inube/design-system/dist/hooks/useMediaQuery";
import { useEffect } from "react";
import { useState } from "react";

const sizeScreens = [
  { name: "desktopLarge", size: "(min-width: 1155px)" },
  { name: "desktopMedium", size: "(max-width: 1154px)" },
  { name: "desktopSmall", size: "(max-width: 1010px)" },
  { name: "tabletLarge", size: "(max-width: 850px)" },
  { name: "tabletMedium", size: "(max-width: 740px)" },
  { name: "tabletSmall", size: "(max-width: 610px)" },
  { name: "mobile", size: "(max-width: 390px)" },
];

function titlesOrder(titles) {
  return titles
    .sort((a, b) =>
      a.responsiveOrder > b.responsiveOrder
        ? 1
        : a.responsiveOrder < b.responsiveOrder
        ? -1
        : 0
    )
    .map((i) => i.id);
}

function showActionTitle(actionTitle, size) {
  return size === sizeScreens[0].name ||
    size === sizeScreens[1].name ||
    size === sizeScreens[2].name ? (
    <>
      {actionTitle.map((action) => (
        <StyledThAction key={`action-${action.id}`}>
          <Text typoToken="labelMedium" align="center">
            {action.actionName}
          </Text>
        </StyledThAction>
      ))}
    </>
  ) : (
    <StyledThAction>
      <Text typoToken="labelMedium" align="center">
        Open
      </Text>
    </StyledThAction>
  );
}

function ShowAction(actionContent, entry, size) {
  return size === sizeScreens[0].name ||
    size === sizeScreens[1].name ||
    size === sizeScreens[2].name ? (
    <>
      {actionContent.map((action) => (
        <StyledTd key={`${entry.id}-${action.id}`}>{action.content}</StyledTd>
      ))}
    </>
  ) : (
    <StyledTd>
      <MdOpenInNew />
    </StyledTd>
  );
}

function TableUI(props) {
  const { titles, actions, entries } = props;
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const desktopLarge = useMediaQuery(sizeScreens[0].size);
  const desktopMedium = useMediaQuery(sizeScreens[1].size);
  const desktopSmall = useMediaQuery(sizeScreens[2].size);
  const tabletLarge = useMediaQuery(sizeScreens[3].size);
  const tabletMedium = useMediaQuery(sizeScreens[4].size);
  const tabletSmall = useMediaQuery(sizeScreens[5].size);
  const mobile = useMediaQuery(sizeScreens[6].size);

  const screenResolution = () => {
    let size = "";
    if (desktopLarge) size = sizeScreens[0].name;
    if (desktopMedium) size = sizeScreens[1].name;
    if (desktopSmall) size = sizeScreens[2].name;
    if (tabletLarge) size = sizeScreens[3].name;
    if (tabletMedium) size = sizeScreens[4].name;
    if (tabletSmall) size = sizeScreens[5].name;
    if (mobile) size = sizeScreens[6].name;

    return size;
  };

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const actualSize = windowSize < 1154 ? titlesOrder(titles) : titles;

  return (
    <StyledTable>
      <StyledThead size={screenResolution()}>
        <StyledTr>
          {titles.map((title) => (
            <StyledThTitle key={`title-${title.id}`} colum={actualSize}>
              <Text typoToken="labelMedium">{title.titleName}</Text>
            </StyledThTitle>
          ))}
          {showActionTitle(actions, screenResolution())}
        </StyledTr>
      </StyledThead>
      <StyledTbody>
        {entries.map((entry) => (
          <StyledTr key={`entry-${entry.id}`}>
            {titles.map((title) =>
              entry[title.id] ? (
                <StyledTd
                  key={`e-${entry[title.id]}`}
                  size={screenResolution()}
                >
                  <Text typoToken="bodySmall">{entry[title.id]}</Text>
                </StyledTd>
              ) : (
                <StyledTd
                  key={`e-${entry[title.id]}`}
                  size={screenResolution()}
                >
                  <Text typoToken="bodySmall">{null}</Text>
                </StyledTd>
              )
            )}
            {ShowAction(actions, entry, screenResolution())}
          </StyledTr>
        ))}
      </StyledTbody>
    </StyledTable>
  );
}

export { TableUI };
