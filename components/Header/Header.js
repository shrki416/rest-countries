import { Moon, Sun } from "react-feather";

import { QUERIES } from "../../constants";
import styled from "styled-components";

const Header = ({ theme, toggleTheme }) => {
  return (
    <Wrapper>
      <MainHeading>Where in the world?</MainHeading>

      <Toggle onClick={toggleTheme}>
        {theme === "dark" ? (
          <Sun size={16} color="var(--white)" />
        ) : (
          <Moon size={16} color="var(--blue-700)" />
        )}
        <span>{theme === "dark" ? "Light" : "Dark"} Mode</span>
      </Toggle>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  box-shadow: 0px 2px 4px hsla(0, 0%, 0%, 0.06);
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.text};

  @media ${QUERIES.tabletAndUp} {
    padding-block: 1.5rem;
    padding-inline: 5rem;
  }
`;

const MainHeading = styled.h1`
  font-size: ${14 / 16}rem;
  font-weight: var(--fw-extra-bold);

  @media ${QUERIES.tabletAndUp} {
    font-size: ${18 / 16}rem;
  }

  @media ${QUERIES.laptopAndUp} {
    font-size: ${24 / 16}rem;
  }
`;

const Toggle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    font-size: ${12 / 16}rem;
    margin-left: 0.5rem;
    font-weight: var(--fw-semi-bold);
  }

  @media ${QUERIES.tabletAndUp} {
    span {
      font-size: ${16 / 16}rem;
    }
  }
`;

export default Header;
