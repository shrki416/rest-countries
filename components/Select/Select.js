import { ChevronDown, ChevronUp } from "react-feather";
import { useCallback, useEffect, useMemo, useState } from "react";

import { QUERIES } from "../../constants";
import styled from "styled-components";
import { useRouter } from "next/router";

const Select = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const regions = [
    { label: "africa", value: "Africa" },
    { label: "america", value: "America" },
    { label: "asia", value: "Asia" },
    { label: "europe", value: "Europe" },
    { label: "oceania", value: "Oceania" },
  ];

  useEffect(() => {
    if (selectedRegion !== "") {
      router.push(`/region/${selectedRegion.toLowerCase()}`);
    }

    return () => {
      setSelectedRegion("");
    };
  }, [selectedRegion]);

  function selectOption(option) {
    setSelectedRegion(option);
    setIsOpen(false);
  }

  return (
    <Container
      tabIndex={0}
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
    >
      <Span>{selectedRegion ? selectedRegion : "Filter by Region"}</Span>
      {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      <ListBox isOpen={isOpen}>
        {regions.map(({ label, value }) => (
          <ListItem
            key={label}
            onClick={(e) => {
              e.stopPropagation();
              selectOption(value);
            }}
          >
            {value}
          </ListItem>
        ))}
      </ListBox>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--white);
  box-shadow: 0px 2px 4px hsla(0, 0%, 0%, 0.05);
  border-radius: ${5 / 16}rem;
  position: relative;
  width: 14em;
  min-height: 1.5em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 14px 24px;
  margin: 1.5rem 1rem 2.5rem;
  border-radius: 5px;
  outline: transparent;
  font-size: ${12 / 16}rem;
  color: var(--blue-700);

  &:focus {
    border-color: red;
  }

  @media ${QUERIES.tabletAndUp} {
    margin-inline: 5rem;
    font-size: ${14 / 16}rem;
    line-height: ${20 / 16}rem;
  }
`;

const Span = styled.span`
  flex-grow: 1;
`;

const ListBox = styled.ul`
  margin: 0;
  padding: 0.5rem 1.5rem;
  list-style: none;

  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  max-height: 15em;
  overflow-y: auto;
  border-radius: 5px;
  width: 100%;
  left: 0;
  top: calc(100% + 0.25em);
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 2px 4px hsla(0, 0%, 0%, 0.05);
`;

const ListItem = styled.li`
  cursor: pointer;
  padding-block: 0.5rem;

  /* &:highlighted {
    background-color: green;
    color: white;
  }
  &:selected {
    background-color: red;
  } */
`;

export default Select;
