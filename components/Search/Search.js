import { useMemo, useState } from "react";

import { QUERIES } from "../../constants";
import { Search as SearchIcon } from "react-feather";
import styled from "styled-components";
import { toLowerWithHyphen } from "../../utils";
import { useRouter } from "next/navigation";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const onSubmit = useMemo(() => {
    function searchCountry(e) {
      e.preventDefault();
      if (!search) return;
      router.push(`/country/${toLowerWithHyphen(search)}`);
    }

    return searchCountry;
  }, [search, router]);

  return (
    <Wrapper onSubmit={onSubmit}>
      <VisuallyHidden htmlFor="search">Search for a country:</VisuallyHidden>
      <SearchIcon size={16} color="var(--gray-400)" />
      <TextInput
        type="text"
        placeholder="Search for a country..."
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Wrapper>
  );
}

const Wrapper = styled.form`
  box-shadow: 0px 2px 4px hsla(0, 0%, 0%, 0.05);
  border-radius: ${5 / 16}rem;
  background-color: ${({ theme }) => theme.accent};
  margin: 1.5rem 1rem 2.5rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  max-width: 30rem;

  svg {
    display: revert;
    margin-right: 1.5rem;
  }

  @media ${QUERIES.tabletAndUp} {
    margin-inline: 5rem;
    flex: 1;
  }
`;

const VisuallyHidden = styled.label`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

const TextInput = styled.input`
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  border: transparent;
  width: 100%;

  &::placeholder {
    color: var(--gray-300);
    font-size: ;
  }

  &:focus {
    outline: transparent;
  }
`;

export default Search;
