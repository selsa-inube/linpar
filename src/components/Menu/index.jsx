import {
  StyledMenu,
  StyledTitle,
  StyledButtons,
  StyledDivisor,
  StyledFooter,
} from "./styles";
import { Text } from "../data/Text";
import { Stack } from "../layout/Stack";
import { IconButtonMenu } from "../inputs/Button";
import { mockApps } from "../../mocks/home/apps.mock";
import { MdKeyboardArrowRight } from "react-icons/md";

function Menu() {
  return (
    <StyledMenu>
      <Stack>
        <StyledTitle>
          <Text typoToken="titleSmall">Menú</Text>
        </StyledTitle>
        <StyledButtons>
          {mockApps.map((app, index) => (
            <IconButtonMenu
              id={app.id}
              label={app.label}
              icon={app.icon}
              icon2={<MdKeyboardArrowRight />}
              //change number to style test
              className={index === 0 ? "active" : ""}
            />
          ))}
        </StyledButtons>
        <StyledDivisor />
      </Stack>
      <StyledFooter>
        <Text typoToken="labelMedium">© 2022 Sistemas Enlinea S.A</Text>
      </StyledFooter>
    </StyledMenu>
  );
}

export { Menu };
