import { Moon, Sun } from "react-feather";

import { QUERIES } from "../../constants";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <MainHeading>Where in the world?</MainHeading>

      <Toggle>
        <Moon size={16} />
        <span>Dark Mode</span>
      </Toggle>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  box-shadow: 0px 2px 4px hsla(0, 0%, 0%, 0.1);
  background-color: var(--white);
  color: var(--blue-700);

  @media ${QUERIES.tabletAndUp} {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
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

  svg {
    fill: currentColor;
  }

  span {
    font-size: ${12 / 16}rem;
    margin-left: 0.5rem;
    font-weight: var(--fw-semi-bold);
  }
`;

export default Header;
