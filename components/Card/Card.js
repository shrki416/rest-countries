import { formatNumber, toLowerWithHyphen } from "../../utils";

import styled from "styled-components";

function Card({ data: { name, flags, population, region, capital } }) {
  const country = toLowerWithHyphen(name);
  return (
    <Wrapper href={`/${country}`}>
      <Flag src={flags.png} alt={flags.alt} id={name} />
      <Details>
        <h2>{name}</h2>
        <p>
          Population: <span>{formatNumber(population)}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </Details>
    </Wrapper>
  );
}

const Wrapper = styled.a`
  --border-radius: 5px;
  --color: var(--blue-700);
  display: block;
  margin: 2.5rem auto;
  width: max-content;
  border-radius: var(--border-radius);
  background: var(--white);
  box-shadow: 0 0 7px 2px hsla(0, 0%, 0%, 0.03);
  text-decoration: none;
  color: var(--color);
`;

const Flag = styled.img`
  cursor: pointer;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
`;

const Details = styled.div`
  padding: 1.5rem 1.5rem 2.875rem;
  color: var(--color);

  & h2 {
    margin-bottom: 1rem;
    font-size: ${18 / 16}rem;
    line-height: ${26 / 16}rem;
    font-weight: var(--fw-extra-bold);
  }

  p {
    font-size: ${14 / 16}rem;
    line-height: ${16 / 16}rem;
    font-weight: var(--fw-semi-bold);
  }

  p:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  span {
    font-weight: var(--fw-light);
  }
`;

export default Card;
