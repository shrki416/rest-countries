import { Moon, Sun } from "react-feather";

import { QUERIES } from "../../constants";
import styled from "styled-components";
import { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <Wrapper>
      <MainHeading>Where in the world?</MainHeading>

      <Toggle onClick={toggleTheme}>
        {isDarkMode ? (
          <Sun size={16} color="var(--blue-700)" />
        ) : (
          <Moon size={16} color="var(--blue-700)" />
        )}
        <span>{isDarkMode ? "light" : "dark"} Mode</span>
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
  background-color: var(--white);
  color: var(--blue-700);

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
`;

export default Header;
